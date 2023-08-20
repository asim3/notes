## Django
`nano docker-compose.yml`
```yaml
version: "3.8"

services:
  postgres-compose:
    image: postgres
    container_name: __proj__-db
    restart: unless-stopped
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    volumes:
      - __proj__-db-data:/var/lib/postgresql/data

  django-compose:
    build: .
    container_name: __proj__
    depends_on:
      - postgres-compose
    environment:
      - DJANGO_SETTINGS_MODULE=__proj__.settings.docker_dev
      - DJANGO_DEBUG=True
      - DJANGO_SECRET_KEY="top-secret"
      - DJANGO_ALLOWED_HOSTS=*,127.0.0.1,localhost
      - SQL_ENGINE=django.db.backends.postgresql
      - SQL_DATABASE=postgres
      - SQL_USER=postgres
      - SQL_PASSWORD=postgres
      - SQL_HOST=postgres-compose
      - SQL_PORT=5432
    ports:
      - "8000:8000"

volumes:
  __proj__-db-data:
```
