const { get } = require('./main');
const fs = require('fs');
const path = require('path');
const {testAnkioInit, testAnkio} = require("../../../../tests/TestUtils");
const {DataType} = require("../../../../utils/DataType");

testAnkioInit(get,__dirname,DataType.App,"com.tencent.mm")
test("微信支付消费（商家收款）", () => testAnkio('微信支付消费（商家收款）',[
    {
        type: 0,
        money: 14.00,
        fee: 0,
        shopName: '',
        shopItem: '',
        accountNameFrom: '零钱',
        accountNameTo: '',
        currency: 'CNY',
        time: 0,
        channel: '微信[微信支付]'
    }
]))

test("微信支付消费（第三方收款）", () => testAnkio('微信支付消费（第三方收款）',[
    {
        type: 0,
        money: 2.00,
        fee: 0,
        shopName: '',
        shopItem: '',
        accountNameFrom: '零钱',
        accountNameTo: '',
        currency: 'CNY',
        time: 0,
        channel: '微信[微信支付]'
    },
    {
        type: 0,
        money: 6.20,
        fee: 0,
        shopName: '',
        shopItem: '',
        accountNameFrom: '零钱通',
        accountNameTo: '',
        currency: 'CNY',
        time: 0,
        channel: '微信[微信支付]'
    },
    {
        type: 0,
        money: 12.70,
        fee: 0,
        shopName: '',
        shopItem: '',
        accountNameFrom: '零钱',
        accountNameTo: '',
        currency: 'CNY',
        time: 0,
        channel: '微信[微信支付]'
    },
    {
        type: 0,
        money: 35.41,
        fee: 0,
        shopName: '京东',
        shopItem: '',
        accountNameFrom: '中国银行储蓄卡(7575)',
        accountNameTo: '',
        currency: 'CNY',
        time: 0,
        channel: '微信[微信支付]'
    }
]))

test("微信支付自动扣费", () => testAnkio('微信支付自动扣费',[
    {
        type: 0,
        money: 53.72,
        fee: 0,
        shopName: '',
        shopItem: '滴滴出行 - 先乘后付',
        accountNameFrom: '零钱通',
        accountNameTo: '',
        currency: 'CNY',
        time: 0,
        channel: '微信[微信支付]'
    },
    {
        type: 0,
        money: 51.70,
        fee: 0,
        shopName: '',
        shopItem: '滴滴出行 - 先乘后付',
        accountNameFrom: '零钱通',
        accountNameTo: '',
        currency: 'CNY',
        time: 0,
        channel: '微信[微信支付]'
    }
]))

test("微信支付收款", () => testAnkio('微信支付收款',[
    {
        type: 1,
        money: 12.70,
        fee: 0,
        shopName: '',
        shopItem: '今日第1笔收款，共计￥12.70',
        accountNameFrom: '零钱',
        accountNameTo: '',
        currency: 'CNY',
        time: 0,
        channel: '微信[微信支付]'
    }
]))
