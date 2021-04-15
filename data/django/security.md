[docs](https://docs.djangoproject.com/en/3.1/topics/security)

## HTTPS
```py
SECURE_SSL_REDIRECT = True

SECURE_REDIRECT_EXEMPT = []

# if Django app is behind a proxy
# SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
```


## COOKIE
```py
SESSION_COOKIE_SECURE = True

CSRF_COOKIE_SECURE = True
```


## HSTS
> Each time a Web browser sees the HSTS header from your site,
> it will refuse to communicate non-securely (using HTTP) with
> your domain for the given period of time.
```py
# for testing
SECURE_HSTS_SECONDS = 3600 

# in production
SECURE_HSTS_SECONDS = 31536000
# 31536000 seconds, i.e. 1 year


SECURE_HSTS_INCLUDE_SUBDOMAINS = True

SECURE_HSTS_PRELOAD = True
```


## other
```py
SECURE_CONTENT_TYPE_NOSNIFF = True

# for older browsers
SECURE_BROWSER_XSS_FILTER = True

SECURE_REFERRER_POLICY = 'same-origin'

# SECURE_SSL_HOST = "www.example.com"
```