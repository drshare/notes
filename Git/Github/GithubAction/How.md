## 快速创建一个GithubActive 工作流

1. github 仓库新增 `.github/workflows` 目录，该目录中创建 superlinter.yml 文件

2. ```
    name: Super-Linter
    
    # Run this workflow every time a new commit pushed to your repository
    on: push
    
    jobs:
      # Set the job key. The key is displayed as the job name
      # when a job name is not provided
      super-lint:
        # Name the Job
        name: Lint code base
        # Set the type of machine to run on
        runs-on: ubuntu-latest
    
        steps:
          # Checks out a copy of your repository on the ubuntu-latest machine
          - name: Checkout code
            uses: actions/checkout@v2
    
          # Runs the Super-Linter action
          - name: Run Super-Linter
            uses: github/super-linter@v3
            env:
              DEFAULT_BRANCH: main
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```

3. 

