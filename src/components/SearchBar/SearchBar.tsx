import React, { useState } from "react";
import { Radio, Select, Space } from "antd";
import type { ConfigProviderProps, RadioChangeEvent, SelectProps } from "antd";
import "./SearchBar.css";

type SizeType = ConfigProviderProps["componentSize"];

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value: string | string[]) => {
  console.log(`Selected: ${value}`);
};

const SearchBar: React.FC = () => {
  const [size, setSize] = useState<SizeType>("middle");

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
    <>
      <div className="searchItem">
        <Select
          size={size}
          defaultValue="Please Select"
          onChange={handleChange}
          style={{ width: 200 }}
          options={options}
        />

        <Select
          size={size}
          defaultValue="Please Select"
          onChange={handleChange}
          style={{ width: 200 }}
          options={options}
        />

        <Select
          size={size}
          defaultValue="Please Select"
          onChange={handleChange}
          style={{ width: 200 }}
          options={options}
        />
      </div>
    </>
  );
};

export default SearchBar;
