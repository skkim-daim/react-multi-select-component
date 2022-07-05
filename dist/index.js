var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Dropdown: () => dropdown_default,
  MultiSelect: () => multi_select_default,
  SelectItem: () => select_item_default,
  SelectPanel: () => select_panel_default
});
module.exports = __toCommonJS(src_exports);

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined")
    return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/style.css
styleInject(".rmsc {\n  --rmsc-main: #4285f4;\n  --rmsc-hover: #e9edf2;\n  --rmsc-selected: #e2e6ea;\n  --rmsc-over-hover: #d4d8dd;\n  --rmsc-border: #ccc;\n  --rmsc-gray: #aaa;\n  --rmsc-bg: #fff;\n  --rmsc-p: 10px;\n  --rmsc-radius: 4px;\n  --rmsc-h: 38px;\n  height: 100%;\n  width: 100%;\n}\n.rmsc * {\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n}\n.rmsc .gray {\n  color: var(--rmsc-gray);\n}\n.rmsc .dropdown-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  outline: 0;\n  background-color: var(--rmsc-bg);\n  border: 1px solid var(--rmsc-border);\n}\n.rmsc .dropdown-heading {\n  position: relative;\n  padding: 0 var(--rmsc-p);\n  display: flex;\n  align-items: center;\n  width: 100%;\n  flex: 0 0 var(--rmsc-h);\n  cursor: default;\n  outline: 0;\n  border-bottom: 1px solid var(--rmsc-border);\n}\n.rmsc .dropdown-content {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.rmsc .dropdown-content .panel-content {\n  height: 100%;\n  border-radius: var(--rmsc-radius);\n  background: var(--rmsc-bg);\n  display: flex;\n  flex-direction: column;\n}\n.rmsc .dropdown-content .panel-content .select-panel {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.rmsc .dropdown-container[aria-disabled=true]:focus-within {\n  box-shadow: var(--rmsc-gray) 0 0 0 1px;\n  border-color: var(--rmsc-gray);\n}\n.rmsc .dropdown-heading .dropdown-heading-value {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n.rmsc .clear-selected-button {\n  cursor: pointer;\n  background: none;\n  border: 0;\n  padding: 0;\n  display: flex;\n}\n.rmsc .options {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  margin: 0;\n  padding-left: 0;\n}\n.rmsc .options li {\n  list-style: none;\n  margin: 0;\n}\n.rmsc .select-item {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  padding: var(--rmsc-p);\n  outline: 0;\n}\n.rmsc .select-item:hover,\n.rmsc .select-item:focus {\n  background: var(--rmsc-hover);\n}\n.rmsc .select-item.selected {\n  background: var(--rmsc-selected);\n}\n.rmsc .select-item.selected:hover,\n.rmsc .select-item.selected:focus {\n  background: var(--rmsc-over-hover);\n}\n.rmsc .no-options {\n  padding: var(--rmsc-p);\n  text-align: center;\n  color: var(--rmsc-gray);\n}\n.rmsc .search {\n  width: 100%;\n  flex: 0 0 39px;\n  position: relative;\n  border-bottom: 1px solid var(--rmsc-border);\n}\n.rmsc .search input {\n  background: none;\n  height: var(--rmsc-h);\n  padding: 0 var(--rmsc-p);\n  width: 100%;\n  outline: 0;\n  border: 0;\n}\n.rmsc .search-clear-button {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: none;\n  border: 0;\n  padding: 0 calc(var(--rmsc-p) / 2);\n}\n.rmsc .search-clear-button [hidden] {\n  display: none;\n}\n.rmsc .item-renderer {\n  display: flex;\n  align-items: baseline;\n}\n.rmsc .item-renderer input {\n  margin: 0;\n  margin-right: 5px;\n}\n.rmsc .item-renderer.disabled {\n  opacity: 0.5;\n}\n.rmsc .spinner {\n  animation: rotate 2s linear infinite;\n}\n.rmsc .spinner .path {\n  stroke: var(--rmsc-border);\n  stroke-width: 4px;\n  stroke-linecap: round;\n  animation: dash 1.5s ease-in-out infinite;\n}\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n");

