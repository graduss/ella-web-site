import {
    createLocalizedPathnamesNavigation,
    Pathnames
} from 'next-intl/navigation';
import {ComponentProps} from 'react';

export type TLocaleOption = {
    value: string;
    label: string;
};

export const LocaleOptions: TLocaleOption[] = [
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Russian' },
    { value: 'pl', label: 'Polska' },
];

export const LocaleConfig = {
    locales: ["ru", "en", "pl"],
    defaultLocale: "en",
}

export async function getMessages(locale: typeof LocaleConfig.locales[number]) {
    return Object.assign(
        {},
        (await import(`../messages/${locale}.json`)).default,
        {
            header: (await import(`../components/Header/locales/${locale}.json`)).default
        }
    );
}

export const pathnames = {
    "/": "/",
    "/#about": '/#about',
    "/#product_search": "/#product_search",
    "/#marketing_analytics": "/#marketing_analytics",
    "/#logistics": "/#logistics",
    "/#registration_certification": "/#registration_certification",
    "/#documentation": "/#documentation",
    "/#contacts": "/#contacts",
    "/privacy": "/privacy",
    
} satisfies Pathnames<typeof LocaleConfig.locales>;

export const {Link, redirect, usePathname, useRouter} = createLocalizedPathnamesNavigation({
    locales: LocaleConfig.locales,
    pathnames: pathnames as typeof pathnames & Record<string & {}, string>
});
export type TLinkHref = ComponentProps<typeof Link>["href"];