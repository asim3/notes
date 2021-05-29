## functions
`nano .github/workflows/my-functions.yaml`
```yaml
name: my-functions-actions
on: [ push ]
jobs:
  my-env-job:
    runs-on: ubuntu-latest
    steps:
      - run: echo $contains $startsWith $endsWith $format
        # true false false Hello Mona the Octocat
        env:
          contains: ${{ contains('Hello world', 'llo') }}
          startsWith: ${{ startsWith( github.ref, 'refs/tags' ) }}
          endsWith: ${{ endsWith( github.ref, 'refs/tags' ) }}
          format: ${{ format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat') }}
          
          # join: ${{ join() }}
          
          # toJSON: ${{ toJSON() }}
          # fromJSON: ${{ fromJSON() }}
          
          # hashFiles: ${{ hashFiles() }}
```
