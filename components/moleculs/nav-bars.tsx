"use client";
import Link from "@/components/atom/link";
import { config } from "@/service/config";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

interface Props {}

export default function NavBars(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* nav-bar */}
      <div className="fixed z-50 w-full backdrop-blur-sm bg-white/30 dark:bg-black/30 border-b border-gray-500">
        <div className="flex items-center flex-row px-4">
          <div className="flex flex-grow items-center gap-4">
            <a className="font-semibold" href="/">
              {config.public.siteName}
            </a>
            <div style={{ height: 64 }} className="flex items-center invisible sm:visible space-x-4">
              <Link href={"/"}>test</Link>
            </div>
          </div>
          <button onClick={toggle} className="sm:hidden">
            {isOpen ? <MdClose size="1.5rem" /> : <MdMenu size="1.5rem" />}
          </button>
        </div>
      </div>
      {/* drawer */}
      <div
        className={`fixed top-0 left-0 z-40 p-4 h-screen transition-transform w-full sm:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        tabIndex={-1}
        aria-labelledby="navigation drawer"
      >
        <div style={{ height: "64px" }} />
        <div>tet</div>
        <div>tet</div>
        <div>tet</div>
        <div>tet</div>
        <div>tet</div>
        <div>tet</div>
      </div>
    </>
  );
}
