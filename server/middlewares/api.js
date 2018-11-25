const bodyParser = require('body-parser');

const products = [
  {
    _id: 1,
    name: 'product 1',
    sku: 'UIFDES',
    description: 'Product 1 Description',
    price: 23,
    images: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535901305&di=13a7a1a0d20bb16f1db879b64a1077ec&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.ooopic.com%2F16%2F25%2F80%2F16258007-15f757db3f6e805807a61135adfadced-0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535901349&di=d690fe455a9c4b15e59484911f2d4ad7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F03123f85664a9630000017d14beb61e.jpg',
    ],
  },
  {
    _id: 2,
    name: 'product 2',
    sku: 'UIFDES',
    description: 'Product 2 Description',
    price: 25,
    images: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535901305&di=13a7a1a0d20bb16f1db879b64a1077ec&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.ooopic.com%2F16%2F25%2F80%2F16258007-15f757db3f6e805807a61135adfadced-0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535901349&di=d690fe455a9c4b15e59484911f2d4ad7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F03123f85664a9630000017d14beb61e.jpg',
    ],
  },
  {
    _id: 3,
    name: 'product 3',
    sku: 'UIFDES',
    description: 'Product 3 Description',
    price: 55,
    images: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535901305&di=13a7a1a0d20bb16f1db879b64a1077ec&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.ooopic.com%2F16%2F25%2F80%2F16258007-15f757db3f6e805807a61135adfadced-0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535901349&di=d690fe455a9c4b15e59484911f2d4ad7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F03123f85664a9630000017d14beb61e.jpg',
    ],
  },
];

module.exports = app => {
  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    );
    // Request headers you wish to allow
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type, Authorization',
    );

    // Pass to next layer of middleware
    next();
  });

  app.use(bodyParser.json());

  app.get('/api/products', (req, res) => {
    res.json(products);
  });
};
