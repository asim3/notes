[Reference](https://docs.expo.dev/versions/latest/)

## install
```bash
docker run -it node:20.16-bullseye-slim /bin/bash


npx create-expo-app@3.0 app --template blank

cd ./app

npx expo install react-dom react-native-web @expo/metro-runtime

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

npm run web -- -p 3000
```
