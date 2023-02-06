## BasicAuthentication
generally only appropriate for testing.

## SessionAuthentication
appropriate for AJAX clients that are running in the same 
session context as your website.

## TokenAuthentication
appropriate for client-server setups, 
such as native desktop and mobile clients.

## RemoteUserAuthentication
allows you to delegate authentication to your web server, 
which sets the REMOTE_USER environment variable.


# Third party
## Django OAuth Toolkit
The Django OAuth Toolkit package provides OAuth 2.0 support and works 
with Python 3.4+. The package is maintained by Evonove and uses the 
excellent OAuthLib. The package is well documented, and well supported 
and is currently the `Django REST framework` recommended package for 
OAuth 2.0 support.

> OAuth (Open Authorization) is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords. This mechanism is used by companies such as `Amazon`, `Google`, `Facebook`, `Microsoft`, and `Twitter` to permit the users to share information about their accounts with third-party applications or websites. 


## Simple JWT
JSON Web Token is a fairly new standard which can be used for token-based
authentication. Unlike the built-in TokenAuthentication scheme, JWT 
Authentication doesn't need to use a database to validate a token. A 
package for JWT authentication is djangorestframework-simplejwt which 
provides some features as well as a pluggable token blacklist app.
