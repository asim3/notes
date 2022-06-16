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