// src/multi-select/index.tsx
var import_react13 = __toESM(require("react"));

// src/hooks/use-multi-select.tsx
var import_react = __toESM(require("react"));
var defaultStrings = {
  allItemsAreSelected: "All items are selected.",
  clearSearch: "Clear Search",
  clearSelected: "Clear Selected",
  noOptions: "No options",
  search: "Search",
  selectAll: "Select All",
  selectAllFiltered: "Select All (Filtered)",
  selectSomeItems: "Select...",
  create: "Create"
};
var defaultProps = {
  value: [],
  hasSelectAll: true,
  isSelectAll: false,
  className: "multi-select",
  debounceDuration: 200,
  options: [],
  defaultIsOpen: true
};
var MultiSelectContext = import_react.default.createContext({});
var MultiSelectProvider = ({
  props,
  children
}) => {
  const [options, setOptions] = (0, import_react.useState)(props.options);
  const t = (key) => {
    var _a;
    return ((_a = props.overrideStrings) == null ? void 0 : _a[key]) || defaultStrings[key];
  };
  (0, import_react.useEffect)(() => {
    setOptions(props.options);
  }, [props.options]);
  return /* @__PURE__ */ import_react.default.createElement(MultiSelectContext.Provider, {
    value: __spreadProps(__spreadValues(__spreadValues({ t }, defaultProps), props), { options, setOptions })
  }, children);
};
var useMultiSelect = () => import_react.default.useContext(MultiSelectContext);

// src/multi-select/dropdown.tsx
var import_react12 = __toESM(require("react"));

// src/hooks/use-did-update-effect.tsx
var import_react2 = require("react");
function useDidUpdateEffect(fn, inputs) {
  const didMountRef = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    if (didMountRef.current)
      fn();
    else
      didMountRef.current = true;
  }, inputs);
}

// src/hooks/use-key.tsx
var import_react3 = require("react");
var defaultOptions = {
  when: true,
  eventTypes: ["keydown"]
};
function useKey(input, callback, opts) {
  const keyList = (0, import_react3.useMemo)(() => Array.isArray(input) ? input : [input], [input]);
  const options = Object.assign({}, defaultOptions, opts);
  const { when, eventTypes } = options;
  const callbackRef = (0, import_react3.useRef)(callback);
  const { target } = options;
  (0, import_react3.useEffect)(() => {
    callbackRef.current = callback;
  });
  const handle = (0, import_react3.useCallback)((e) => {
    if (keyList.some((k) => e.key === k || e.code === k)) {
      callbackRef.current(e);
    }
  }, [keyList]);
  (0, import_react3.useEffect)(() => {
    if (when && typeof window !== "undefined") {
      const targetNode = target ? target["current"] : window;
      eventTypes.forEach((eventType) => {
        targetNode && targetNode.addEventListener(eventType, handle);
      });
      return () => {
        eventTypes.forEach((eventType) => {
          targetNode && targetNode.removeEventListener(eventType, handle);
        });
      };
    }
  }, [when, eventTypes, keyList, target, callback]);
}

// src/lib/constants.tsx
var KEY = {
  ARROW_DOWN: "ArrowDown",
  ARROW_UP: "ArrowUp",
  ENTER: "Enter",
  ESCAPE: "Escape",
  SPACE: "Space"
};

// src/select-panel/index.tsx
var import_react8 = __toESM(require("react"));

// src/lib/debounce.tsx
var debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(null, args);
    }, wait);
  };
};

// src/lib/simple-match-utils.tsx
function filterOptions(options, filter) {
  if (!filter) {
    return options;
  }
  return options.filter(({ label, value }) => label != null && value != null && label.toLowerCase().includes(filter.toLowerCase()));
}

