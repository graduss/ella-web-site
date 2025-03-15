import Image from 'next/image';
import { useTranslations } from "next-intl";
import list, {TOurPartner} from './clientList';

import style from './style.module.scss';

function PartnerItem({ logo, title }: TOurPartner) {
  return (
    <article className={style.item}>
      <Image className={style.image} src={logo} alt={title} width={150} height={150} />
    </article>
  );
}

export default function OurPartners() {
  return (
    <section className={style.partners}>
      <div className={style.slider}>
        {list.map((item) => <PartnerItem key={item.title} {...item} />)}
      </div>
    </section>
  );
}