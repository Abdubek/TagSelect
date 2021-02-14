import TagSelect from "./TagSelect";
import { createCtx } from "../../utils";
import React from "react";
import TagSelectItem from "./TagSelectItem";

export const [TagSelectContext, TagSelectProvider] = createCtx<Array<any>>([])

export type Props = {
  children: React.ReactNode
  onChange?: (val: Array<any>) => void
}

const TagSelectWrapper = (props: Props) => {
  return (
    <TagSelectProvider>
      <TagSelect {...props} />
    </TagSelectProvider>
  )
}

TagSelectWrapper.Item = TagSelectItem

export default TagSelectWrapper
