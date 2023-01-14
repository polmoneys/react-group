import { ListItemProps, ListProps } from "../types";

function List(props: ListProps) {
  const { children, className, label, zebra = true, ...rest } = props;

  const classNames = [className, "group", "list", zebra && "zebra"]
    .filter(Boolean)
    .join(" ");
  return (
    <ul role="list" className={classNames} aria-label={label} {...rest}>
      {children}
    </ul>
  );
}

List.Item = (props: ListItemProps) => {
  const { className, children, description, start, end } = props;

  return (
    <li {...(className !== undefined && { className })}>
      {start && <div className="start">{start}</div>}
      <div>
        {children}
        {description && <div>{description}</div>}
      </div>
      {end && <div className="end">{end}</div>}
    </li>
  );
};

List.Divider = (props: Pick<ListItemProps, "children">) => {
  return (
    <li>
      <div>
        <div className="list:divider">
          {props.children !== undefined && props.children}
        </div>
      </div>
    </li>
  );
};

export default List;
