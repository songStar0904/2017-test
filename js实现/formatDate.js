
// 题目描述
// 按所给的时间格式输出指定的时间
// 格式说明
// 对于 2014.09.05 13:14:20
// yyyy: 年份，2014
// yy: 年份，14
// MM: 月份，补满两位，09
// M: 月份, 9
// dd: 日期，补满两位，05
// d: 日期, 5
// HH: 24制小时，补满两位，13
// H: 24制小时，13
// hh: 12制小时，补满两位，01
// h: 12制小时，1
// mm: 分钟，补满两位，14
// m: 分钟，14
// ss: 秒，补满两位，20
// s: 秒，20
// w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五
// 示例1
// 输入

// new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'
// 输出

// 2014-09-05 13:14:20 星期五
function formatDate(oDate, sFormation) {
    var o = {
        yyyy: oDate.getFullYear(),
        yy: ('0' + oDate.getFullYear()).slice(-2),
        MM: ('0' + (oDate.getMonth() + 1)).slice(-2),
        M: oDate.getMonth() + 1,
        dd: ('0' + oDate.getDate()).slice(-2),
        d: oDate.getDate(),
        HH: ('0' + oDate.getHours()).slice(-2),
        H: oDate.getHours(),
        hh: ('0' + oDate.getHours() % 12).slice(-2),
        h: oDate.getHours() % 12,
        mm: ('0' + oDate.getMinutes()).slice(-2),
        m: oDate.getMinutes(),
        ss: ('0' + oDate.getSeconds()).slice(-2),
        s: oDate.getSeconds(),
        w: ['日', '一', '二', '三', '四', '五', '六'][oDate.getDay()]
    }
    return sFormation.replace(/[a-z]+/ig, function($1){
        return o[$1];
    });
}