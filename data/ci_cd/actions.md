## CI/CD
`nano .github/workflows/ci_cd.yaml`
```yaml
name: CI-CD
# secrets.DOCKERHUB_USERNAME
# secrets.DOCKERHUB_IMAGE
# secrets.DOCKERHUB_TOKEN

# secrets.KUBE_CONFIG
# secrets.KUBE_NAMESPACE

on:
  push:
    branches:
      - master
      - main
    tags:
      - v\d+\.\d+\.\d+


jobs:
  run-tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ['3.x', '3.6', '3.7', '3.8', '3.9']
    name: Test on Python ${{ matrix.python-version }}
    steps:
      - uses: actions/checkout@v2

      - uses: actions/setup-python@v2
        with:
          python-version: ${{ matrix.python-version }}
          
      - run: cd my_name && pip install -r requirements.txt
      - run: cd my_name && python manage.py test


  build_and_push:
    needs: run-tests
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

      - name: Build and push
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: ${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.DOCKERHUB_IMAGE }}:${{ steps.tag_name.outputs.value }}


  deployment:
    needs: build_and_push
    runs-on: ubuntu-latest
    steps:
      - id: tag_name
        run: |
          if [[ ${GITHUB_REF%/*} = "refs/tags" ]]; then
            echo "::set-output name=value::${GITHUB_REF##*/}"
          else
            echo "::set-output name=value::latest"
          fi

      - uses: azure/k8s-set-context@v1
        with:
          method: kubeconfig
          kubeconfig: ${{ secrets.KUBE_CONFIG }}

      - run: kubectl -n ${{ secrets.KUBE_NAMESPACE }} set image deploy my-deployment-name ${{ secrets.DOCKERHUB_IMAGE }}=${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.DOCKERHUB_IMAGE }}:${{ steps.tag_name.outputs.value }}
```
