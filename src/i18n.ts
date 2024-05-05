import { getRequestConfig } from "next-intl/server";
import { getMessages } from "./locales";

export default getRequestConfig(async ({ locale }) => {
    return {
        messages: await getMessages(locale)
    }
});