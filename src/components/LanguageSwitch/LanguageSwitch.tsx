'use client';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { LocaleOptions, TLocaleOption, usePathname, useRouter } from '@/locales';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import cm from 'classnames';

import style from './language-sw.module.css';

function getOptionByLocale (locale: string) {
  return LocaleOptions.find((item) => item.value === locale);
};


export default function LanguageSwitch () {
  const nawRef = useRef<HTMLElement>(null);
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<TLocaleOption>(
    getOptionByLocale(params.locale as string) as TLocaleOption,
  );
  const [menuShow, setMenuShow] = useState<boolean>(false);
  const triggerShowMenu = () => {
    setMenuShow((state) => !state);
  };
  const handleChange = (locale: string) => {
    const selectedOption = getOptionByLocale(locale);
    if (selectedOption) {
      setSelectedOption(selectedOption);
      triggerShowMenu();
      // @ts-expect-error: Unreachable code error
      router.replace({ pathname, params }, { locale: selectedOption.value });
    }
  };

  const handleClicDockument = (e: MouseEvent) => {
    if (nawRef.current && !nawRef.current.contains(e.target as Node))
      setMenuShow(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClicDockument);
    return () => document.removeEventListener('click', handleClicDockument);
  }, []);

  return (
    <nav ref={nawRef} className={cm(style.languageSw, 'group')}>
      <div className={style.current} onClick={triggerShowMenu}>
        <FontAwesomeIcon icon={faGlobe} />
        <label className='grow'>{selectedOption.value}</label>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <ul className={cm(
        style.menu,
        'lg:group-hover:visible group-hover:opacity-100 lg:group-hover:top-full',
        { [style.show]: menuShow }
      )}>
        {LocaleOptions.map((item) => (
          <li
            className={cm({
              [style.selected]: item.value === selectedOption.value,
            })}
            key={item.value}
            onClick={() => handleChange(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}