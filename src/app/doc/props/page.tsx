"use client";
import NextPage from "@/components/NextPage";
import PrevPage from "@/components/PrevPage";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  const modalProps = [
    {
      prop: "options",
      type: "Options[]",
      default: [],
      description: "Array of options for the dropdown.",
    },
    {
      prop: "onChange",
      type: "(Options[]) => void",
      default: undefined,
      description: "Callback function triggered on option change.",
    },
    {
      prop: "isSearchable",
      type: "boolean",
      default: false,
      description: "Enables or disables the search functionality.",
    },
    {
      prop: "placeholderText",
      type: "string",
      default: "",
      description: "Text displayed when no options are selected.",
    },
    {
      prop: "chip",
      type: "boolean",
      default: true,
      description: "Displays selected options as removable chips.",
    },
    {
      prop: "checked",
      type: "boolean",
      default: true,
      description: "Pre-checks options when set to true.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the dropdown when set to true.",
    },
    {
      prop: "defaultValue",
      type: "Options[]",
      default: "[]",
      description: "Array of pre-selected options.",
    },
    {
      prop: "creatable",
      type: "boolean",
      default: false,
      description: "Allows creation of new options dynamically.",
    },
    {
      prop: "emptyState",
      type: "boolean",
      default: false,
      description: "Displays a message when no options are available.",
    },
    {
      prop: "size",
      type: '"sm","md","lg"',
      default: "md",
      description: "Adjusts the size of the dropdown (small, medium, large).",
    },

    {
      prop: "width",
      type: "number",
      default: 400,
      description: "Sets the custom width of the dropdown.",
    },
    {
      prop: "maxHeight",
      type: "number",
      default: 300,
      description: "Maximum height for the dropdown menu.",
    },
    {
      prop: "maxLengthShow",
      type: "number",
      default: 10,
      description:
        "Maximum number of visible options before scrolling is enabled.",
    },
  ];

  return (
    <>
      <span className="text-sm font-semibold text-blue-500">Props</span>
      <h1 className="text-4xl font-black py-2">How to use props</h1>
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-2">Modal Component</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] font-bold text-xl">
                Prop
              </TableHead>
              <TableHead className="font-bold text-xl">Type</TableHead>
              <TableHead className="font-bold text-xl">Default</TableHead>
              <TableHead className="text-right font-bold text-xl">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {modalProps.map((props) => (
              <TableRow key={props.prop}>
                <TableCell className="font-medium text-base">
                  {props.prop}
                </TableCell>
                <TableCell className="font-medium text-base">
                  {props.type}
                </TableCell>
                <TableCell className="font-medium text-base">
                  {props.default}
                </TableCell>
                <TableCell className="text-right font-medium text-base">
                  {props.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between mt-20">
        <PrevPage url="/doc/usage" title="How to usage" />
        <NextPage url="/doc/custom-css" title="How to use custo css" />
      </div>
    </>
  );
};

export default page;
