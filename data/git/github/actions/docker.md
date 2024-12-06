```yaml
name: Docker Build & Push

on:
  push:
    branches:
      - "main"

jobs:
  Docker:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2
      - name: Build
        uses: docker/build-push-action@v4
        with:
          context: .
          load: true
          tags: asim3/notes:from-githubv0
      - name: Inspect
        run: |
          docker image inspect asim3/notes:from-githubv0
```
