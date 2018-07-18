//API
//signup/signin/signout/password recovery/delete
//transactions: send
//deals: confirm
//

let members = [
    {
        id: 0,
        name: 'sst',
        wallet: 100
    },
    {
        id: 1,
        name: '1',
        wallet: 1,
        referrer: void 0
    },
    {
        id: 2,
        name: '2',
        wallet: 2,
        referrer: void 0
    },
    {
        id: 3,
        name: '3',
        wallet: 3,
        referrer: void 0
    },
    {
        id: 4,
        name: '4',
        wallet: 4,
        referrer: void 0
    },
    {
        id: 5,
        name: 'fst',
        wallet: 5,
        referrer: 4
    }, 
    {
        id: 6,
        name: 'scd',
        wallet: 6,
        referrer: 4
    }, 
];

let products = [
    {
        id: 1,
        name: 'donate',
        schema: {
            maxCount: 1,
            distribution: { //gnerate cost when save
                list: [
                    {
                        name: 'Разделение',
                        list_id: 'parent', //list_id: 'parent|self|id',
                        postion: '2..6',//postion: '1..6|1,2..5',
                        sum: 5, //sum: number 
                    },
                    {
                        name: 'Разделение',
                        list_id: 'parent',
                        postion: '7',
                        sum: 15,
                    },
                    {
                        name: 'Разделение',
                        list_id: 'parent',
                        postion: '1',
                        sum: 10,
                    }
                ],
                wallets: [
                    {
                        name: 'Клубный взнос',
                        wallet_id: 100,
                        sum: 15
                    },
                    {
                        name: 'Обслуживание',
                        wallet_id: 100,
                        sum: 10
                    }
                ] 
            }
        },
    },
    {
        id: 2,
        name: 'landing',
        schema: {
            maxCount: 5,
            distribution: {
                wallets: [
                    {
                        name: 'Стоимость',
                        wallet_id: 100,
                        sum: 10
                    }
                ] 
            }
        }
    },
    {
        id: 3,
        name: 'automat',
        schema: {
            maxCount: 400,
            distribution: {
                wallets: [
                    {
                        name: 'Стоимость',
                        wallet_id: 100,
                        sum: 10
                    }
                ] 
            }
        }
    }
];

let deals = [
    {
        id: 1,
        date: 1913453549911,
        products: [
            {
                product_id: 1,
                qty: 1
            }
        ]
    },
    {
        id: 2,
        date: 191456569911,
        products: [
            {
                product_id: 2,
                qty: 2,
                cost: 10
            }
        ]
    }
];

let lists = [
    {
        id: 1,
        members: [
            {
                member_id: 1,
                position: 7
            },
            {
                member_id: 2,
                position: 6
            },
            {
                member_id: 3,
                position: 5
            },
            {
                member_id: 4,
                position: 4
            },
        ],
        default: true
    },
    {
        id: 2,
        root: 5,
        members: [5, 1, 2, 3]
    },
    {
        id: 3,
        root: 6,
        memebers: [6, 5, 1, 2]
    }
];
