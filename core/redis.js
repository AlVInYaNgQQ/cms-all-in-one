const redis = require('redis');

// const redisClient = redis.createClient(require('../config/connection').redis);

const returnStruct = { code: 3000, message: 'redis faild', fn: '', result: null };



const get = async (key) => {
    let _ret = Object.assign({ ...returnStruct, fn: 'get', code: 2001 }, {});

    return new Promise((Y, N) => {
        redisClient.get(key, (error, result) => {

            if (error) {
                return Y({ ..._ret, result: error });
            }

            _ret.code = 1000;
            _ret.message = 'success';
            _ret.result = result
            return Y(_ret);
        })
    });
};

const set = async (key, value, aliveTime = 60 * 10) => {
    let _ret = Object.assign({ ...returnStruct, fn: 'set', code: 2002 }, {});

    return new Promise((Y, N) => {
        redisClient.set(key, value, 'EX', aliveTime, (error, result) => {

            if (error) {
                return Y({ ..._ret, result: error });
            }

            _ret.code = 1000;
            _ret.message = 'success';
            _ret.result = result
            return Y(_ret);
        })
    });
};

const keys = async () => {
    let _ret = Object.assign({ ...returnStruct, fn: 'keys', code: 2003 }, {});

    return new Promise((Y, N) => {
        redisClient.keys('*', (error, result) => {

            if (error) {
                return Y({ ..._ret, result: error });
            }

            _ret.code = 1000;
            _ret.message = 'success';
            _ret.result = result
            return Y(_ret);
        })
    });
};

// async function aaa () {
//     console.log(await set('test', 'aaaa', 5));
//     console.log(await keys());
//     console.log(await get('test'))
// }

// aaa();


module.exports = redisAccess = {
    get: get,
    set: set,
    keys: keys
};