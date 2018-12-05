import {UserInfo} from './entity/UserInfo';
import {AccountItemType} from './entity/AccountItemType';
import {MyAccount} from './entity/MyAccount';
import {AccountItem} from './entity/AccountItem';

export const USER_INFO: UserInfo = new UserInfo(
    'Admin',
    'assets/img/userIcon.jpg',
    1,
);

export const ACCOUNT_ITEM_TYPE_LIST: AccountItemType[] = [
    new AccountItemType(0, '餐饮'),
    new AccountItemType(1, '零食烟酒'),
    new AccountItemType(2, '购物'),
    new AccountItemType(3, '住房'),
    new AccountItemType(4, '交通'),
    new AccountItemType(5, '娱乐'),
    new AccountItemType(6, '人情'),
];

export const ACCOUNT_LIST: MyAccount[] = [
    new MyAccount('九月',
        new Date(Date.now()),
        new Date(2018, 9, 1),
        1234,
        1),
    new MyAccount('十月',
        new Date(Date.now()),
        new Date(2018, 10, 1),
        1000,
        2),
    new MyAccount('十一月',
        new Date(Date.now()),
        new Date(2018, 11, 1),
        1000,
        3),
    new MyAccount('十二月',
        new Date(Date.now()),
        new Date(2018, 12, 1),
        1000,
        4),
];

export const ACCOUNT_TO_CONTENT: { [key: number]: AccountItem[] } = {
    0: [
        new AccountItem(0, '支出', 2000, '吃', new Date(Date.now()), '又要长胖了 嘤'),
        new AccountItem(1, '收入', 2000, '工资', new Date(Date.now()), '打工是不可能打工的.....真香!!'),
        new AccountItem(0, '支出', 2123, '吃', new Date(Date.now()), '又要长胖了 嘤'),
        new AccountItem(1, '收入', 20002, '工资', new Date(Date.now()), '打工是不可能打工的.....真香!!'),
    ],
    1: [
        new AccountItem(0, '支出', 2000, '吃', new Date(Date.now()), '又要长胖了 嘤111'),
        new AccountItem(1, '收入', 2000, '工资', new Date(Date.now()), '打工是不可能打工的.....真香!!111'),
        new AccountItem(0, '支出', 2000, '吃', new Date(Date.now()), '又要长胖了 嘤'),
        new AccountItem(1, '收入', 2000, '工资', new Date(Date.now()), '打工是不可能打工的.....真香!!'),
        new AccountItem(0, '支出', 2123, '吃', new Date(Date.now()), '又要长胖了 嘤'),
        new AccountItem(1, '收入', 20002, '工资', new Date(Date.now()), '打工是不可能打工的.....真香!!'),
    ],
    2: [
        new AccountItem(0, '支出', 2000, '吃', new Date(Date.now()), '又要长胖了 嘤'),
        new AccountItem(1, '收入', 2000, '工资', new Date(Date.now()), '打工是不可能打工的.....真香!!'),
    ],
    3: [
        new AccountItem(0, '支出', 2000, '吃', new Date(Date.now()), '又要长胖了 嘤111'),
        new AccountItem(1, '收入', 2000, '工资', new Date(Date.now()), '打工是不可能打工的.....真香!!111'),
    ],
    4: [
        new AccountItem(0, '支出', 2000, '吃', new Date(Date.now()), '又要长胖了 嘤'),
        new AccountItem(1, '收入', 2000, '工资', new Date(Date.now()), '打工是不可能打工的.....真香!!'),
    ],
    5: [
        new AccountItem(0, '支出', 2000, '吃', new Date(Date.now()), '又要长胖了 嘤111'),
        new AccountItem(1, '收入', 2000, '工资', new Date(Date.now()), '打工是不可能打工的.....真香!!111'),
    ]
};


