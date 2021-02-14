import React, { useContext } from "react";
import { TagSelectContext } from ".";
import Checkbox from "../Checkbox";
import { Tag } from "./TagSelect";

type Props = {
  name: string | React.ReactNode;
  value: any;
};

const TagSelectItem = ({ name, value }: Props) => {
  const context = useContext(TagSelectContext);

  if (!context) {
    throw new Error(`TagSelectItem must be used within a TagSelect`);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, val: Tag) => {
    if (e.target.checked) {
      context.update((prevTags) => [...prevTags, val]);
    } else {
      context.update((prevTags) => {
        return prevTags.filter((tag) => tag.id !== val.id);
      });
    }
  };

  return (
    <li className="tag-select__dropdown-list-item">
      <Checkbox
        label={name}
        checked={context.state.includes(value)}
        onChange={(e) => handleChange(e, value)}
      />
    </li>
  );
};

export default TagSelectItem;
