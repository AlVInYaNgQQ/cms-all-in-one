const {
    db_book_config
} = require('../config/connection')

const mysql = require('mysql');
const returnStruct = { code: 2000, message: 'database faild', count: 0, fn: '', result: null };

// const db_book = mysql.createPool({
//     // ...clientOpts,
//     host: db_book_config.host,
//     user: db_book_config.user, // e.g. 'my-db-user'
//     password: db_book_config.password, // e.g. 'my-db-password'
//     database: db_book_config.database, // e.g. 'my-database'
//     socketPath: (process.env.IS_CLOUD ? '/cloudsql/woven-sequence-389701:us-west1:cms-main' : undefined), // e.g. '/cloudsql/project:region:instance'
// });
const db_book = mysql.createPool(db_book_config);


/**
 * @param {*} pool database 連線
 * @param {string} sql sp 名稱 or sql 語法
 * @param {array} para 陣列參數
 * @returns 
 */
const query = function (pool, sql, para) {
    let _ret = Object.assign({ ...returnStruct, fn: 'query', code: 2099 }, {});

    return new Promise((Y, N) => {
        pool.getConnection(function (error, connection) {
            
            if (error) {
                console.warn(error);
                if (connection) connection.release();
                return Y({ ..._ret, result: error });
            }

            connection.query(sql, para, (err, result,) => {
                if (connection) connection.release();

                if (error) {
                    return Y({ ..._ret, result: err });
                } else if (result && [...result].length < 0) {
                    return Y({ ..._ret, message: 'Data not found', code: 2097, result: result });
                }

                _ret.code = 1000;
                _ret.count = [...result].length;
                _ret.message = 'Success';
                _ret.result = result
                return Y(_ret);
            });
        });
    });
};

    
// query(db_book, 'select * from Waterfall limit 100;', []).then(v => {
//     console.log('v: ' + JSON.stringify(v));
// });

module.exports = database = {
    query,
    db_book,
}
