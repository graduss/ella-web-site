import Image from "next/image";

import style from "./style.module.scss";

const Logo = () => (
  <div className={style.logo}>
    <Image
      src="/images/logo/logo.png"
      alt="logo"
      width={180}
      height={180}
      className={style.image}
    />
    <div className={style.logoName}>
      <strong>ConstMax</strong>
      <label>Constant Maximum</label>
    </div>
  </div>
);

export default Logo;