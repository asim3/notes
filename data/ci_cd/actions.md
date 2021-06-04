## build and push
`nano .github/workflows/docker_build_and_push.yaml`
```yaml
name: docker build and push

on:
  push:
    branches:
      - master
      - main
    tags:
      - v\d+\.\d+\.\d+


jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Set up QEMU
        uses: docker/setup-qemu-action@v1
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1
        # checkout will be done by buildkit

      - name: Login to DockerHub
        uses: docker/login-action@v1 
        with:
          registry: docker.io
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - id: tag_name
        run: echo "::set-output name=value::${GITHUB_REF##*/}"

      - name: Build and push
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: ${{ steps.tag_name.outputs.value }}
          labels: ${{ steps.tag_name.outputs.value }}
```
