interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  divider?: boolean;
}
export default function List(props: Props): JSX.Element {
  const classes: string[] = ["w-full"];
  if (props.divider) {
    classes.push("divide-y divide-gray-200 dark:divide-gray-800");
  }
  if (props.className) {
    classes.push(props.className);
  }
  return (
    <ul className={classes.join(" ")} style={props.style}>
      {props.children}
    </ul>
  );
}
