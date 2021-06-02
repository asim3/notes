## Django
`nano docker-compose.yaml`
```yaml
version: "3.3"
   
services:
  postgres-compose:
    image: postgres
    restart: unless-stopped
    container_name: postgres-compose
    volumes:
      - ./data/db:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres

  django-compose:
    # build: .
    image: python:3
    container_name: django-compose
    command: >
      /bin/sh -c "
        cd /code \
          && python3 -m venv ./.venv \
          && pwd \
          && ls -al / \
          && ls -al ./ \
          && source ./.venv/bin/activate \
          && pip3 install -r ./requirements.txt \
          && python3 manage.py makemigrations \
          && python3 manage.py migrate \
          && python3 manage.py runserver 0.0.0.0:8000
      "
    volumes:
      - ./brandat:/code
    ports:
      - "8000:8000"
    depends_on:
      - postgres-compose
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
```
