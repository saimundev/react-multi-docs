import { ChangeEvent, useEffect, useRef, useState } from "react";
import ArrowDownIcon from "./ArrowDownIcon";
import "./multiselect.css";
import { MultiSelectProps, Options } from "./multiSelect.interface";
import CheckIcon from "./CheckIcon";
import CloseIcon from "./CloseIcon";
import CircleClose from "./CircleClose";

export const MultiSelect = ({
  options = [],
  onChange,
  isSearchable,
  placeholderText = "Select Item",
  chip = true,
  checked = true,
  disabled,
  defaultValue = [],
  creatable,
  emptyState = "No results found",
  size = "md",
  width = 400,
  maxHeight = 300,
  maxLengthShow = 10,
  maxAcceptItem,
  hideHeader,
}: MultiSelectProps) => {
  const [selecteOptions, setSelecteOptions] = useState(options);
  const [active, setActive] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);
  const [selected, setSelected] = useState<Options[]>(defaultValue || []);
  const [creatableText, setCreateableText] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const boxRef = useRef<HTMLDivElement>(null);
  const inputRdf = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleSelectBoxClose = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    window.addEventListener("click", handleSelectBoxClose);
    return () => {
      window.removeEventListener("click", handleSelectBoxClose);
    };
  }, []);

  useEffect(() => {
    inputRdf.current?.focus();
  }, [active]);

  useEffect(() => {
    setCheckedAll(options.length === selected.length);
  }, [selected.length]);

  useEffect(() => {
    const handleCloseWithKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(false); // Set the state to false
      }
    };
    window.addEventListener("keydown", handleCloseWithKey);

    return () => {
      window.removeEventListener("keydown", handleCloseWithKey);
    };
  }, []);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, selecteOptions, highlightedIndex]);

  const handleSelectList = (selectedList: Options) => {
    setSelected((prevSelected) => {
      const existItem = prevSelected.find(
        (item) => item.value === selectedList.value
      );
      if (existItem) {
        return prevSelected.filter((item) => item.value !== selectedList.value);
      } else {
        return maxAcceptItem === selected.length
          ? prevSelected
          : [...prevSelected, selectedList];
      }
    });

    onChange(selected);
  };

  const selectedCheckList = (selectValue: string | number) => {
    return selected.some((item) => item.value === selectValue) ? (
      <CheckIcon className="custom-list-icon" />
    ) : (
      ""
    );
  };

  const showConditionlySelectedItem = (item: Options, index: number) => {
    if (chip) {
      return (
        <>
          <span
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="custom-select-chip"
          >
            {item.label}{" "}
            <span
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => handleSelectList(item)}
            >
              {" "}
              <CircleClose />
            </span>
          </span>
        </>
      );
    } else {
      return (
        <>
          {item.label}
          {selected.length > 1 && index < selected.length - 1 ? "," : ""}
        </>
      );
    }
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setCreateableText(searchTerm);

    // Filter only from the original options (not including created options)
    const filteredOptions = options.filter((item) =>
      item.value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSelecteOptions(filteredOptions);
  };

  const checkedList = (check: string | number) => {
    return (
      <div className="" style={{ position: "relative" }}>
        <input
          type="checkbox"
          checked={selected.some((itme) => itme.value === check)}
          className="custom-select-checkbox"
        />
        {selected.some((itme) => itme.value === check) && (
          <div className="custom-select-checkbox-icon">
            <CheckIcon className="custom-box-icon" />
          </div>
        )}
      </div>
    );
  };

  const handleCheckedAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (maxAcceptItem) return;
    setCheckedAll(e.target.checked);
    if (e.target.checked) {
      setSelected(options);
    } else {
      setSelected([]);
    }
  };

  const handleCreatable = () => {
    if (creatableText.trim()) {
      const newOption = { label: creatableText, value: creatableText };

      setSelected((prevSelected) => {
        return [...prevSelected, newOption];
      });

      setSelecteOptions(options);

      setCreateableText("");
    }
  };

  const handleInputSize = () => {
    const inputSize = {
      sm: "sm",
      md: "md",
      lg: "lg",
    };

    return inputSize[size] || "md";
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!active) return;

    if (e.key === "ArrowDown") {
      // Move down
      setHighlightedIndex((prevIndex) =>
        prevIndex < selecteOptions.length - 1 ? prevIndex + 1 : 0
      );
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      // Move up
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : selecteOptions.length - 1
      );
      e.preventDefault();
    } else if (e.key === "Enter") {
      // Select the highlighted option
      if (highlightedIndex !== -1) {
        handleSelectList(selecteOptions[highlightedIndex]);
      }
      e.preventDefault();
    }
  };

  return (
    <div className="custom-select" style={{ width: width }}>
      <div
        className={`custom-select-input ${
          disabled && "disabled"
        } ${handleInputSize()}`}
        onClick={(e) => {
          e.stopPropagation();
          if (disabled) return;
          setActive(!active);
        }}
      >
        <small className="custom-select-chip-group">
          {selected.length > 0
            ? selected.length > maxLengthShow
              ? `${selected.length} itmes selected`
              : selected.map((item, index) => (
                  <span key={item.value}>
                    {showConditionlySelectedItem(item, index)}
                  </span>
                ))
            : placeholderText}
        </small>
        <ArrowDownIcon
          className={`common ${active ? "arrow-down" : "arrow-up"}`}
        />
      </div>

      {/* render list item and select */}
      <div
        ref={boxRef}
        className={`custom-select-box ${active ? "active" : ""}`}
      >
        {!hideHeader && (
          <div className="custom-select-header">
            <div className="" style={{ position: "relative" }}>
              <div className="">
                <input
                  type="checkbox"
                  checked={checkedAll}
                  onChange={handleCheckedAll}
                  className="custom-select-checkbox"
                />
                {checkedAll && (
                  <div className="test">
                    <CheckIcon className="custom-box-icon" />
                  </div>
                )}
              </div>
            </div>

            {isSearchable && (
              <input
                type="search"
                name=""
                id=""
                value={creatableText}
                onChange={handleSearch}
                ref={inputRdf}
                className="custom-select-search-input"
                placeholder="Search Item"
              />
            )}
            <div
              className="custom-select-colose-btn"
              onClick={() => setActive(!active)}
            >
              <CloseIcon />
            </div>
          </div>
        )}

        {selecteOptions.length > 0 ? (
          <div
            className="custom-select-group-list"
            style={{ maxHeight: maxHeight }}
          >
            {selecteOptions.map((list, index) => (
              <div
                key={list.value}
                className={`custom-select-list ${
                  index === highlightedIndex ? "highlighted" : ""
                }`}
                onClick={() => handleSelectList(list)}
              >
                <div className="custom-select-list-chip">
                  {checked && checkedList(list.value)}
                  {list.label}
                </div>
                <div className="">
                  {!checked && selectedCheckList(list.value)}
                </div>
              </div>
            ))}
          </div>
        ) : creatable ? (
          <div onClick={handleCreatable} className="custom-select-creatable">
            Create <strong>"{creatableText}"</strong>{" "}
          </div>
        ) : (
          <div className="notfound-message">{emptyState}</div>
        )}
      </div>
    </div>
  );
};
