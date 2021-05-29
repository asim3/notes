## build and push
[docks](https://github.com/marketplace/actions/build-and-push-docker-images)
```yaml
name: ci
on: [ push ]
jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Set up QEMU
        uses: docker/setup-qemu-action@v1
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1
      
      - name: Docker meta
        id: meta
        uses: docker/metadata-action@v3
        with:
          images: asim3/added-by-github-actions

      - name: Login to DockerHub
        uses: docker/login-action@v1 
        with:
          registry: docker.io
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
          # https://hub.docker.com/settings/security

      - name: Build and push
        id: docker_build
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
```
