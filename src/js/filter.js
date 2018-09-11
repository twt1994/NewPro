import Vue from 'vue'
//过滤器

//检测是否为空
Vue.filter('isZore', function(value) {
  if (value==undefined) {
    return 0;
  }else{
    return value;
  }
});

//去除余额.00
Vue.filter('removeZore', function(value) {
  if (value.substr(-3)==".00") {
    return value.replace(".00", "");
  }else{
    return value;
  }
});

//判断性别
Vue.filter('isSex', function(value) {
    if (value=="男") {
        return 1;
    }else if(value=="女"){
        return 2;
    }else{
        return 9;
    }
});

//日期格式化
Vue.filter('datetimeFormat', (timestamp, fmt) => {
    let date = new Date(timestamp * 1000);
    if (fmt === undefined) {
        fmt = 'yyyy-MM-dd hh:mm:ss';
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            str = ('00' + str).substr(str.length);
            fmt = fmt.replace(RegExp.$1, str);
        }
    }
    return fmt;
});
