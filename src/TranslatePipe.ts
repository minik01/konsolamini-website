import translationBundle from "./model/translator.bundle";

export let currentLanguage = 'pl';

export function translate(path: string) {
    return translationBundle.get(currentLanguage)?.get(path) || "{" + path + "}";
}
