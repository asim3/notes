# Send email
[docs](https://support.google.com/a/answer/176600?hl=en)


## Set up SMTP relay service

- Sign in to your Google Admin console.
- Sign in using an `administrator` account
- From the Admin console Home page, go to `Apps` and then `Google Workspace` and then `Gmail` and then `Routing`
- Next to SMTP relay service, click `Configure`
- connect to `smtp-relay.gmail.com` on this port: `587`


> Sending limits: A user can relay messages to up to 10,000 recipients per day


Require TLS encryption enabled: Configure your on-premise mail server 
to point to smtp-relay.gmail.com on port 587.
Require TLS encryption not enabled: Configure your on-premise server 
to point to smtp-relay.gmail.com on port 25, port 465, or port 587. 
Without TLS encryption, you can't use SMTP authentication and must 
use IP address authentication.

- Port 465 (SSL required)
- Port 587 (TLS required)


## Set up Gmail SMTP server

- connect to `smtp.gmail.com` on this port: `587`
- authentication, enter your complete Gmail address and password

> Sending limits: 2,000 messages per day


## App Passwords

- Go to your `Google Account`.
- Select [Security](https://myaccount.google.com/security?hl=ar)
- Under `Signing in to Google` select `App Passwords`. 

> If you don’t have this option `App Passwords`, it might be because:
>    - 2-Step Verification is not set up for your account.
>    - 2-Step Verification is only set up for security keys.
>    - You turned on Advanced Protection.



## test email
```py
from django.core import mail

connection = mail.get_connection()
connection.open()
# Traceback (most recent call last):
#   File "<console>", line 1, in <module>
#   File "/app/.heroku/python/lib/python3.9/site-packages/django/core/mail/backends/smtp.py", line 69, in open
#     self.connection.login(self.username, self.password)
#   File "/app/.heroku/python/lib/python3.9/smtplib.py", line 750, in login
#     raise last_exception
#   File "/app/.heroku/python/lib/python3.9/smtplib.py", line 739, in login
#     (code, resp) = self.auth(
#   File "/app/.heroku/python/lib/python3.9/smtplib.py", line 662, in auth
#     raise SMTPAuthenticationError(code, resp)
# smtplib.SMTPAuthenticationError: (535, b'5.7.8 Username and Password not accepted. Learn more at\n5.7.8  https://support.google.com/mail/?p=BadCredentials i6-20020a05600c354600b003974a00697esm5184568wmq.38 - gsmtp')
```
