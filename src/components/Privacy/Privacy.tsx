import { getPrivacyHTML } from "@/servicies/getPrivacyHTML";
import style from './privacy.module.css';

export default async function Privacy() {
  const html = await getPrivacyHTML();
  return(
    <section className={style.main}>
      <article dangerouslySetInnerHTML={{__html: html}} />
    </section>
  );
}