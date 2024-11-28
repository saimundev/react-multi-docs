"use client";

import {
  selectBoxCss,
  selectInputCss,
  selectList,
  selectListCheckbox,
  selectListChip,
  selectListGroup,
  selectListInput,
} from "@/components/ExampleCode";
import NextPage from "@/components/NextPage";
import PrevPage from "@/components/PrevPage";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const page = () => {
  return (
    <div>
      <span className="text-sm font-semibold text-blue-500">custom css</span>
      <h1 className="text-4xl font-black py-2">How to use custom css</h1>

      <div className="mt-10">
        <h4 className="text-xl font-bold">Select Input</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {selectInputCss}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h4 className="text-xl font-bold">Select Box</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {selectBoxCss}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h4 className="text-xl font-bold">Select List Box</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {selectListGroup}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h4 className="text-xl font-bold">Select List</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {selectList}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h4 className="text-xl font-bold">Search Input</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {selectListInput}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h4 className="text-xl font-bold">Checkbox</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {selectListCheckbox}
        </SyntaxHighlighter>
      </div>

      <div className="mt-20">
        <h4 className="text-xl font-bold">Chip</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {selectListChip}
        </SyntaxHighlighter>
      </div>

      <div className="flex justify-between mt-20">
        <PrevPage url="/doc/custom-css" title="How to use custom css" />
        <NextPage url="/doc/accessibility" title="How to use accessibility" />
      </div>
    </div>
  );
};

export default page;