// src/select-panel/cross.tsx
var import_react4 = __toESM(require("react"));
var Cross = () => /* @__PURE__ */ import_react4.default.createElement("svg", {
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  className: "dropdown-search-clear-icon gray"
}, /* @__PURE__ */ import_react4.default.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ import_react4.default.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));

// src/select-panel/select-item.tsx
var import_react6 = __toESM(require("react"));

// src/select-panel/default-item.tsx
var import_react5 = __toESM(require("react"));
var DefaultItemRenderer = ({
  checked,
  option,
  onClick,
  disabled
}) => /* @__PURE__ */ import_react5.default.createElement("div", {
  className: `item-renderer ${disabled && "disabled"}`
}, /* @__PURE__ */ import_react5.default.createElement("input", {
  type: "checkbox",
  onChange: onClick,
  checked,
  tabIndex: -1,
  disabled
}), /* @__PURE__ */ import_react5.default.createElement("span", null, option.label));
var default_item_default = DefaultItemRenderer;

// src/select-panel/select-item.tsx
var SelectItem = ({
  itemRenderer: ItemRenderer = default_item_default,
  option,
  checked,
  tabIndex,
  disabled,
  onSelectionChanged,
  onClick
}) => {
  const itemRef = (0, import_react6.useRef)();
  const onOptionCheck = (e) => {
    toggleChecked();
    e.preventDefault();
  };
  const toggleChecked = () => {
    if (!disabled) {
      onSelectionChanged(!checked);
    }
  };
  const handleClick = (e) => {
    toggleChecked();
    onClick(e);
  };
  useKey([KEY.ENTER, KEY.SPACE], onOptionCheck, { target: itemRef });
  return /* @__PURE__ */ import_react6.default.createElement("label", {
    className: `select-item ${checked && "selected"}`,
    role: "option",
    "aria-selected": checked,
    tabIndex,
    ref: itemRef
  }, /* @__PURE__ */ import_react6.default.createElement(ItemRenderer, {
    option,
    checked,
    onClick: handleClick,
    disabled
  }));
};
var select_item_default = SelectItem;

// src/select-panel/select-list.tsx
var import_react7 = __toESM(require("react"));
var SelectList = ({ options, onClick, skipIndex }) => {
  const { disabled, value, onChange, ItemRenderer } = useMultiSelect();
  const handleSelectionChanged = (option, checked) => {
    if (disabled)
      return;
    onChange(checked ? [...value, option] : value.filter((o) => o.value !== option.value));
  };
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, options.map((o, i) => {
    const tabIndex = i + skipIndex;
    return /* @__PURE__ */ import_react7.default.createElement("li", {
      key: (o == null ? void 0 : o.key) || i
    }, /* @__PURE__ */ import_react7.default.createElement(select_item_default, {
      tabIndex,
      option: o,
      onSelectionChanged: (c) => handleSelectionChanged(o, c),
      checked: !!value.find((s) => s.value === o.value),
      onClick: (e) => onClick(e, tabIndex),
      itemRenderer: ItemRenderer,
      disabled: o.disabled || disabled
    }));
  }));
};
var select_list_default = SelectList;

