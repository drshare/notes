##### 翻译

| 序号 | 英文                  | 中文 |
| ---- | --------------------- | ---- |
| 0    | repository(简写repos) | 仓库 |



## github 仓库删除

> 删除单个仓库在 Settings -> Delete this repository

## github 仓库批量删除

> 使用场景：批量删除github仓库，手动

1. 创建文本文件用于存储 需要删除的 repos 信息

    ```
    文本格式 -> username(github用户名)\repos-name(需要删除的github 仓库名称)
    每一行写一条
    drshare/repos
    drshare/repos-first
    drshare/repos-second
    
    ```

2. Github 获取token 权限

    > settings -> Developer settings -> Personal access tokens -> Generate new token(生成新的token) 
    >
    > 勾选 delete_repo

3. linux

    ```
    while read r;do curl -XDELETE -H 'Authorization: token xxx' "https://api.github.com/repos/$r ";done < repos
    ```

    

4. windows

    ```
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    get-content D:\repolist.txt | ForEach-Object { Invoke-WebRequest -Uri https://api.github.com/repos/$_ -Method “DELETE” -Headers @{"Authorization"="token xxx"} }
    
    ```

    