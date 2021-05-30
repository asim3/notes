## Commands
[docs](https://docs.github.com/en/enterprise-server@2.22/actions/reference/workflow-commands-for-github-actions)
```yaml
name: my-commands-actions
on: [ push ]
jobs:
  my-env-job:
    runs-on: ubuntu-latest
    steps:

      - id: my_step_id
        run: echo "::set-output name=MY_NAME::my name is Asim"

      - run: echo ${{ steps.my_step_id.outputs.MY_NAME }}
        # my name is Asim


      - id: tag_name
        run: echo "::set-output name=value::${GITHUB_REF##*/}"
      - run: echo ${{ steps.tag_name.outputs.value }}
        # master
        # v1.2.4
      

      - id: get_version
        run: echo ::set-output name=VERSION::$(echo $GITHUB_REF | cut -d / -f 3)
      - run: echo ${{ steps.get_version.outputs.VERSION }}
        # master
        # v1.2.4


      - id: get_tag
        run: echo ::set-output name=VERSION::${GITHUB_REF/refs\/tags\//}
      - run: echo ${{ steps.get_tag.outputs.VERSION }}
        # refs/heads/master
        # v1.2.4
```
