import { ElementType } from "react";
import { PanelProps } from "../types";

function Panel(props: PanelProps) {
  const { id, children, as, className } = props;

  const groupClassNames = ["group", "panel", className]
    .filter(Boolean)
    .join(" ");

  const Tag = as || ("div" as ElementType);

  return (
    <Tag className={groupClassNames} id={id}>
      {children}
    </Tag>
  );
}

export default Panel;
