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


function change_language(language) {
    return () => i18n.changeLanguage(language)
}


function get_current_language() {
    return i18n.language
}

function set_body_dir() {
    const body_dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.body.dir = body_dir
}

export default useTranslation;
export { change_language, get_current_language, set_body_dir };
```


## useTranslation
`nano src/App.js`
```js
import { useEffect } from 'react';
import useTranslation, { change_language, get_current_language, set_body_dir } from './i18n'


export function App() {
    const { t, i18n } = useTranslation();


    useEffect(set_body_dir);


    return (
        <div>
            <p>{t('my text')}</p>

            <p>{get_current_language()}</p>

            <button onClick={change_language("ar")} >عربي</button>
            <button onClick={change_language("en")} >English</button>
        </div>
    )
}

export default App;
```
