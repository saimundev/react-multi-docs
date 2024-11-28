import InstallCommand from "@/components/InstallCommand";
import NextPage from "@/components/NextPage";
import { Check } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="">
        <span className="text-sm font-semibold text-blue-500">
          Installation
        </span>
        <h1 className="text-4xl font-black py-2">
          Get started with React Multi
        </h1>
        <p className="text-lg text-gray-700 dark:text-white/90">
          A lightweight, customizable multi-select component for web
          applications. Easy to integrate, responsive, and supports user
          interactions with customizable responses. Ideal for overlays, alerts,
          and dialogs without complex setup
        </p>
      </div>
      <div className="mt-10">
        <h3 className="text-3xl font-semibold py-2"> Features</h3>
        <div className="flex gap-2 items-center mb-1">
          <Check size={22} />
          <span className="text-lg font-medium">Simple setup and usage.</span>
        </div>
        <div className="flex gap-2 items-center mb-1">
          <Check size={22} />
          <span className="text-lg font-medium">
            Fully responsive design for all screen sizes.
          </span>
        </div>
        <div className="flex gap-2 items-center mb-1">
          <Check size={22} />
          <span className="text-lg font-medium">
            {" "}
            Customizable styles and behavior.
          </span>
        </div>
        <div className="flex gap-2 items-center mb-1">
          <Check size={22} />
          <span className="text-lg font-medium">
            Built-in support for user interactions and responses.
          </span>
        </div>
        <div className="flex gap-2 items-center mb-1">
          <Check size={22} />
          <span className="text-lg font-medium">
            Lightweight with minimal dependencies.
          </span>
        </div>
        <div className="flex gap-2 items-center mb-1">
          <Check size={22} />
          <span className="text-lg font-medium">Typescript support</span>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold py-2">Installation</h3>
        <InstallCommand text="npm i react-multi" type="npm" />
        <InstallCommand text="yarn add react-multi" type="yarn" />
        <InstallCommand text="pnpm add react-multi" type="pnpm" />
      </div>

      <div className="flex justify-end mt-20">
        <NextPage title="How to usage" url="/doc/usage" />
      </div>
    </div>
  );
};

export default page;
