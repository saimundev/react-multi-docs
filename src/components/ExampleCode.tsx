export const simpleMultiSelectCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];
  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect options={options} onChange={handleSelect} />
 );
};

export default App;
`;

export const multiSelectSearchableCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];
  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      isSearchable
   />
 );
};

export default App;
`;

export const multiSelectCheckedCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];
  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      checked={false}
   />
 );
};

export default App;
`;

export const multiSelectWidthCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];
  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      width={500}
   />
 );
};

export default App;
`;

export const multiSelectMaxHeightCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];
  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      maxHeight={500}
   />
 );
};

export default App;
`;

export const multiSelectCreateableCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];

  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect}
      isSearchable 
      creatable
   />
 );
};

export default App;
`;

export const multiSelectSizeCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];
  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      size={"sm"}
   />
 );
};

export default App;
`;

export const multiSelectDefaultCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];

  const defaultValue = [
    { value: "vanilla", label: "Vanilla" },
    { value: "mint", label: "Mint" },
  ];
  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      defaultValue={defaultValue}
   />
 );
};

export default App;
`;

export const multiSelectDisabledCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];

  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      disabled
   />
 );
};

export default App;
`;

export const multiSelectAcceptItemCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];

  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      maxAcceptItem={5}
   />
 );
};

export default App;
`;

export const multiSelectPlaceHolderCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];

  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      placeholderText={"Select Item..."}
   />
 );
};

export default App;
`;

export const multiSelectEmptyStateCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];

  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      emptyState={"Item Not Found"}
   />
 );
};

export default App;
`;

export const multiSelectMaxLengthShowCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];

  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      maxLengthShow={6}
   />
 );
};

export default App;
`;

export const multiSelectHideheaderCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];

  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      hideHeader
   />
 );
};

export default App;
`;

export const multiSelectChipFalseCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];

  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      chip={false}
   />
 );
};

export default App;
`;

export const multiSelectCheckedFalseCode = `
import React, { useState } from "react";
import { MultiSelect, Options } from "react-multis";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];

  const handleSelect = (selectedValue: Options[]) => {
    console.log(selectedValue);
  };
 return (
   <MultiSelect 
      options={options} 
      onChange={handleSelect} 
      checked={false}
   />
 );
};

export default App;
`;

export const selectInputCss = `
.custom-select-input {
  background: var(--background-color);
  width: calc(100% - 20);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  overflow: hidden;
}

`;

export const selectBoxCss = `
.custom-select-box {
  background: var(--background-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-color) 0px 5px 15px 0px;
  position: absolute;
  overflow: hidden;
  top: 100%; 
  left: 0;
  visibility: hidden; 
  opacity: 0; 
  transform: translateY(10px) scale(0.9); 
  transform-origin: top left; 
  transition: transform 0.3s ease, opacity 0.3s ease, visibility 0s 0.3s;
  width: 100%;
}

`;

export const selectList = `
.custom-select-list {
  padding: 10px 16px;
  font-size: 16px;
  color: #4b5563;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  transition: background 0.3s ease; 
}

`;

export const selectListInput = `
.custom-select-search-input {
  width: 100%;
  padding: 8px 4px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  outline: none;
}
`;

export const selectListCheckbox = `
.custom-select-checkbox {
  appearance: none; 
  -webkit-appearance: none; 
  -moz-appearance: none;
  width: 22px; 
  height: 22px; 
  border: 1px solid var(--border-color); 
  border-radius: 6px; 
  display: inline-block;
  background-color: #fff; 
  cursor: pointer;
  transition: all 0.2s ease;
}
`;

export const selectListChip = `
.custom-select-chip {
  background: #0a8ba1;
  color: #fff;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
`;

export const selectListGroup = `
.custom-select-group-list {
  overflow-y: auto;
}
`;
