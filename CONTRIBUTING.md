
首先，感谢您抽出时间来贡献！

我们鼓励和重视各种类型的贡献。在贡献之前，请确保阅读相关部分。这将使我们这些维护者的工作变得更容易，也会让所有参与者的体验更加顺畅。社区期待您的贡献。

> 如果您喜欢这个项目，但没有时间贡献，那也没关系。还有其他简单的方式来支持该项目并表示您的赞赏，我们也会非常高兴：
> - 给项目点个Star
> - 在 社交媒体 上分享
> - 在您项目的 readme 中引用该项目
> - 推广该项目并告诉您的朋友/同事


## 行为准则

自动记账是一个纯粹的自动化记账插件，采用GPLV3授权使用，禁止涉及政治、侵权等行为。

## 我有一个问题

> 如果您想要提问，我们假设您已阅读了可用的[文档](https://auto.ankio.net)。

本仓库不受理任何规则问题，规则问题请在这里提问：[AutoAccountingOrg/AutoAccounting](https://github.com/AutoAccountingOrg/AutoAccounting/issues)

## 我想要贡献


### 您的第一个代码贡献

我们鼓励您为自动记账规则贡献代码。这可能是您的第一个开源贡献，这是一个很好的开始。这是一些可以帮助您的指导：

<<<<<<< HEAD
自动记账规则采用`javascript`编写，使用`webpack`构建。如果您不熟悉这些工具，我们建议您先阅读相关文档。
=======
自动记账规则采用`javascript`编写，使用`rollup`构建。如果您不熟悉这些工具，我们建议您先阅读相关文档。
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc

为了提高代码兼容性使用`jest`作为测试框架，使用`babel`进行代码转换。

#### 项目结构

```
├── package.json
├── src                                     项目主目录
│   ├── category
│   │   ├── main.js     自动分类的主要文件（更新该文件）
│   │   └── main.test.js       测试文件
│   ├── category.js                   自动分类调用入口
│   ├── rule                          规则列表
<<<<<<< HEAD
│   │   ├── app                 App规则
│   │   │   ├── com.eg.android.AlipayGphone 支付宝包名                App规则
=======
│   │   │   ├── com.eg.android.AlipayGphone 支付宝包名                App规则
│   │   │   │  ├── app                 App规则
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
│   │   │   │   ├── 支付宝消息盒子  规则名称文件夹
│   │   │   │   │   ├── test        测试数据文件夹
│   │   │   │   │   │   ├──支付宝消费1.txt      测试数据
│   │   │   │   │   ├── main.js     规则文件
<<<<<<< HEAD
│   │   │   │   │   └── main.test.js 测试文件
│   │   ├── helper              无障碍规则
│   │   ├── notice              通知规则
│   │   └── sms                 短信规则
│   ├── rule.js                       自动记账识别规则调用入口
│   ├── test.js                       自动记账测试调用入口        
=======
│   │   │   │   │   └── main.test.cjs 测试文件
│   │   │   │  ├── helper              无障碍规则
│   │   │   │  ├── notify              通知规则
│   ├── rule.js                       自动记账识别规则调用入口
│   ├── test.cjs                       自动记账测试调用入口        
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
│   └── utils                         工具类
│       ├── BillType.js               账单类型
│       ├── Currency.js               币种
│       ├── DataType.js               数据类型（标记是App还是短信）
<<<<<<< HEAD
│       ├── RuleModules.js            
│       ├── RuleObject.js             规则对象
│       └── Time.js                   时间处理函数
├── webpack.config.js
=======
│       ├── Html.js                   Html工具类
│       ├── AliTool.js                支付宝公共处理函数
│       ├── RuleObject.js             规则对象
│       └── Time.js                   时间处理函数
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
└── yarn.lock

```

#### 代码规范

<<<<<<< HEAD
- 使用`prettier`进行代码格式化
- 使用`eslint`进行代码检查
- 使用`jest`进行单元测试
- 使用`webpack`进行构建
- 使用`yarn`进行包管理
- 使用`git`进行版本控制

#### 测试规范

请务必保证所有的测试用例都通过，如果你新增了规则，请务必在`main.test.js`中编写测试用例，以保证规则的正确性。
=======
- 使用`eslint`进行代码检查
- 使用`jest`进行单元测试
- 使用`rollup`进行构建
- 使用`yarn`进行包管理
- 使用`git`进行版本控制

> [!IMPORTANT]
> 虽然自动记账使用的Rhino只支持ES5的语法规范，但是在写规则的时候可以使用ES6的语法规范，构建的时候会自动转换。
> Rhino对一些比较新的正则支持比较差，请避免使用如下正则：
> - 分组捕获 `(?<name>...)`

#### 测试规范

请务必保证所有的测试用例都通过，如果你新增了规则，请务必在`main.test.cjs`中编写测试用例，以保证规则的正确性。
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc

测试用例编写规范：

```javascript

testAnkioInit(
    get, //导入main.js的get方法
    __dirname,//当前文件路径
    DataType.App,//这个规则类型
    "com.tencent.mm" //这个规则对应的包名
)
test(
    "收钱吧消费通知",//测试用例名称
    () => testAnkio('收钱吧消费通知'//测试用例数据名称
        ,[//数组，如果是多个测试用例请直接补充到数组结尾
    {
        type: 0,
        money: 2.00,
        shopName: '三津汤包雅雀湖店',
        shopItem: '门店收款',
        accountNameFrom: '',
        accountNameTo: '',
        fee: 0,
        currency: 'CNY',
        time: '',
        channel: '微信[收钱吧消费通知]'
    }
]))

```

测试用例数据的目录格式:

```angular2html
│   ├── test
│   │   ├── 收钱吧消费通知.txt
│   │   ├── 收钱吧消费通知2.txt
```

如果是多个测试数据，从第二个数据开始加上数字，数字从2开始，第一个不加。


#### 提交代码

<<<<<<< HEAD
=======
> 我们推荐使用：[gitmoji](https://gitmoji.dev/)规范提交信息。
> 推荐使用[AI-Git-Commit](https://plugins.jetbrains.com/plugin/24851-ai-git-commit) 自动生成提交信息（区域：美国），自定义提示词请使用根目录下`commit-prompt.txt`文件内容。
> 如果无法使用AI-Git-Commit插件，也可以使用[gitmoji-intellij-plugin](https://github.com/AnkioTomas/gitmoji-intellij-plugin/releases/tag/v1.14.0)来减少Emoji记忆。

>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
commit格式采用： :[emoji]: [更改内容] #关联issue

例如修复issue(#1)：

```shell
git commit -m ":bug: 修复xx问题 #1"
```

**注意：**
<<<<<<< HEAD
- emoji(:)和提交文本之间需要有一个空格
- 一个commit信息只允许包含一个关联issue

emoji可以参考如下列表，也可以使用该插件[gitmoji-intellij-plugin](https://github.com/AnkioTomas/gitmoji-intellij-plugin/releases/tag/v1.14.0)：

| Emoji | Entity | Code | Description | Name | Semver |
|-------|--------|------|------------|------|--------|
| 🎨 | &#x1f3a8; | :art: | 改善代码的结构/格式。 | art |  |
| ⚡️ | &#x26a1; | :zap: | 提高性能。 | zap | patch |
| 🔥 | &#x1f525; | :fire: | 删除代码或文件。 | fire |  |
| 🐛 | &#x1f41b; | :bug: | 修复错误。 | bug | patch |
| 🚑️ | &#128657; | :ambulance: | 关键热修复。 | ambulance | patch |
| ✨ | &#x2728; | :sparkles: | 引入新功能。 | sparkles | minor |
| 📝 | &#x1f4dd; | :memo: | 添加或更新文档。 | memo |  |
| 🚀 | &#x1f680; | :rocket: | 部署代码。 | rocket |  |
| 💄 | &#xff99cc; | :lipstick: | 添加或更新 UI 和样式文件。 | lipstick | patch |
| 🎉 | &#127881; | :tada: | 开始一个新项目。 | tada |  |
| ✅ | &#x2705; | :white_check_mark: | 添加、更新或通过测试。 | white-check-mark |  |
| 🔒️ | &#x1f512; | :lock: | 修复安全问题。 | lock | patch |
| 🔐 | &#x1f510; | :closed_lock_with_key: | 添加或更新秘密信息。 | closed-lock-with-key |  |
| 🔖 | &#x1f516; | :bookmark: | 发布/版本标签。 | bookmark |  |
| 🚨 | &#x1f6a8; | :rotating_light: | 修复编译器/检查器警告。 | rotating-light |  |
| 🚧 | &#x1f6a7; | :construction: | 工作正在进行中。 | construction |  |
| 💚 | &#x1f49a; | :green_heart: | 修复 CI 构建。 | green-heart |  |
| ⬇️ | ⬇️ | :arrow_down: | 降级依赖项。 | arrow-down | patch |
| ⬆️ | ⬆️ | :arrow_up: | 升级依赖项。 | arrow-up | patch |
| 📌 | &#x1f4cc; | :pushpin: | 将依赖项固定到特定版本。 | pushpin | patch |
| 👷 | &#x1f477; | :construction_worker: | 添加或更新 CI 构建系统。 | construction-worker |  |
| 📈 | &#x1f4c8; | :chart_with_upwards_trend: | 添加或更新分析或代码跟踪。 | chart-with-upwards-trend | patch |
| ♻️ | &#x267b; | :recycle: | 重构代码。 | recycle |  |
| ➕ | &#10133; | :heavy_plus_sign: | 添加依赖项。 | heavy-plus-sign | patch |
| ➖ | &#10134; | :heavy_minus_sign: | 删除依赖项。 | heavy-minus-sign | patch |
| 🔧 | &#x1f527; | :wrench: | 添加或更新配置文件。 | wrench | patch |
| 🔨 | &#128296; | :hammer: | 添加或更新开发脚本。 | hammer |  |
| 🌐 | &#127760; | :globe_with_meridians: | 国际化和本地化。 | globe-with-meridians | patch |
| ✏️ | &#59161; | :pencil2: | 修复拼写错误。 | pencil2 | patch |
| 💩 | &#58613; | :poop: | 编写需要改进的糟糕代码。 | poop |  |
| ⏪️ | &#9194; | :rewind: | 撤销更改。 | rewind | patch |
| 🔀 | &#128256; | :twisted_rightwards_arrows: | 合并分支。 | twisted-rightwards-arrows |  |
| 📦️ | &#1F4E6; | :package: | 添加或更新已编译文件或软件包。 | package | patch |
| 👽️ | &#1F47D; | :alien: | 因外部 API 更改而更新代码。 | alien | patch |
| 🚚 | &#1F69A; | :truck: | 移动或重命名资源（例如：文件、路径、路由）。 | truck |  |
| 📄 | &#1F4C4; | :page_facing_up: | 添加或更新许可证。 | page-facing-up |  |
| 💥 | &#x1f4a5; | :boom: | 引入重大更改。 | boom | major |
| 🍱 | &#1F371 | :bento: | 添加或更新资源。 | bento | patch |
| ♿️ | &#9855; | :wheelchair: | 改善可访问性。 | wheelchair | patch |
| 💡 | &#128161; | :bulb: | 在源代码中添加或更新注释。 | bulb |  |
| 🍻 | &#x1f37b; | :beers: | 醉酒地编写代码。 | beers |  |
| 💬 | &#128172; | :speech_balloon: | 添加或更新文本和文字。 | speech-balloon | patch |
| 🗃️ | &#128451; | :card_file_box: | 执行与数据库相关的更改。 | card-file-box | patch |
| 🔊 | &#128266; | :loud_sound: | 添加或更新日志。 | loud-sound |  |
| 🔇 | &#128263; | :mute: | 删除日志。 | mute |  |
| 👥 | &#128101; | :busts_in_silhouette: | 添加或更新贡献者。 | busts-in-silhouette |  |
| 🚸 | &#128696; | :children_crossing: | 改善用户体验/可用性。 | children-crossing | patch |
| 🏗️ | &#1f3d7; | :building_construction: | 进行架构更改。 | building-construction |  |
| 📱 | &#128241; | :iphone: | 工作在响应式设计上。 | iphone | patch |
| 🤡 | &#129313; | :clown_face: | 嘲笑事物。 | clown-face |  |
| 🥚 | &#129370; | :egg: | 添加或更新彩蛋。 | egg | patch |
| 🙈 | &#8bdfe7; | :see_no_evil: | 添加或更新 .gitignore 文件。 | see-no-evil |  |
| 📸 | &#128248; | :camera_flash: | 添加或更新快照。 | camera-flash |  |
| ⚗️ | &#128248; | :alembic: | 进行实验。 | alembic | patch |
| 🔍️ | &#128269; | :mag: | 改善搜索引擎优化。 | mag | patch |
| 🏷️ | &#127991; | :label: | 添加或更新类型。 | label | patch |
| 🌱 | &#127793; | :seedling: | 添加或更新种子文件。 | seedling |  |
| 🚩 | &#x1F6A9; | :triangular_flag_on_post: | 添加、更新或删除功能标志。 | triangular-flag-on-post | patch |
| 🥅 | &#x1F945; | :goal_net: | 捕捉错误。 | goal-net | patch |
| 💫 | &#x1f4ab; | :dizzy: | 添加或更新动画和过渡。 | animation | patch |
| 🗑️ | &#x1F5D1; | :wastebasket: | 弃用需要清理的代码。 | wastebasket | patch |
| 🛂 | &#x1F6C2; | :passport_control: | 处理与授权、角色和权限相关的代码。 | passport-control | patch |
| 🩹 | &#x1FA79; | :adhesive_bandage: | 对非关键问题进行简单修复。 | adhesive-bandage | patch |
| 🧐 | &#x1F9D0; | :monocle_face: | 数据探索/检查。 | monocle-face |  |
| ⚰️ | &#x26B0; | :coffin: | 删除无用的代码。 | coffin |  |
| 🧪 | &#x1F9EA; | :test_tube: | 添加失败的测试。 | test-tube |  |
| 👔 | &#128084; | :necktie: | 添加或更新业务逻辑。 | necktie | patch |
| 🩺 | &#x1FA7A; | :stethoscope: | 添加或更新健康检查。 | stethoscope |  |
| 🧱 | &#x1f9f1; | :bricks: | 与基础设施相关的更改。 | bricks |  |
| 🧑‍💻 | &#129489;&#8205;&#128187; | :technologist: | 改善开发者体验。 | technologist |  |
| 💸 | &#x1F4B8; | :money_with_wings: | 添加赞助或与货币相关的基础设施。 | money-with-wings |  |
| 🧵 | &#x1F9F5; | :thread: | 添加或更新与多线程或并发相关的代码。 | thread |  |
| 🦺 | &#x1F9BA; | :safety_vest: | 添加或更新与验证相关的代码。 | safety-vest |  |
=======
- emoji与提交文本之间需要有一个空格
- 每条commit信息只允许包含一个关联issue

可参考以下emoji列表：

- `:art:` : 改进代码结构/格式。
- `:zap:` : 提升性能。
- `:fire:` : 删除代码或文件。
- `:bug:` : 修复错误。
- `:ambulance:` : 关键热修复。
- `:sparkles:` : 引入新功能。
- `:memo:` : 添加或更新文档。
- `:rocket:` : 部署内容。
- `:lipstick:` : 添加或更新 UI 和样式文件。
- `:tada:` : 开始一个项目。
- `:white_check_mark:` : 添加、更新或通过测试。
- `:lock:` : 修复安全或隐私问题。
- `:closed_lock_with_key:` : 添加或更新秘密。
- `:bookmark:` : 发布/版本标签。
- `:rotating_light:` : 修复编译器/代码检查警告。
- `:construction:` : 进行中的工作。
- `:green_heart:` : 修复 CI 构建。
- `:arrow_down:` : 降级依赖。
- `:arrow_up:` : 升级依赖。
- `:pushpin:` : 将依赖固定到特定版本。
- `:construction_worker:` : 添加或更新 CI 构建系统。
- `:chart_with_upwards_trend:` : 添加或更新分析或跟踪代码。
- `:recycle:` : 重构代码。
- `:heavy_plus_sign:` : 添加依赖。
- `:heavy_minus_sign:` : 移除依赖。
- `:wrench:` : 添加或更新配置文件。
- `:hammer:` : 添加或更新开发脚本。
- `:globe_with_meridians:` : 国际化和本地化。
- `:pencil2:` : 修复拼写错误。
- `:poop:` : 编写需要改进的坏代码。
- `:rewind:` : 还原变更。
- `:twisted_rightwards_arrows:` : 合并分支。
- `:package:` : 添加或更新编译文件或包。
- `:alien:` : 更新因外部 API 变更的代码。
- `:truck:` : 移动或重命名资源（如文件、路径、路由）。
- `:page_facing_up:` : 添加或更新许可证。
- `:boom:` : 引入重大变更。
- `:bento:` : 添加或更新资产。
- `:wheelchair:` : 提升无障碍性。
- `:bulb:` : 在源代码中添加或更新注释。
- `:beers:` : 酒后编写代码。
- `:speech_balloon:` : 添加或更新文本和文字。
- `:card_file_box:` : 执行数据库相关更改。
- `:loud_sound:` : 添加或更新日志。
- `:mute:` : 移除日志。
- `:busts_in_silhouette:` : 添加或更新贡献者。
- `:children_crossing:` : 改善用户体验/可用性。
- `:building_construction:` : 进行架构变更。
- `:iphone:` : 从事响应式设计。
- `:clown_face:` : 模拟事物。
- `:egg:` : 添加或更新复活节彩蛋。
- `:see_no_evil:` : 添加或更新 .gitignore 文件。
- `:camera_flash:` : 添加或更新快照。
- `:alembic:` : 进行实验。
- `:mag:` : 提升 SEO。
- `:label:` : 添加或更新类型。
- `:seedling:` : 添加或更新种子文件。
- `:triangular_flag_on_post:` : 添加、更新或移除功能标志。
- `:goal_net:` : 捕获错误。
- `:dizzy:` : 添加或更新动画和过渡。
- `:wastebasket:` : 弃用需要清理的代码。
- `:passport_control:` : 处理与授权、角色和权限相关的代码。
- `:adhesive_bandage:` : 非关键问题的简单修复。
- `:monocle_face:` : 数据探索/检查。
- `:coffin:` : 删除无用代码。
- `:test_tube:` : 添加失败的测试。
- `:necktie:` : 添加或更新业务逻辑。
- `:stethoscope:` : 添加或更新健康检查。
- `:bricks:` : 基础设施相关变更。
- `:technologist:` : 改善开发者体验。
- `:money_with_wings:` : 添加赞助或资金相关的基础设施。
- `:thread:` : 添加或更新与多线程或并发相关的代码。
- `:safety_vest:` : 添加或更新验证相关的代码。

>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
