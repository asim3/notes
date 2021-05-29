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
          tags: |
            asim3/added-by-github-actions:latest
            asim3/added-by-github-actions:1.3.3
            asim3/added-by-github-actions:1.3.4

      - name: Image digest
        run: echo "Image hash:" ${{ steps.docker_build.outputs.digest }}
```
