<<<<<<< HEAD
import { BillType } from './utils/BillType';
=======
import { BillType } from 'common/index.js';
import { get } from './category/main';
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc

const money = window.money || 0;
const type = window.type || BillType.Expend;
const shopName = window.shopName || '';
const shopItem = window.shopItem || '';
const time = window.time || '00:00';

<<<<<<< HEAD
import { get } from './category/main';

=======
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
print(JSON.stringify(get(money, type, shopName, shopItem, time)));
