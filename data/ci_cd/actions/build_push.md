## build and push
`nano .github/workflows/docker_build_and_push.yaml`
```yaml
name: docker build and push
# secrets.DOCKERHUB_USERNAME
# secrets.DOCKERHUB_TOKEN
# secrets.DOCKERHUB_IMAGE

on:
  push:
    branches:
      - master
      - main
    tags:
      - v\d+\.\d+\.\d+


jobs:
  set-up-docker:
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
        run: |
          if [[ ${GITHUB_REF%/*} = "refs/tags" ]]; then
            echo "::set-output name=value::${GITHUB_REF##*/}"
          else
            echo "::set-output name=value::latest"
          fi

  docker:
    needs: set-up-docker
    runs-on: ubuntu-latest
    steps:
      - name: Build and push
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: ${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.DOCKERHUB_IMAGE }}:${{ steps.tag_name.outputs.value }}
```
