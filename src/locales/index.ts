import {
    createLocalizedPathnamesNavigation,
    Pathnames
} from 'next-intl/navigation';

export const LocaleConfig = {
    locales: ["ru", "pl"],
    defaultLocale: "ru",
}

export async function getMessages(locale: typeof LocaleConfig.locales[number]) {
    return {
        header: (await import(`../components/Header/locales/${locale}.json`)).default
    }
}

export const pathnames = {
    "/": "/",
    "/service/[...slug]": "/service/[...slug]"
} satisfies Pathnames<typeof LocaleConfig.locales>;

export const {Link, redirect, usePathname, useRouter} = createLocalizedPathnamesNavigation({locales: LocaleConfig.locales, pathnames});