// src/select-panel/index.tsx
var SelectPanel = () => {
  const {
    t,
    onChange,
    options,
    setOptions,
    value,
    filterOptions: customFilterOptions,
    ItemRenderer,
    disabled,
    disableSearch,
    hasSelectAll,
    ClearIcon,
    debounceDuration,
    isCreatable,
    onCreateOption,
    isSelectAll
  } = useMultiSelect();
  const listRef = (0, import_react8.useRef)();
  const searchInputRef = (0, import_react8.useRef)();
  const [searchText, setSearchText] = (0, import_react8.useState)("");
  const [filteredOptions, setFilteredOptions] = (0, import_react8.useState)(options);
  const [searchTextForFilter, setSearchTextForFilter] = (0, import_react8.useState)("");
  const [focusIndex, setFocusIndex] = (0, import_react8.useState)(0);
  const debouncedSearch = (0, import_react8.useCallback)(debounce((query) => setSearchTextForFilter(query), debounceDuration), []);
  const skipIndex = (0, import_react8.useMemo)(() => {
    let start = 0;
    if (!disableSearch)
      start += 1;
    if (hasSelectAll)
      start += 1;
    return start;
  }, [disableSearch, hasSelectAll]);
  const selectAllOption = {
    label: searchText ? t("selectAllFiltered") : t("selectAll"),
    value: ""
  };
  const selectAllValues = (checked) => {
    const filteredValues = filteredOptions.filter((o) => !o.disabled).map((o) => o.value);
    if (checked) {
      const selectedValues = value.map((o) => o.value);
      const finalSelectedValues = [...selectedValues, ...filteredValues];
      return (customFilterOptions ? filteredOptions : options).filter((o) => finalSelectedValues.includes(o.value));
    }
    return value.filter((o) => !filteredValues.includes(o.value));
  };
  const selectAllChanged = (checked) => {
    const newOptions = selectAllValues(checked);
    onChange(newOptions);
  };
  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
    setSearchText(e.target.value);
    setFocusIndex(0 /* SEARCH */);
  };
  const handleClear = () => {
    var _a;
    setSearchTextForFilter("");
    setSearchText("");
    (_a = searchInputRef == null ? void 0 : searchInputRef.current) == null ? void 0 : _a.focus();
  };
  const handleItemClicked = (index) => setFocusIndex(index);
  const handleKeyDown = (e) => {
    switch (e.code) {
      case KEY.ARROW_UP:
        updateFocus(-1);
        break;
      case KEY.ARROW_DOWN:
        updateFocus(1);
        break;
      default:
        return;
    }
    e.stopPropagation();
    e.preventDefault();
  };
  useKey([KEY.ARROW_DOWN, KEY.ARROW_UP], handleKeyDown, {
    target: listRef
  });
  const handleSearchFocus = () => {
    setFocusIndex(0 /* SEARCH */);
  };
  const handleOnCreateOption = async () => {
    let newOption = { label: searchText, value: searchText, __isNew__: true };
    if (onCreateOption) {
      newOption = await onCreateOption(searchText);
    }
    setOptions([newOption, ...options]);
    handleClear();
    onChange([...value, newOption]);
  };
  const getFilteredOptions = async () => customFilterOptions ? await customFilterOptions(options, searchTextForFilter) : filterOptions(options, searchTextForFilter);
  const updateFocus = (offset) => {
    let newFocus = focusIndex + offset;
    newFocus = Math.max(0, newFocus);
    newFocus = Math.min(newFocus, options.length + Math.max(skipIndex - 1, 0));
    setFocusIndex(newFocus);
  };
  (0, import_react8.useEffect)(() => {
    selectAllChanged(isSelectAll);
  }, []);
  (0, import_react8.useEffect)(() => {
    var _a, _b;
    (_b = (_a = listRef == null ? void 0 : listRef.current) == null ? void 0 : _a.querySelector(`[tabIndex='${focusIndex}']`)) == null ? void 0 : _b.focus();
  }, [focusIndex]);
  const [isAllOptionSelected, hasSelectableOptions] = (0, import_react8.useMemo)(() => {
    const filteredOptionsList = filteredOptions.filter((o) => !o.disabled);
    return [
      filteredOptionsList.every((o) => value.findIndex((v) => v.value === o.value) !== -1),
      filteredOptionsList.length !== 0
    ];
  }, [filteredOptions, value]);
  (0, import_react8.useEffect)(() => {
    getFilteredOptions().then(setFilteredOptions);
  }, [searchTextForFilter, options]);
  const creationRef = (0, import_react8.useRef)();
  useKey([KEY.ENTER], handleOnCreateOption, { target: creationRef });
  const showCratable = isCreatable && searchText && !filteredOptions.some((e) => (e == null ? void 0 : e.value) === searchText);
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "select-panel",
    role: "listbox",
    ref: listRef
  }, !disableSearch && /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "search"
  }, /* @__PURE__ */ import_react8.default.createElement("input", {
    placeholder: t("search"),
    type: "text",
    "aria-describedby": t("search"),
    onChange: handleSearchChange,
    onFocus: handleSearchFocus,
    value: searchText,
    ref: searchInputRef,
    tabIndex: 0
  }), /* @__PURE__ */ import_react8.default.createElement("button", {
    type: "button",
    className: "search-clear-button",
    hidden: !searchText,
    onClick: handleClear,
    "aria-label": t("clearSearch")
  }, ClearIcon || /* @__PURE__ */ import_react8.default.createElement(Cross, null))), /* @__PURE__ */ import_react8.default.createElement("ul", {
    className: "options"
  }, hasSelectAll && hasSelectableOptions && /* @__PURE__ */ import_react8.default.createElement(select_item_default, {
    tabIndex: skipIndex === 1 ? 0 : 1,
    checked: isAllOptionSelected,
    option: selectAllOption,
    onSelectionChanged: selectAllChanged,
    onClick: () => handleItemClicked(1),
    itemRenderer: ItemRenderer,
    disabled
  }), filteredOptions.length ? /* @__PURE__ */ import_react8.default.createElement(select_list_default, {
    skipIndex,
    options: filteredOptions,
    onClick: (_e, index) => handleItemClicked(index)
  }) : showCratable ? /* @__PURE__ */ import_react8.default.createElement("li", {
    onClick: handleOnCreateOption,
    className: "select-item creatable",
    tabIndex: skipIndex === 1 ? 0 : 1,
    ref: creationRef
  }, `${t("create")} "${searchText}"`) : /* @__PURE__ */ import_react8.default.createElement("li", {
    className: "no-options"
  }, t("noOptions"))));
};
var select_panel_default = SelectPanel;

