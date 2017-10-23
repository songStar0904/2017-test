// 数组去重
Array.prototype.uniq = function () {
    var result = [], flag = true, i = 0, len = this.length;
    for (; i < len; i++){
        if(result.indexOf(this[i]) === -1){
            if(this[i] !== this[i]){// 排除NAN
                if(flag){
                    flag = false;
                    result.push(this[i]);
                }
            }else{
                result.push(this[i]);
            }
        }
    }
    return result;
}
// 没有考虑NAN
Array.prototype.filterUniq = function () {
    return this.filter(function(item, index, arr){
        return arr.indexOf(item)===index;
    })
}
// es6 也没有考虑到NAN
Array.prototype.setUniq = function () {
    return Array.from(new Set(this));
}