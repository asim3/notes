## Deploy to Swarm
```yml
name: Production CD
name: Staging CD

on:
  push:
    branches:
      - production
      - main
    tags:
      - staging-**
  schedule:
    - cron:  '59 23 * * *'

env:
  PROJECT_NAME: My_project
  DOCKER_HOST: "${{ vars.SSH_PROD_URI }}"
  SSH_HOST_KEY: "${{ vars.SSH_PROD_HOST_KEY }}"
  SSH_PRIVATE_KEY: ${{ secrets.SSH_PROD_PRIVATE_KEY }}

jobs:
  docker_deploy:
    name: Deploy To SWARM
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Add host to ssh/known_host file
        run: mkdir -p ~/.ssh && echo "$SSH_HOST_KEY" >> ~/.ssh/known_hosts

      - name: Deploy To Docker Station
        run: >
          GIT_REF=$(git rev-parse --verify HEAD)
          && export PROJECT_IMAGE_TAG=${GIT_REF}
          && eval "$(ssh-agent -s)"
          && ssh-add - <<< $SSH_PRIVATE_KEY
          && docker stack deploy -c ./deploy/docker-compose.yml    ${PROJECT_NAME}

      - name: Clean Up SSH
        if: always()
        run: rm -rf ~/.ssh
```
