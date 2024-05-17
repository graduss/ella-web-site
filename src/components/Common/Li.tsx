import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

type TProps = {
  children: React.ReactNode,
  icon?: IconProp,
  className?: string,
};

const Li:FC<TProps> = ({children, icon, className}) => (
  <li className={className}><FontAwesomeIcon icon={ icon } /> {children}</li>
);

Li.defaultProps = {
  icon: "fa-solid fa-circle-check" as IconProp
}

export default Li;