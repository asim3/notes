## install
```bash
npm install react-i18next i18next
```


## config
`nano src/i18n.js`
```js
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const en_locale = {
    translation: {
        "my text": "Welcome to React and react-i18next"
    }
}

const ar_locale = {
    translation: {
        "my text": "النص العربي"
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: en_locale,
            ar: ar_locale,
        },

        // if you're using a language detector, do not define the lng option
        lng: "en",

        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });


export default useTranslation;
```


## useTranslation
`nano src/App.js`
```js
import useTranslation from './i18n'


export function App() {
    const { t, i18n } = useTranslation();

    return <p>{t('my text')}</p>
}

export default App;
```
