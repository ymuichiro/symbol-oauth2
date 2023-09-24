interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export default function ListItem(props: Props): JSX.Element {
  return (
    <li className={"px-3 py-3 sm:py-4 sm:px-4 " + props.className} style={props.style}>
      {props.children}
    </li>
  );
}
