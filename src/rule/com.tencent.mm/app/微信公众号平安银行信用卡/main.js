import { BillType, formatDate, parseWechat, RuleObject, toFloat, transferCurrency } from 'common/index.js';

const SOURCE_NAME = '平安银行信用卡';
const TITLE = ['消费成功通知','退款入账提醒'];


let rules = [
  [
    /消费商家：(.*?)\n消费时间：(.*?)\n消费金额：(.*?)([\d,]+.\d{2})元\n优惠金额：RMB([\d,]+.\d{2})元\n实际金额：RMB(.*?)元/,
    match =>{
      const [, shopItem, time, currency,totalMoney, fee, money] = match;

      return new RuleObject(
        BillType.Expend,
        toFloat(totalMoney),
        '',
        shopItem,
        SOURCE_NAME,
        '',
        toFloat(fee),
        transferCurrency(currency),
        formatDate(time, 'Y年M月D日 h:i'),
        `微信[${SOURCE_NAME}-消费]`
      )
    }
  ],
  [
    /退款金额：([A-Z]+)([\d,]+.\d{2})\n退款时间：(.*?)\n退款账户：(.*?)\n抵扣账单月份：(\d+)月/,
    match =>{
      const [, currency,money, time, cardName,month] = match;
      return new RuleObject(
        BillType.Income,
        toFloat(money),
        '信用卡退款',
        `抵扣${month}月账单`,
        SOURCE_NAME,
        '',
        0.0,
        transferCurrency(currency),
        // 10月09日
        formatDate(time, 'M月D日'),
        `微信[${SOURCE_NAME}-退款]`
      )
    }
  ]
]

/**
 * 根据数据获取规则对象
 * @param {string} data - 数据字符串
 * @returns {RuleObject|null} - 规则对象，如果获取失败则返回null
 */
export function get(data) {
  return parseWechat(data,rules,SOURCE_NAME,TITLE)
}
