import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

type TProps = {
  children: React.ReactNode,
  icon?: IconProp,
  className?: string,
};

export default function Li({
  children,
  icon = "fa-solid fa-circle-check" as IconProp,
  className
}: TProps) {
  return (
    <li className={className}><FontAwesomeIcon icon={ icon } /> {children}</li>
  );
}
