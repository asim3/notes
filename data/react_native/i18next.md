[react-i18next docs](https://react.i18next.com/guides/quick-start)

`npm install i18next react-i18next`


## Root Layout
`./src/app/_layout.tsx`
```ts
import '@/services/i18n'; // <<<<<<<<<<


export default function RootLayout() {
  return (
    // ...
  );
};
```


## i18next
`./src/services/i18n/index.tsx`
```ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar_lang from "./arabic.json"
import en_lang from "./english.json"


const resources = {
    ar: { translation: ar_lang },
    en: { translation: en_lang },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        compatibilityJSON: 'v3',
        fallbackLng: 'en',
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
```


## Screen
`./src/app/(tabs)/languages_screen.tsx`
```ts
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from "react-i18next";


export default function Component() {
    const { t } = useTranslation();

    return (
        <View>
            <Text>{t('my_welcome_message')}</Text>
            <Button title='Arabic' onPress={() => change_language('ar')} />
            <Button title='English' onPress={() => change_language('en')} />
        </View>
    );
};
```


## arabic.json
`./src/services/i18n/arabic.json`
```json
{
    "my_welcome_message": "مرحبًا بكم في رياكت"
}
```


## HTML direction
`./src/app/+html.tsx`
```ts
import i18next from "i18next";


export default function Root() {
  return (
    <html lang={i18next.language} dir={i18next.dir(i18next.language)}>
        // ...
      <body lang={i18next.language} dir={i18next.dir(i18next.language)}>
        // ...
  );
}
```


## change language
`./src/utils/helpers.tsx`
```ts
import i18next from "i18next";
import { Platform } from 'react-native';


export function set_page_title(title: string): void {
    if (Platform.OS === 'web') {
        document.title = title;
    }
}


export function change_language(lang: string): void {
    i18next.changeLanguage(lang);
    if (Platform.OS === 'web') {
        document.lang = lang;
        document.body.lang = lang;
        document.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        set_page_title(i18next.t("my_welcome_message"));
    }
};
```
