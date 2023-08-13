const request = require('request');
const axios = require("axios");

/**
 * @param {number} code 錯誤代碼
 * @param {string} message 錯誤訊息
 * @param {string} fn function name
 * @param {object} result 資料內容
 */
const returnStruct = { code: 4000, message: 'http method faild', fn: '', result: null };

/**
 * @param {string} url 網址及參數
 * @returns 
 */
const HttpGet = async function (url) {
    let _ret = Object.assign({ ...returnStruct, fn: 'HttpGet', code: 4001 }, {});

    const options = {
        url: url,
        method: 'GET',
        headers: {
            // 'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1370.37'
        }
    };

    return new Promise((Y, N) => {

        request(options, function(err, res, body) {

            if (err) {
                // console.log({ ..._ret, message: err.message });
                // return Y(_ret);
                return Y({ ..._ret, result: err });
            }
    
            return Y({ ..._ret, code: 1000, message: 'success', result: body });
        });

    })
}
// async function aaa() {
//     let result = await HttpGet('https://www.wantgoo.com/global/sox');
//     // console.log(result.result);
// }
// aaa();

/**
 * @param {string} url 網址及參數
 * @param {object} request_body 輸入參數
 * @returns 
 */
const HttpPost = async function (url, request_body) {
    let _ret = Object.assign({ ...returnStruct, fn: 'HttpPost', code: 4002 }, {});

    const options = {
        url: url,
        method: 'POST',
        json: true,
        body: request_body
    }
    
    return new Promise((Y, N) => {

        request(options, function(err, res, body) {

            if (err) {
                return Y({ ..._ret, result: err });
            }
    
            return Y({ ..._ret, code: 1000, message: 'success', result: body });
        });

    });
}

const Line = function () {
    // let lineNotify = lineObject('9fN7uSChKQrallKZKZCSpmgxgqQbYwC9PXi7Xlj29PP');
    let _ret = Object.assign({ ...returnStruct, fn: 'Line', code: 4003 }, {});

    const BASE_URL = 'https://notify-api.line.me';

    return {
        
        /**
         * @param {string} token line notify token
         * @param {string} message 傳送訊息
         * @returns 
         */
        send: async (token, param) => {
            const PATH = '/api/notify';
            
            if (!token) {
                return {..._ret, message: 'token is required', code: 1009 };
            }
            if (!param.message) {
                return {..._ret, message: 'message is required', code: 1009};
            }
        
            const options = {
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`,
                },
            };
        
            let lineCb = await axios.post(`${BASE_URL}${PATH}`, param, options);
        
            if (lineCb.data.status !== 200) {
                return {..._ret, result: lineCb.data};
            } else {
                return {..._ret, message: 'success', code: 1000, result: lineCb.data.message};
            }
        }
    }
}

// async function run() {
//     let _test = JSON.stringify(await Line().send('9fN7uSChKQrallKZKZCSpmgxgqQbYwC9PXi7Xlj29PP', {message: 'abc'}));
//     console.log(_test);
//     // await sentByLine('9fN7uSChKQrallKZKZCSpmgxgqQbYwC9PXi7Xlj29PP', {message: _test})
// }
// run();

// const a = (name) => {
//     return {
//         abc: (message) => {
//             console.log(name + ', ' + message);
//         }
//     }
// }

// let bb = a('test').abc('speak');


module.exports = {
    HttpGet: HttpGet,
    HttpPost: HttpPost,
    Line: Line
}

// var axios = require("axios"),
// 	cheerio = require("cheerio"),
// 	url = "https://www.wantgoo.com/global/sox";

// axios.get(url).then(function(res) {
// 	var data = res.data,
// 		$ = cheerio.load(data),
// 		title_thumb_array = [];

// 	$("#HTML8 .item").each(function () {
// 		var $this = $(this),
// 			title = $this.find(".title").text(),
// 			thumbUrl = $this.find(".thumb img").attr("src");

// 		title_thumb_array.push([title, thumbUrl]);
// 	});

// 	console.log(data);
// });

// axios.get(url).then(async resp => {

//     await delay(10000);
    
//     var $ = cheerio.load(resp.data)
//     // var lis = $("#user-repositories-list li")
//     // var repos = []
//     // for (var i = 0; i < lis.length; i++) {
//     //     var li = lis.eq(i)
//     //     var repo = {
//     //         repoName: li.find("h3").text().trim(),
//     //         repoUrl: li.find("h3 a").attr("href").trim(),
//     //         repoDesc: li.find("p").text().trim(),
//     //         language: li.find("[itemprop=programmingLanguage]").text().trim(),
//     //         star: li.find(".muted-link.mr-3").eq(0).text().trim(),
//     //         fork: li.find(".muted-link.mr-3").eq(1).text().trim(),
//     //         forkedFrom: li.find(".f6.text-gray.mb-1 a").text().trim()
//     //     }
//     //     repos.push(repo)
//     // }
//     console.log($.html())
// })


// function delay(time) {
//     return new Promise(function(resolve) { 
//         setTimeout(resolve, time)
//     });
// }