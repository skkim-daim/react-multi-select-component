import React, { useEffect, useState } from "react";

import { ISelectProps, Option } from "../lib/interfaces";

const defaultStrings = {
  allItemsAreSelected: "전체 선택됨",
  clearSearch: "Clear Search",
  clearSelected: "Clear Selected",
  noOptions: "선택할 항목이 없습니다",
  search: "찾기",
  selectAll: "전체 선택",
  selectAllFiltered: "전체 선택 (필터링 적용)",
  selectSomeItems: "선택하세요",
  create: "Create",
};

const defaultProps: Partial<ISelectProps> = {
  value: [],
  hasSelectAll: true,
  className: "multi-select",
  debounceDuration: 200,
  options: [] as Option[],
  defaultIsOpen: true,
};

interface MultiSelectContextProps extends ISelectProps {
  t: (key: string) => string;
  setOptions?;
}

interface MultiSelectProviderProps {
  props: ISelectProps;
  children;
}

const MultiSelectContext = React.createContext<MultiSelectContextProps>(
  {} as MultiSelectContextProps
);

export const MultiSelectProvider = ({
  props,
  children,
}: MultiSelectProviderProps) => {
  const [options, setOptions] = useState(props.options);
  const t = (key) => props.overrideStrings?.[key] || defaultStrings[key];

  useEffect(() => {
    setOptions(props.options);
  }, [props.options]);

  return (
    <MultiSelectContext.Provider
      value={{ t, ...defaultProps, ...props, options, setOptions }}
    >
      {children}
    </MultiSelectContext.Provider>
  );
};

export const useMultiSelect = () => React.useContext(MultiSelectContext);
