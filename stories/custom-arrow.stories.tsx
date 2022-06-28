import { text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import styled from "@emotion/styled";

import MultiSelect from "../src/multi-select";
import { options } from "./constants";

export default {
  title: "Custom Arrow",
  decorators: [withKnobs],
};

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
`;

export const ExampleCustomArrow = () => {
  const [selected, setSelected] = useState([]);

  const ArrowRenderer = ({ expanded }) => <>{expanded ? "🦉" : "🦚"}</>;

  const CustomClearIcon = () => <div>🤘</div>;

  return (
    <div>
      <pre>{JSON.stringify(selected)}</pre>
      <Wrapper>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy={text("labelledBy", "Select Fruits")}
          ArrowRenderer={ArrowRenderer}
          onMenuToggle={(isOpen) => console.debug("onMenuToggle", isOpen)}
          ClearIcon={<CustomClearIcon />}
          ClearSelectedIcon={<CustomClearIcon />}
        />
      </Wrapper>
    </div>
  );
};

ExampleCustomArrow.story = {
  name: "Arrow",
};
