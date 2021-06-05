## build and push
`nano .github/workflows/docker_build_and_push.yaml`
```yaml
name: CI-CD
# secrets.KUBE_CONFIG
# secrets.KUBE_NAMESPACE

# secrets.DOCKERHUB_USERNAME
# secrets.DOCKERHUB_IMAGE
# secrets.DOCKERHUB_TOKEN

on:
  push:
    branches:
      - master
      - main
    tags:
      - v\d+\.\d+\.\d+


jobs:
  deployment:
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
