
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
      placeholderText={"Select Froutes"}
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
      emptyState={"No Item"}
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

export const modalDividerCss = `
.customModalDivider {
  width: 100%;
  height: 1px;
  background-color: #e5e4e2;
  margin: 8px 0px;
 
}
`;
