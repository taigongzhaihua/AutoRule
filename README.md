<p align="center">
<img src="https://socialify.git.ci/AutoAccountingOrg/AutoRule/image?description=1&descriptionEditable=%E8%87%AA%E5%8A%A8%E8%AE%B0%E8%B4%A6%E8%A7%84%E5%88%99%E6%9E%84%E5%BB%BA%E6%A1%86%E6%9E%B6&forks=1&issues=1&logo=https%3A%2F%2Fpic.dreamn.cn%2Fruler-svgrepo-com.svg&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light" alt="AutoRule" width="640" height="320" />
</p>


## 注意

本仓库不受理任何自动记账规则有误的Issue，Issue请提交到[AutoAccountingOrg/AutoAccounting](https://github.com/AutoAccountingOrg/AutoAccounting/issues)仓库。
<<<<<<< HEAD
=======
## 更新日志

[![](https://img.shields.io/github/v/release/AutoAccountingOrg/AutoRule.svg)](https://cloud.ankio.net/%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98/%E8%87%AA%E5%8A%A8%E8%AE%B0%E8%B4%A6/%E8%A7%84%E5%88%99%E6%9B%B4%E6%96%B0)
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc

## 简介
该工具是自动记账App的衍生工具，用于构建自动记账的自动分类规则和自动识别规则。

## 更新频率

- 每月一次全量更新。

## 快速测试

如果你不知道某个数据是否被规则匹配到，你可以按照如下步骤进行快速测试：

1. 将需要测试数据放置到：`src/rule/tests.txt`文件中。
2. 使用nodejs执行`node src/rule/testRule.cjs`进行测试。
3. 如果数据已经被匹配到会在命令行输出匹配数据。

## 构建

- 基础环境：`NodeJS` 
- 包管理器：`yarn`
<<<<<<< HEAD
- 构建工具：`webpack`
- 代码风格: `eslint`
- 代码格式化: `prettier`
=======
- 构建工具：`rollup`
- 代码风格: `eslint`
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
- 测试工具: `jest`
- 依赖安装：`yarn install`

使用如下命令构建自动记账规则：
```shell
yarn build
```

使用如下命令构建并测试自动记账规则：
```shell
yarn test
```

<<<<<<< HEAD
=======
> [!IMPORTANT]
> 如需发起PR，请确保通过所有测试。

>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
## 使用
- 自动记账的规则会进行周期性更新，自动记账用户跟随App更新提醒进行周期性更新即可。

## 参与贡献

[参考贡献指南](CONTRIBUTING.md)

## 赞助支持

|                             微信                             |                            支付宝                            |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![Wechat QRcode](https://pic.dreamn.cn/uPic/2023_04_23_00_41_49_1682181709_1682181709722_KGWAI6.jpg) | ![Alipay QRcode](https://pic.dreamn.cn/uPic/2023_04_23_00_42_02_1682181722_1682181722820_82xpxH.jpg) |

## 协议

[GPL 3.0](LICENSE)
