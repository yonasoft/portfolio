import Link from "next/link";
import React from "react";

type Props = {
  href: String | URL;
  title: String;
};

const NavLink = ({ href, title }: Props) => {
  return (
    <Link
      href={href as URL}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
