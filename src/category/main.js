import { BillType, isTimeInRange } from 'common/index.js';

function getLevel2 (category) {
  switch (category) {
    case '三餐':
      if (isTimeInRange('06:00', '09:30', time)) {
        return '早餐';
      }
      if (isTimeInRange('9:30', '10:30', time)) {
        return '早茶';
      }
      if (isTimeInRange('10:30', '14:30', time)) {
        return '午餐';
      }
      if (isTimeInRange('14:30', '16:00', time)) {
        return '下午茶';
      }
      if (isTimeInRange('16:00', '21:30', time)) {
        return '晚餐';
      }
      if (isTimeInRange('21:30', '06:00', time)) {
        return '夜宵';
      }
  }
  return category;
}


export function get(money, type, shopName, shopItem, time) {
  let string = `${shopName}_${shopItem}`;

  const publicRule = {
    "快赎理财": /(余[额利]宝)|朝朝宝|活期\+/,
    "基金": /基金(?!会)/,
    "黄金": /黄金/,
    "债券": /债券/,
    "外汇": /外汇/,
    "理财产品": /理财/
  };
  let rules;
  if (type === BillType.Expend) {
    rules = Object.assign(publicRule, {
      "三餐": /([煨煮卤饺馍]|[^零]?食(?!戟之灵|的俘虏|.*争霸|[品物用神气人])|[^小灰]?汤(?![氏记家姆阴山泉河浴]|臣倍健|.?[村乡镇县市州])|煎(?![锅药])|炖(?![盅锅])|[^代套]?餐(?![具盘巾勺桌椅])|炒(?![锅勺冰货]|板栗|栗子)|蒸(?![笼屉锅片布箱柜汽]|桑拿)|[^爆轰]?炸(?![弹锅开药])|烤(?![箱架盘火炉盆])|[^喂]?饭(?![碗锅勺圈]))(?!.*([用器节]|套装|工具))|([烙馅灌飞剁烧]|千层|油酥|扣肉|酱香)饼|[火香干]锅|[粉面][店馆]|[家土]菜馆|[包早]点|([鲜汤大肉]|小笼)包|油条|([卤鱼渔拌凉]|螺蛳|[牛羊猪].{0,3}|花甲|石磨|.[杂脚蹄肉]|[海越]南)粉|(手工|[拉粉冷凉捞]|(biang|[担旦]){2}|刀削|[牛羊猪].{0,3}|[炸杂]酱|.[杂脚肉])[面麵麺]|锅盔|(特色|地方|家常|私房|[湘川鲁粤闵徽浙宽冒]|淮扬|江湖)菜|鸡公煲|新芙蓉|民间沙水|大米先生|老盛昌|爆好呷|李丸外|辣有味|沙县小吃|大排档|黑色[经金精]典|馄饨|麻辣|臭(豆腐|干子)|自助(海鲜|$|：)|[鸡牛羊]排|肯德基|麦当劳|疆尕尕|(德克|华莱)士|pizza|[披批比匹]萨|寿司|料理|汉堡|和宴厨|生鲜|蔬菜|菜铺|水产|干货|副食|豆制品|饿了么|美团/i,

      "电器数码":
        /[^(宽娱)]数码(?!宝贝)|手机(?!充值|缴费|客户端|碎屏险|版)|耳[机麦]|音[响箱]|电[脑视器扇]|冰箱|空调|(饮水|洗衣|烘干|油烟)机|NOKIA|诺基亚|MOTO|摩托罗拉|Samsung|Apple|三星|索尼爱立信|ip(hone|ad)|苹果(手机|电脑|电子|.+(科技|有限公司))|Philips|飞利浦|lenovo|联想|LGSharp|夏普|多普达|金立|Amoi|夏新|波导|纽曼|Haier|海尔|TCL|HP|惠普|BenQ|明基|OPPO|Konka|康佳|CECT|HEDY|七喜|CoolPAD|酷派|ASUS|华硕|Mio宇达电通|琦基|ZTE|中兴|MEIZU|魅族|UT斯达康|BlackBerry|黑莓|Alcatel|阿尔卡特|大显|HKC|弘谷电|艾美讯|amsam|恒基伟业|Palm|RIM|OKWAP|英华达|天语|小米(?!游戏|视频|音乐|移动|公交|运动|钱包|数字|营业厅)|华为(?!视频|影视|软件)|一加|vivo|索尼|金士顿|闪迪|七彩虹|英特尔|Intel|AMD|松下(?!.{1,2}郎)|^(.*[^绝凄奇])?美的(?!启迪|升华|[感享]受)|格力/i,

      "运动": /健身|运动(?![装鞋裤衣服])|瑜珈|增肌|减脂|keep|汤臣倍健|肌肉科技|腹肌轮|[杠哑]铃|私教|游泳|潜水|跑步|马拉松|射箭|击剑|(空手|[跆截]拳|[柔剑])道|摔跤|[射兵拳搏]击|咏春|(太极|螳螂|形意|[虎鹤]形|[猴醉长泰]|八极)拳|马术|骑[马车射]|骑行(?!卡)|斗牛|弓箭|田径|([链篮足排棒野垒铅网冰台]|保龄|高尔夫|橄榄|实心|羽毛|乒乓|平衡)球|斯诺克|泡沫轴|帆船|冲浪|攀岩|滑[雪冰翔]|冰壶|漂流|皮划艇|跳伞|潜[水泳]|深潜|户外|蛋白粉|氮泵|左旋肉碱|乳清蛋白|俯卧撑|[单双]杠|pornhub|probili|杜蕾斯|万艾可|避孕[套药]|毓婷|震动棒|角先生|假阳具|充气娃娃|飞机杯|自慰|(成人|情趣)用品|印度神油/i,

      "房租": /公寓|房租|租金|房东/,

      "零食": /零食|小吃|炒货|桥头排骨|卫龙|翻天娃|辣翻天|贤哥|饼干|(可丽|华夫|夹心|桃酥|鲜花|老婆|[雪月])饼|[果肉][脯干]|蜜饯|(盐津|良品)铺子|仙贝|浪味仙|妙脆角|([薯A]|山[药楂]|香蕉)片|辣[条片干根]|(棒棒|跳跳|泡泡|口香|彩虹|咖啡|[奶软硬酥]|酥油|牛扎|话梅|夹心|水果)糖|(小小|花生)酥|旺(旺仔)|可比克|乐事|绿箭|益达|炫迈|([冰雪蛋切]|[桂松梅]花|绿豆|灯芯|豆沙|酸枣)糕|干脆面|(唐僧|老鼠|素|麻辣)肉|^[^(文玩)]*核桃|(火山|怪味|兰花|巧克力|[蚕纳奶青糖])豆|花生|([瓜梅榛栗松菓贞]|葵花)子|([干坚糖腰白]|碧根|开心|无花|罗汉|夏威夷)果|巴旦木|果([冻酱]|丹皮)|[凤鸡]爪|[鸭鹅]掌|食品店|[臭香]豆腐/i,

      "饮料": /[饮甜]品|果[汁肉酱]|星巴克|烧仙草|茶颜悦色|喜茶|奈雪的?茶|蜜雪冰城|CoCo都可|[柠檸]季|[一1]点点|乐乐茶|古茗|沪上阿姨|快乐柠檬|书亦|益禾堂|贡茶|清补凉|茶百道|皇茶|农夫山泉|怡宝|恒大冰泉|百岁山|娃哈哈|可乐|雪碧|(芬|美年)达|红牛|战马|阿萨姆|营养快线|茶π|元[気气氣]森林|东鹏|海之言|脉动|尖叫|维他(柠檬茶|豆?奶)|东方[树尿]叶|(崂山(蛇舌|圣)|苏打|巴黎|柠檬|纯净|矿泉|矿物质)水|[格卡]瓦斯|酸梅汤|(花生|o泡果|舒化|早餐|[酸椰牛羊驼猪狗豆炼鲜烤])[奶乳](?!奶)|冰糖雪梨|([椰豆橙]|沙棘|[苹芒]果|葡萄)汁|碧螺春|普洱|铁观音|毛尖|龙井|乌龙|黄芽|([红黑黄绿白奶果擂]|酥油|阿帕|芝麻豆子|冰红|茉莉花|蜂蜜柚子)茶/i,

      "水果": /(葡萄|红提|阳光玫瑰|荔枝|桂圆|龙眼|桂味|妃子笑|三月红|圆黑叶|糯米糍|挂绿|水晶球|白糖罂|([水苹芒蛇]|火龙|人参|奇异|神秘|圣女|百香|释迦|雪莲|牛油|罗汉|银杏|沙棘|姬娜|沙漠|霹雳)果|([桃李梨杏柿橘桔橙柚枣椰提莲]|车厘|覆盆)子|([黄白油毛蜜蟠樱]|猕猴)桃|([草蓝黑树云鹅蛇刺茅]|蔓越|菠萝)莓|([蜜西香]|红心|沙田|金[香兰]|梁平|坪山)柚|[香芭]蕉|([鸭香雪凤]|皇冠|水晶)梨|马蹄|荸荠|山竹|榴莲|石榴)(?![干汁味酱膏皮子籽]|果酱|[风口]味)/i,

      "快递": /[快速][递运]|兔喜生活|百世汇通|物流|宅急送|(邮|寄[送件])费|丰巢|(妈妈|菜鸟)驿站|菜鸟裹裹|代收|投递站|邮政|EMS/i,

      "网购代付": /亲[情属]卡/,

      "烟酒": /烟酒|[香云]烟|酒(?![店楼家])|雪茄|芙蓉王|大中华|红双喜|中南海|玉溪|红河|利群|金圣|野山茶|五粮液|茅台|国窖1573|[天海梦]之蓝|水井坊|剑南春|四特|稻花香|二锅头|马尿|老(白干|村长)|波尔多|拉菲|黑桃A|赤霞珠|[干甜][红白]|香槟|白兰地|伏特加|威士忌|纯生|乌苏|百威|燕京|雪[津花]|麦之初|科罗娜/i,

      "搬家": /搬家|货拉拉|货运/,

      "购物": /小卖部|拼多多|[保免]税店|七件事|蔚然锦和|超市|便利|建材|五金|.*客隆|家.{0,2}福|快乐惠|世纪联华|联华超市|大润发|华润万家|苏果|沃尔玛|物美|新一佳|好又多|华联|文峰大世界|TESCO乐购|易初莲花|麦德龙|中百连锁仓储|人人乐|家家悦|潍坊百货|欧尚|永辉|武商量贩|新华都|步步高商业|永旺|红旗连锁|三江购物|互惠|美廉美|百佳超市|易买得|维客|美特好|保龙仓|华普|利客来|良友金伴|美宜佳|华冠|家润多|华之友|好家乡|惠友|民生家乐|思达|雅家乐|天惠|新江厦|喜洋洋|乐尔乐|汇米巴|山姆|家[用居具]|厨[房具]|工具|[餐炒炖炸蒸烤食煨煮卤饺煎馍](?=.*[用器])|炖[盅锅]|餐[具盘巾勺桌椅]|炒[锅勺冰板栗用]|蒸[笼屉锅片布箱柜]|炸[锅]|烤[箱架盘火炉]|饭[碗锅勺]|枕头|[床被][单套]|床上用品|凉席|阀门|开关|扎带|购物/,

      "党费会费": /[会党团]费/,

      "话费网费": /电信|联通|移动|宽带|流量|话费|通信专营|营业厅/,

      "水电煤": /[电水燃(气)?]费|液化气(?![阀管])*/,

      "保险": /保[险单]|相互宝|准时[宝达]/,

      "穿戴": /[衣裤鞋袜帽穿戴衫袖裙]|([遮太]阳|[眼墨])镜|([男女工时西上下正]|表演|社交|职业|运动|休闲|情侣|诱惑)装|T恤|皮草|披风|马甲|吊带|背心|肚兜|亵衣|[胸乳]罩|[文裹]胸|(羽绒|居家|作训|[常制汉]|工作|水手)服|外套|夹克|牛仔|潮[牌流男]|耐克|nike|阿迪|361[度°]|鸿星尔克|特步|贵人鸟|七匹狼|李宁|美特斯邦威|优衣库|以纯|真维斯|花花公子|PLAYBOY|SEPTWOLVES|啄木鸟|TUCANO|恒源祥|hengyuanxiang|卡帝乐鳄鱼|CARTELO|班尼路|Baleno|嘉晔|JIAYE|罗蒙|ROMON|皮尔卡丹|pierre ?cardin|富贵鸟|FUGUINIAO|布先生|森马|Semir|A21|拇指白小T|稻草人/i,

      "理发": /发廊|[美理烫染]发|洗剪吹|焗油|形象设计|造型/,

      "护肤美妆":
        /洗面奶|面膜|卸妆[水棉油膏]|口红|唇彩|防晒|(水|润肤|身体|洁面)乳|(眼|护手)霜|爽肤|精[华油]|[乳唇]膏|凝胶|祛痘|(果|水杨)酸|粉底|欧莱雅|施华蔻|雅诗.?兰黛|美妆|发[油胶]|定型|啫喱|摩丝|大宝/,

      "付费会员":
        /加速器|(1号|畅.|影城|骑行)卡|[^(蚂蚁)]会员(?!购)|QQ(美化|号|音乐)|vip|迅雷|爱奇艺|优酷|腾讯视频|[红黄蓝绿黑粉紫彩魔]钻|网易云|虾米音乐|酷[狗我]|WPS|瓦力科技|高级账户|自动续费|连续包[年季月]/i,

      "购买App":
        /软件.*安装|(激活|注册|授权)码|([高升]级|专业|付费|终[生身级]|增强|完整|永久)版|\bP(ro|lus)\b/i,

      "游戏": /游戏|game|Steam|育碧|U(play|bisoft)|游(民星空|侠网)|点[券卡]|bili.*([^Bb]币|券)|深圳市腾讯天游科技有限公司/i,

      "小说漫画":
        /阅读|漫画|[看读追]书|小说|起点(?!畅读卡)|多看|[七7]猫|阅文|熊猫[看读]书|有妖气(?!会员)/,

      "电影": /影[城院]|(电影|淘票)票|猫眼电影|中影|王府井|cgv|潇湘国际|沃美|宽娱数码.+付费-《.+》|云视听/i,

      "旅行": /[^(精灵)]旅社|旅[游行馆]|[青国]旅|酒店|宾馆|招待所|民宿|度(假|蜜月)|假[日期](?!.*(快乐|愉快))|(维也纳|中州)国际|凯宾斯基|万达文华|[7七柒华]天|如家|锦江之星|IU|尚客优品|艾美|索菲特|万豪|团泊湖温泉|开元名都|朗廷|豪生|(金陵|南京玄武|金源大)饭店|东莞凯景|君悦|瑞吉|迪拜|珠海德翰|王朝大|成都家园国际|石家庄中茂海悦|武汉(华美达光谷|颐和尚)|三亚海悦湾|汉庭|青岛海景花园|铂尔曼|长沙(金7年辉|通程国际|茉莉花)|三亚华宇|杭州西湖温德姆豪廷|厦门温德姆和平国际|北京(千禧|嘉里中心|斯威特洛芙|神农庄园|伯豪瑞廷|市裕龙)|诺富特|厦门海悦山庄|雅乐轩|卓美亚|帝豪|南昌格兰云天|酋长宫殿|重庆(金科|拉斐皇廷|柏联温泉精品)|天津(赛象|金皇)|仙人掌度假|广州万事达|北京金台夕照会馆|上海(波特曼丽嘉|龙之梦丽晶|日航饭店|金茂君悦|宝隆美爵|神旺|艾福敦|宝京精品|美豪|瑞吉红塔|斯波特)|桂林金龙珠|澳门(金龙|新丽华)|香港(新乐|如心海景|半岛|铜锣湾皇悦|丽都|港丽|[华青盛]逸)|深圳(景轩|百合|福田香格里拉|圣廷苑|晶都|求山水|万悦国际)|天宁皇朝|海景|希尔顿|喜来登/,

      "打赏": /直播|虎牙|斗鱼|抖音|微赞/,

      "聚会": /KTV|轰趴馆|海底捞|(酒拾|佰烧)烤肉|韩大地|椰子鸡|涮羊肉|.{2,}火锅/i,

      "收藏": /[文古]玩|菩提子|骆驼骨|纪念[币章]|古画|翡翠|蜜蜡|(和田|[墨白]|金镶|羊脂)玉|雕塑|[浮木玉线石]雕|(冰|玻璃)种|种水|(帝王|祖母)绿|宝石|冰紫|手办|景品|周边/,

      "娱乐": /会所|网吧|保健(?!院)/,

      "医疗": /医([院馆生护用药]|.?室)|药([店房号业厂]|匣子)|诊所|卫生(服务(中心|站)|[院所室])|老百姓|海王星辰|\bLBX\b|(同仁|九芝)堂|甘之草科技|三七|黄芪|枸杞|菊花|甘草|红花|当归|石斛|凉茶|([白红沙玄党苦人]|西洋|花旗|太子)参|海(马|狗肾)|妇幼保健/,

      "学习": /[打文影]印|图[文书解]|课[程外堂后本]|教[材辅育程你]|讲[解义]|[书古典秘]籍|文[具体]|([钢铅油毛软画]|圆珠|中性|水[性彩]|记号|荧光)笔|学[会费杂院校]|入门到精通|慕课|医(视时代|脉通|学教育|考)|新东方在线|沪江小D|当当网|(出版|印刷)社|《.+》|信[封笺纸]|(牛皮|[白宣]|草稿|铜板|包书|[AB][3456])纸/i,

      "罚款": /交警|公安|法院|处罚|违章|罚(款金)|((精神|财产|青春)损失|抚养|丧葬|诉讼)费/,

      "捐赠": /基金会|捐[赠助款]|水滴筹|慈善|希望工程|山区|贫困|让孩子|公益/,

      "公交地铁":
        /雪球科技|地铁|公交|轨道|交通联合|(城市|琴岛|燕赵|武汉|盛京|⻓安|吉林|深圳|赣州|岭南|[泉绿甬]城|绍兴|天府|东莞|珠海|一卡)通|(潇湘|明珠|交?通)卡|公共交通/,

      "打车": /滴滴|高德|(出租|快)车|的士|打[的车]|代驾|出行/,

      "火车": /铁路|[火列动]车|高铁|城轨|中铁网络/,

      "飞机": /航[班空天宇宙](?!.*([港店]|超市|食堂))|机票/,

      "汽车加油":
        /汽车|加油站|石[油化]|海油|充电桩|通用|大众|五菱|依维柯|荣威|申沃|东风|雪铁龙|本田|霸龙|悦达起亚|风神|小康|一汽|解放|奥迪|丰田|红旗|马自达|夏利|佳宝|北汽|福田|Jeep|奔驰|宝马|雷诺|特斯拉|法拉利|宾利|保时捷|兰博基尼|劳斯莱斯|欧曼|昌河|绅宝|威旺|欧辉|广汽|传祺|三菱|菲亚特|客车|吉奥|日野|长安商用|哈飞|陆风|标致/i,

      "育儿": /儿童|童装|(儿.*|配方)奶粉|纸尿裤|玩具|奥特曼|喜羊羊|灰太狼|奥迪双钻|樱桃小丸子|哆啦A梦|天线宝宝|母婴|Balabala|巴拉巴拉|小猪班纳|安奈儿|BOBDOG|巴布豆|米妮·哈鲁|MiniZaru|儿.*园|喂饭|饭圈/i,

      "发红包": /(红包|转账)/
    });
  } else {
    rules = Object.assign(publicRule, {
      "工资": /工资|津贴|薪[水资金]|奖金|[绩效]{2}|(年终|全勤|半年|季度)奖/,
      "收红包": /红包|转账/,
      "退款": /退款/,
      "公积金": /公积金/,
      "外快": /微拼|拼多多/
    });
  }

  let category = '其他';
  for (const key in rules) {
    if (rules[key].test(string)) {
      category = key; // 符合条件则赋值，然后跳出循环
      break;
    }
  }
  return {"category": getLevel2(category), "book": '默认账本' };
}
