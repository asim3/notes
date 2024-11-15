## Basic Fetch
`./src/app/(tabs)/fetch_data.tsx`
```ts
import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';


export default function Screen() {
  const [my_data, set_my_data] = useState([]);

  useEffect(() => {
    const get_data = async () => {
        const response = await fetch('https://dummyjson.com/posts');
        const my_posts = await response.json();
        set_my_data(my_posts);
    };
    get_data();
  }, [my_data]);

  return (
    <View>
        {my_data["posts"].map((my_post) => {
            return <Text>{my_post.title}</Text>
        })}
    </View>
  );
};
```
