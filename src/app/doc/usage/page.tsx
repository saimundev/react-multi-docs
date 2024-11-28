"use client";

import {
  multiSelectAcceptItemCode,
  multiSelectCheckedCode,
  multiSelectCreateableCode,
  multiSelectDisabledCode,
  multiSelectEmptyStateCode,
  multiSelectHideheaderCode,
  multiSelectMaxHeightCode,
  multiSelectMaxLengthShowCode,
  multiSelectPlaceHolderCode,
  multiSelectSearchableCode,
  multiSelectSizeCode,
  multiSelectWidthCode,
  simpleMultiSelectCode,
} from "@/components/ExampleCode";
import { MultiSelect } from "@/components/multi-select/MultiSelect";
import NextPage from "@/components/NextPage";
import PrevPage from "@/components/PrevPage";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const UsagePage = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberryss", label: "Strawberry" },
  ];

  const defaultValue = [
    { value: "raspberry", label: "Raspberry" },
    { value: "pineapple", label: "Pineapple" },
  ];
  return (
    <div>
      <div className="">
        <span className="text-sm font-semibold text-blue-500">Usage</span>
        <h1 className="text-4xl font-black py-2">MultiSelect</h1>
      </div>

      <div className="mt-10">
        <h1 className="modal-type-title">Simple</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect options={options} onChange={() => {}} />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {simpleMultiSelectCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Search</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect isSearchable options={options} onChange={() => {}} />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectSearchableCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Select To Show Checked</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect
            isSearchable
            options={options}
            onChange={() => {}}
            checked={false}
          />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectCheckedCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Customize Width</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect width={600} options={options} onChange={() => {}} />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectSearchableCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Customize Height</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect isSearchable options={options} onChange={() => {}} />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectMaxHeightCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Creatable</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect
            creatable
            isSearchable
            options={options}
            onChange={() => {}}
          />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectCreateableCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Disabled</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect disabled options={options} onChange={() => {}} />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectDisabledCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Size</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect size="sm" options={options} onChange={() => {}} />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectSizeCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Default</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect
            defaultValue={defaultValue}
            options={options}
            onChange={() => {}}
          />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectCreateableCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Maximum Acceptable Items Limit</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect
            maxAcceptItem={2}
            options={options}
            onChange={() => {}}
          />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectAcceptItemCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">PlaceholderText</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect
            maxAcceptItem={2}
            options={options}
            onChange={() => {}}
            placeholderText="Select Item..."
          />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectPlaceHolderCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Empty State</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect
            options={options}
            onChange={() => {}}
            emptyState="Item Not Found"
            isSearchable
          />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectEmptyStateCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Maximum Item To Show</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect
            options={options}
            onChange={() => {}}
            maxLengthShow={2}
          />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectMaxLengthShowCode}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Hide Header</h1>
        <div className="border border-gray-200 p-4 flex justify-center items-center rounded my-4 dark:border-gray-500">
          <MultiSelect options={options} onChange={() => {}} hideHeader />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {multiSelectHideheaderCode}
        </SyntaxHighlighter>
      </div>

      <div className="flex justify-between mt-20">
        <PrevPage url="/doc/installation" title="How to install" />
        <NextPage url="/doc/props" title="How to use props" />
      </div>
    </div>
  );
};

export default UsagePage;
