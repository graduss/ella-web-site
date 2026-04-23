import { FC } from "react";

import style from "./style.module.css";

const MapSection:FC<{address:string}> = ({address}) => (
  <div className={style.mapArea}>
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&q=${address.replace(/\s/g, '+')}`}
      loading="lazy"
    ></iframe>
  </div>
);

export default MapSection;