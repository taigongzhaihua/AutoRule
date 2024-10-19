import { BillType, formatDate, RuleObject, splitSms, toFloat } from 'common/index.js';

let rules = [
  {
    //您的工商银行卡6212 **** **** 7432收到来自*阳的转账170.00元，已于2024-10-06 23:46成功到账！
    //您向陈阳的工商银行卡6212 **** **** 7432转账170.00元，已于2024-10-06 23:46成功到账！
    'regex': /您向(.*?)的(.*?)转账([\d,]+.\d{2})元，已于(.*?)成功到账！/,
    'match': (match) => {
      let [,shopName,card, money,date,   ] = match;
      let obj = new RuleObject();

      obj.money = toFloat(money);
      obj.channel = `云闪付[转账]`; //2024-10-06 23:46
      obj.time = formatDate(date, 'Y-M-D h:i');

      obj.type = BillType.Expend;
      obj.shopName = shopName;
      obj.accountNameFrom = card;
      return obj;
    }
  }
];

export function get (data) {
  let json = JSON.parse(data);
  if (json.title !== '支付助手：转账成功') {
    return null;
  }
  for (let rule of rules) {
    const match = json.text.match(rule.regex);
    if (match) {
      return rule.match(match);
    }
  }
}
