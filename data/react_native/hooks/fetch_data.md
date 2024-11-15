## Basic Fetch
`./src/app/(tabs)/fetch_data.tsx`
```ts
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';


export default function Screen() {
    const [error, set_error] = useState();
    const [is_loading, set_is_loading] = useState(true);
    const [my_data, set_my_data] = useState([]);

    useEffect(() => {
        set_is_loading(true);
        try {
            fetch('https://dummyjson.com/posts')
                .then(res => res.json())
                .then(data => {
                    set_my_data(data);
                    set_is_loading(false);
                    // set_error(true);
                });
        }
        catch (e: any) {
            set_error(e);
            set_is_loading(false);
        }
    }, []);


    if (error) {
        return <Text style={{ color: 'red', fontSize: 33 }}>ERROR!!!</Text>;
    }

    if (is_loading) {
        return <Text style={{ color: 'green', fontSize: 33 }}>loading...</Text>;
    }

    return (
        <View>
            {my_data['posts'].map((my_post, index: number) => {
                return <Text key={index}>{my_post.title}</Text>
            })}
        </View>
    );
};
```
