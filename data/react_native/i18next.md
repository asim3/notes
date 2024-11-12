[react-i18next docs](https://react.i18next.com/guides/quick-start)

`npm install i18next react-i18next`


## i18next
`./src/services/i18n/index.tsx`
```ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "my_welcome_message": "Welcome to React and react-i18next"
        }
    },
    ar: {
        translation: {
            "my_welcome_message": "مرحبًا بكم في رياكت"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ar", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
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
            <Button title='Arabic' onPress={() => true} />
            <Button title='English' onPress={() => true} />
        </View>
    );
};
```


## Root Layout
`./src/app/_layout.tsx`
```ts
import React from 'react';
import { Stack } from 'expo-router';
import '@/services/i18n'; // <<<<<<<<<<

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="modal"  options={{ presentation: 'modal' }} />
    </Stack>
  );
};
```