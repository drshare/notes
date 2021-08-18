1. 产品介绍页以及首页

   ```
   1.实心填充的按钮
   size="large"
   2.空心无填充的按钮
   color="white" 
   size="large" 
   type="plain"
   3.首页注册按钮
   color="white" 
   size="large" 
   type="plain"
   ```

   

2. 控制台产品列表页

   ```
   1.创建按钮
   icon="iconfont iconkongzhitai-rongqipingtaiBCOS"
   ```
   
3. 控制首页

   ```
   1.充值
   size="small"
   type="plain"
   2.查看消费明细
   type="plain"
   ```

   

3. 刷新按钮 返回上一步按钮

   ```
   type="square"
   icon="iconnatshuaxin"
   ```

5. 保存（创建）按钮

   ![image-20201204154617504](../assets/imgs/image-20201204154617504.png)

   ```
   无参数
   ```

6. 取消按钮

   ```
   color="info"
   ```

7. 下一步按钮

8. ![image-20201204154706786](../assets/imgs/image-20201204154706786.png)

   ```
   无参数
   ```

9. 上一步按钮

   ```
   type="plain"
   ```

10. 购买页面提交订单按钮 （无参数）

11. 订单页面-确认支付 

    ```
    无参数
    ```

12. 支付页面-取消支付

    ```
    type="plain"
    ```

13. drawer 按钮

    ```
    1.确认  无参数
    2.取消 color="info"
    ```

    

14. dialog 确认取消按钮

    ```
    1.确认 type="text"
    2.取消 color="info" type="text"
    ```

15. 全部单选按钮 BaseToggoleButtonNew

    ```
    v-model 选中的值
    label="唯一标识的值想要传给v-model的值"
    ```

16. 充值按钮 

    ```
    未输入 :disabled="true"
    已输入 color参数去掉或者 color="primary"
    ```

17. 修改邮箱或者修改手机号

    ```
    去掉修改两个字
    type="text"
    icon="iconfont ***"
    ```

18. 账号管理

    ```
    1.充值码兑换
    type="plain"
    2.导出 
    icon="iconfont ***"
    ```

19. 订单列表

    ```
    1.导出 （无参数）
    2.id 跳转
    type="link"
    3.查询 （无参数）
    4.重置 type="info"
    ```

20. 登录注册

    ```
    size="large"
    在页面里面手动设置width: 100%;
    ```

    