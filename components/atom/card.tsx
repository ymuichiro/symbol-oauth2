import Image from "next/image";

interface Props {
  children?: React.ReactNode;
  className?: string;
  actionArea?: React.ReactNode;
  image?: string;
  alt?: string;
  title?: string;
  description?: string;
  href?: string;
  target?: "_blank";
}
export default function Card(props: Props): JSX.Element {
  return (
    <div
      style={{ minWidth: "200px" }}
      className="duration-200 flex flex-col overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl dark:bg-black dark:border dark:border-gray-500 dark:hover:border-gray-100 dark:hover:border-2"
    >
      <a
        href={props.href}
        className={props.href ? "cursor-pointer" : "cursor-default"}
        target={props.target}
        rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {props.image && (
          <div className="group block h-48 overflow-hidden md:h-64">
            <Image
              src={props.image}
              loading="lazy"
              alt={props.alt || "card image"}
              className="inset-0 h-full w-full object-cover object-center"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-4 sm:p-6">
          {props.title && (
            <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">{props.title}</h2>
          )}
          {props.description && <p className="mb-8 text-gray-500 dark:text-gray-300">{props.description}</p>}
          {props.actionArea && <div className="mt-auto flex items-end justify-between">{props.actionArea}</div>}
        </div>
      </a>
    </div>
  );
}
