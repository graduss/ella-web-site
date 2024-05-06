export const LocaleConfig = {
    locales: ["ru", "pl"],
    defaultLocale: "ru",
}

export async function getMessages(locale: typeof LocaleConfig.locales[number]) {
    return {
        header: (await import(`../components/Header/locales/${locale}.json`)).default
    }
}