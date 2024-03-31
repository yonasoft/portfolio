import React from "react";
import NavLink from "./NavLink";

type Props = {
  links: Array<{ href: String | URL; title: String }>;
};

const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href as URL} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
