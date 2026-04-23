export type TLocaleOption = {
    value: string;
    label: string;
};

export const LocaleOptions: TLocaleOption[] = [
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Русский' },
    { value: 'pl', label: 'Polski' },
];

export const LocaleConfig = {
    locales: ["ru", "en", "pl"],
    defaultLocale: "en",
}