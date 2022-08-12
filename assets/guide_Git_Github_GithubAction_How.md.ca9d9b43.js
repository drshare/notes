import{_ as n,c as o,o as i,a as e,b as t}from"./app.a0f52c8e.js";const v='{"title":"\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2AGithubActive \u5DE5\u4F5C\u6D41","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2AGithubActive \u5DE5\u4F5C\u6D41","slug":"\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2Agithubactive-\u5DE5\u4F5C\u6D41"}],"relativePath":"guide/Git/Github/GithubAction/How.md"}',a={},s=e("h2",{id:"\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2Agithubactive-\u5DE5\u4F5C\u6D41",tabindex:"-1"},[t("\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2AGithubActive \u5DE5\u4F5C\u6D41 "),e("a",{class:"header-anchor",href:"#\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2Agithubactive-\u5DE5\u4F5C\u6D41","aria-hidden":"true"},"#")],-1),u=e("ol",null,[e("li",null,[e("p",null,[t("github \u4ED3\u5E93\u65B0\u589E "),e("code",null,".github/workflows"),t(" \u76EE\u5F55\uFF0C\u8BE5\u76EE\u5F55\u4E2D\u521B\u5EFA superlinter.yml \u6587\u4EF6")])]),e("li",null,[e("div",{class:"language-"},[e("pre",null,[e("code",null,` name: Super-Linter

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
           GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
`)])])]),e("li")],-1),r=[s,u];function c(l,h,d,p,b,m){return i(),o("div",null,r)}var f=n(a,[["render",c]]);export{v as __pageData,f as default};
