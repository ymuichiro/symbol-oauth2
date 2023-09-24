interface Props {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "outlined" | "contained";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}
export default function Button(props: Props): JSX.Element {
  const classes: string[] = ["rounded-md"];

  // set size
  if (props.size === "small") {
    classes.push("px-2 py-1 text-sm");
  } else if (props.size === "medium") {
    classes.push("px-4 py-2 text-base");
  } else if (props.size === "large") {
    classes.push("px-6 py-3 text-lg");
  }

  // set variant
  if (props.variant === "outlined") {
    classes.push("border-2 border-black text-black dark:border-white dark:text-white");
  } else {
    classes.push("bg-black text-white dark:bg-white dark:text-black");
  }

  if (props.disabled) {
    classes.push("opacity-50 cursor-not-allowed");
  }

  if (props.className) {
    classes.push(props.className);
  }

  return (
    <button disabled={props.disabled} className={classes.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
