import { TServiseItem } from "@/servicies";
import { Link } from "@/locales";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import style from "./style.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceItem:FC<TServiseItem> = ({ title, path, icon }) => {
    const t = useTranslations('header');

    return (
        <Link
            className={style.curd}
            href={ path }
        >
            <div>
                <FontAwesomeIcon className={style.icon} icon={icon as IconProp} />
            </div>
            <label className="text-center mt-4 uppercase text-lg">
                {t(title)}
            </label>
        </Link>
    );
};

export default ServiceItem;