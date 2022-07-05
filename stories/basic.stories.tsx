import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import styled from "@emotion/styled";

import MultiSelect from "../src/multi-select";
import { options } from "./constants";

export default {
  title: "Basic",
  decorators: [withKnobs],
};

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
`;

export const ExampleDefault = () => {
  const [selected, setSelected] = useState([...options.slice(0, 3)]);

  return (
    <Wrapper>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        hasSelectAll={boolean("hasSelectAll", true)}
        isLoading={boolean("isLoading", false)}
        shouldToggleOnHover={boolean("shouldToggleOnHover", false)}
        disableSearch={boolean("disableSearch", false)}
        value={selected}
        disabled={boolean("disabled", false)}
        onChange={setSelected}
        onMenuToggle={(s) => {
          console.debug("Select Toggle: ", s);
        }}
        labelledBy={text("labelledBy", "Select Fruits")}
        className={text("className", "multi-select")}
      />
    </Wrapper>
  );
};

ExampleDefault.story = {
  name: "Basic",
};
