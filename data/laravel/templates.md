## if

```php
@if(count($my_objects) == 0)

    <h2>No listings found</h2>

@else

    <h2>{{ $my_objects }}</h2>

@endif
```

## unless

```php
@unless(count($my_objects) == 0)

    <h2>{{ $my_objects }}</h2>

@else

    <h2>No listings found</h2>

@endunless
```

## for

```php
@foreach($my_objects as $object)

    <h2>{{ $object['title'] }}</h2>

    <pre>
        {{ $object['text'] }}
    </pre>

@endforeach
```

##

```php

```

##

```php

```

##

```php

```

##

```php

```

##

```php

```

##

```php

```
