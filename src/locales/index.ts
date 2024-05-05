export const LocaleConfig = {
    locales: ["en", "ru", "pl"],
    defaultLocale: "en",
}

export async function getMessages(locale: typeof LocaleConfig.locales[number]) {
    return {
        header: (await import(`../components/Header/locales/${locale}.json`)).default
    }
}