import { TServiseItem } from "@/servicies";
import { Link } from "@/locales";
import { FC } from "react";

import style from "./style.module.scss"

const ServiceItem:FC<TServiseItem> = ({ title, imageSrc, path }) => {

    return (
        <Link className={style.curd} href={path}>
            <div>
                <img src={imageSrc} alt={title} />
            </div>
            <label className="title text-center mt-4">
                <h4>{title}</h4>
            </label>
        </Link>
    );
};

export default ServiceItem;