// src/multi-select/arrow.tsx
var import_react9 = __toESM(require("react"));
var Arrow = ({ expanded }) => /* @__PURE__ */ import_react9.default.createElement("svg", {
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  className: "dropdown-heading-dropdown-arrow gray"
}, /* @__PURE__ */ import_react9.default.createElement("path", {
  d: expanded ? "M18 15 12 9 6 15" : "M6 9L12 15 18 9"
}));

// src/multi-select/header.tsx
var import_react10 = __toESM(require("react"));
var DropdownHeader = () => {
  const { t, value, options, valueRenderer } = useMultiSelect();
  const noneSelected = value.length === 0;
  const allSelected = value.length === options.length;
  const customText = valueRenderer && valueRenderer(value, options);
  const getSelectedText = () => value.map((s) => s.label).join(", ");
  return noneSelected ? /* @__PURE__ */ import_react10.default.createElement("span", {
    className: "gray"
  }, customText || t("selectSomeItems")) : /* @__PURE__ */ import_react10.default.createElement("span", null, customText || (allSelected ? t("allItemsAreSelected") : getSelectedText()));
};

// src/multi-select/loading.tsx
var import_react11 = __toESM(require("react"));
var Loading = ({ size = 24 }) => /* @__PURE__ */ import_react11.default.createElement("span", {
  style: {
    width: size,
    marginRight: "0.2rem"
  }
}, /* @__PURE__ */ import_react11.default.createElement("svg", {
  width: size,
  height: size,
  className: "spinner",
  viewBox: "0 0 50 50",
  style: { display: "inline", verticalAlign: "middle" }
}, /* @__PURE__ */ import_react11.default.createElement("circle", {
  cx: "25",
  cy: "25",
  r: "20",
  fill: "none",
  className: "path"
})));

