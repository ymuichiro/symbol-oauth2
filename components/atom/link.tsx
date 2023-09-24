import { Route } from "next";
import NextLink from "next/link";

interface Props {
  href: Route;
  target?: "_blank";
  children: React.ReactNode;
}

export default function Link(props: Props): JSX.Element {
  return (
    <NextLink
      href={props.href}
      target={props.target}
      rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
      className="duration-100 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
    >
      {props.children}
    </NextLink>
  );
}
