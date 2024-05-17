import { FC } from "react";
import { serviceLirt } from "@/servicies"
import ServiceItem from "./ServiceItem";

import style from "./style.module.scss"

const ServiceList:FC = () => (
    <div className={style.serviceList}>
        {serviceLirt.map(item => ( <ServiceItem key={item.id} {...item} /> ))}
    </div>
);

export default ServiceList;