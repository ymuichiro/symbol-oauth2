interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function ListItemButton(props: Props): JSX.Element {
  return (
    <li
      className={[
        "duration-300 px-3 py-3 sm:py-4 sm:px-4 bg-white hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-800",
        props.className,
      ].join(" ")}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </li>
  );
}
