"use client";

import { simpleMultiSelectCode } from "@/components/ExampleCode";
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
  return (
    <div>
      <div className="">
        <span className="text-sm font-semibold text-blue-500">Usage</span>
        <h1 className="text-4xl font-black py-2">How to usage</h1>
      </div>

      <div className="mt-10">
        <h1 className="modal-type-title">Start with simple multi select</h1>
        <div className="border border-gray-300 p-4 flex justify-center items-center">
          <MultiSelect options={options} onChange={() => {}} />
        </div>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {simpleMultiSelectCode}
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