// src/multi-select/dropdown.tsx
var Dropdown = () => {
  const {
    t,
    onMenuToggle,
    ArrowRenderer,
    shouldToggleOnHover,
    isLoading,
    disabled,
    onChange,
    labelledBy,
    value,
    isOpen,
    defaultIsOpen,
    ClearSelectedIcon,
    closeOnChangedValue
  } = useMultiSelect();
  (0, import_react12.useEffect)(() => {
    if (closeOnChangedValue) {
      setExpanded(false);
    }
  }, [value]);
  const [isInternalExpand, setIsInternalExpand] = (0, import_react12.useState)(true);
  const [expanded, setExpanded] = (0, import_react12.useState)(defaultIsOpen);
  const [hasFocus, setHasFocus] = (0, import_react12.useState)(false);
  const FinalArrow = ArrowRenderer || Arrow;
  const wrapper = (0, import_react12.useRef)();
  useDidUpdateEffect(() => {
    onMenuToggle && onMenuToggle(expanded);
  }, [expanded]);
  (0, import_react12.useEffect)(() => {
    if (defaultIsOpen === void 0 && typeof isOpen === "boolean") {
      setIsInternalExpand(false);
      setExpanded(isOpen);
    }
  }, [isOpen]);
  const handleKeyDown = (e) => {
    var _a;
    if (["text", "button"].includes(e.target.type) && [KEY.SPACE, KEY.ENTER].includes(e.code)) {
      return;
    }
    if (isInternalExpand) {
      if (e.code === KEY.ESCAPE) {
        setExpanded(false);
        (_a = wrapper == null ? void 0 : wrapper.current) == null ? void 0 : _a.focus();
      } else {
        setExpanded(true);
      }
    }
    e.preventDefault();
  };
  useKey([KEY.ENTER, KEY.ARROW_DOWN, KEY.SPACE, KEY.ESCAPE], handleKeyDown, {
    target: wrapper
  });
  const handleHover = (iexpanded) => {
  };
  const handleFocus = () => !hasFocus && setHasFocus(true);
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget) && isInternalExpand) {
      setHasFocus(false);
    }
  };
  const handleMouseEnter = () => handleHover(true);
  const handleMouseLeave = () => handleHover(false);
  const toggleExpanded = () => {
    isInternalExpand && setExpanded(isLoading || disabled ? false : !expanded);
  };
  const handleClearSelected = (e) => {
    e.stopPropagation();
    onChange([]);
  };
  return /* @__PURE__ */ import_react12.default.createElement("div", {
    tabIndex: 0,
    className: "dropdown-container",
    "aria-labelledby": labelledBy,
    "aria-expanded": expanded,
    "aria-readonly": true,
    "aria-disabled": disabled,
    ref: wrapper,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "dropdown-heading"
  }, /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "dropdown-heading-value"
  }, /* @__PURE__ */ import_react12.default.createElement(DropdownHeader, null)), isLoading && /* @__PURE__ */ import_react12.default.createElement(Loading, null), value.length > 0 && ClearSelectedIcon !== null && /* @__PURE__ */ import_react12.default.createElement("button", {
    type: "button",
    className: "clear-selected-button",
    onClick: handleClearSelected,
    disabled,
    "aria-label": t("clearSelected")
  }, ClearSelectedIcon || /* @__PURE__ */ import_react12.default.createElement(Cross, null))), expanded && /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "dropdown-content"
  }, /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "panel-content"
  }, /* @__PURE__ */ import_react12.default.createElement(select_panel_default, null))));
};
var dropdown_default = Dropdown;

// src/multi-select/index.tsx
var MultiSelect = (props) => /* @__PURE__ */ import_react13.default.createElement(MultiSelectProvider, {
  props
}, /* @__PURE__ */ import_react13.default.createElement("div", {
  className: `rmsc ${props.className || "multi-select"}`
}, /* @__PURE__ */ import_react13.default.createElement(dropdown_default, null)));
var multi_select_default = MultiSelect;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Dropdown,
  MultiSelect,
  SelectItem,
  SelectPanel
});
