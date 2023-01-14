import { ElementType } from "react";
import { CardProps } from "../types";

function Card(props: CardProps) {
  const { children, as = "div", ratio = "square", className, DONOTUse } = props;

  const groupClassName = ["group", "card", `card:${ratio}`, className]
    .filter(Boolean)
    .join(" ");

  const Tag = as || ("div" as ElementType);

  return (
    <Tag
      className={groupClassName}
      style={{
        ...(DONOTUse?.DONOTStyle !== undefined && DONOTUse?.DONOTStyle),
      }}
    >
      {children}
    </Tag>
  );
}

export default Card;
