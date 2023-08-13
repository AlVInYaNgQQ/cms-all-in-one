const { 
    query,
    db_book,
} = require('../core/database');
const redis = require('../core/redis');
const test = require('../core/test');

const {
    Line,
    HttpGet
} = require('../core/external');

const returnStruct = { code: 9000, message: 'stock Controller faild', fn: '', result: null };

exports.getMacd = async function (req, res, next) {
    let ret = Object.assign({ ...returnStruct, fn: 'getMacd', code: 9000 }, {});

    if (Object.entries(req.query).length <= 0) return res.json({ ...ret, code: 1009, message: 'param not found.' });

    const {
        stockno: _stockNo = 'BRENTOIL',
        days: _days,
        notify: _notify,
    } = req.query;

    if (_days <= 0) return res.json({ ...ret, code: 1009, message: 'days not found.' });
    else if (_days > 50) return res.json({ ...ret, code: 1009, message: 'The number of days is in the range 1 ~ 50' });

    let technicalAnalysis = await HttpGet(`https://histock.tw/stock/chip/chartdata.aspx?no=${_stockNo}&days=${_days}&m=macd,k9,d9`);

    try {
        let _data = JSON.parse(technicalAnalysis.result);

        Object.keys(_data).forEach(key => {
            // console.log(JSON.parse(_data[key]));
            _data[key] = JSON.parse(_data[key]);
        });

        let _tmp = { MACD: [], KD: [] };

        let _tmpMACD = _data.MACD.length > 0 ? _data.MACD : [];
        let _tmpK9 = _data.K9.length > 0 ? _data.K9 : [];
        let _tmpD9 = _data.D9.length > 0 ? _data.D9 : [];

        for (let i = 0; i < _tmpMACD.length; i++) {

            _tmp.MACD.push({
                date: new Date(_tmpMACD[i][0]).toISOString().replace('00:00:00.000', ''),
                value: _tmpMACD[i][1]
            });

            _tmp.KD.push({
                date: new Date(_tmpK9[i][0]).toISOString().replace('00:00:00.000', ''),
                k: _tmpK9[i][1],
                d: _tmpD9[i][1],
                direct: _tmpK9[i][1] > _tmpD9[i][1] ? 1 : -1
            });
        }

        technicalAnalysis.result = _tmp;
    } catch (e) { console.error(e) }

    if (_notify) Line().send('9fN7uSChKQrallKZKZCSpmgxgqQbYwC9PXi7Xlj29PP', { message: JSON.stringify({ stockno: _stockNo, data: technicalAnalysis }) });

    // console.log('technicalAnalysis', technicalAnalysis);

    return res.json({ ...ret, code: 1000, message: 'success', result: technicalAnalysis.result }).end();
}
