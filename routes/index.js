const stockController = require('../controllers/stock');
const testController = require('../controllers/test');
const message = require('../routes/message');
const WaterfallController = require('../controllers//WaterfallController');

const routes = [
    {
        method: 'get',
        path: '/abc/aaaa',
        handler: message.messages
    },
    {
        method: 'get',
        path: '/stock/technicalAnalysis',
        handler: stockController.getMacd
    },
    {
        method: 'get',
        path: '/test/test',
        handler: testController.test
    },
    {
        method: 'get',
        path: '/waterfall/list',
        handler: WaterfallController.list
    }
];

module.exports = routes;