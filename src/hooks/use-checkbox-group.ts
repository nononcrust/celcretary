import { useState } from "react";

type CheckboxGroupState = string[];

export const useCheckboxGroup = (initialState?: CheckboxGroupState) => {
  const [checkedItems, setCheckedItems] = useState<CheckboxGroupState>(
    (initialState = []),
  );

  const checked = (name: string) => checkedItems.includes(name);

  const onChange = (name: string) => {
    if (checkedItems.includes(name)) {
      setCheckedItems(checkedItems.filter((item) => item !== name));
    } else {
      setCheckedItems([...checkedItems, name]);
    }
  };

  const uncheckAll = () => setCheckedItems([]);

  return {
    checked,
    checkedItems,
    onChange,
    uncheckAll,
  };
};
