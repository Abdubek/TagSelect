import React, { useContext, useEffect, useRef, useState } from "react";
import "./styles.css";
import Icon from "../../assets/icons/repository.svg";
import ArrowIcon from "../../assets/icons/arrow.svg";
import { Props, TagSelectContext } from "./index";
import useOnClickOutside from "use-onclickoutside";
import { disableNextClick } from "../../utils";

export type Tag = {
  id: number;
  name: string;
  version?: string;
};

const TagSelect = ({ children, onChange, placeholder }: Props) => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const context = useContext<any>(TagSelectContext);

  useOnClickOutside(ref, (e) => {
    setOpen(false);
    disableNextClick();
  });

  useEffect(() => {
    if (onChange) onChange(context.state);
  }, [context.state]);

  return (
    <div className="tag-select">
      <div
        className="tag-select__value"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!isOpen);
        }}
      >
        <div className="tag-select__icon">
          <img src={Icon} alt="repository" />
        </div>
        <div className="tag-select__tags">
          {context.state.length ? (
            context.state.map((tag: any) => (
              <div key={tag.id} className="tag-select__tags-item">
                {tag.name}
              </div>
            ))
          ) : (
            <span className="tag-select__placeholder">{placeholder}</span>
          )}
        </div>
        <div className="tag-select__arrow">
          <img src={ArrowIcon} alt="arrow" width={24} height={24} />
        </div>
      </div>
      {isOpen && (
        <div ref={ref} className="tag-select__dropdown">
          <ul className="tag-select__dropdown-list">{children}</ul>
        </div>
      )}
    </div>
  );
};

export default TagSelect;
