
const baseUrl = 'https://www.yinkaiyan.cn';
//const baseUrl = 'https://www.yinkaiyan.cn/images/static';
//验证手机
const isPoneAvailable=function(val) {
    var myreg=/^\d{11}$/;
    if (!myreg.test(val)) {
        return false;
    } else {
        return true;
    }
};
//获取链接后参数
const getUrlKey=function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
};
//获取cooke
const getCookie=function(cookie_name) {
    var allcookies = document.cookie;
    var cookie_pos = allcookies.indexOf(cookie_name);
    if (cookie_pos != -1) {
        cookie_pos = cookie_pos + cookie_name.length + 1; 
        var cookie_end = allcookies.indexOf(";", cookie_pos);
        if (cookie_end == -1) {
            cookie_end = allcookies.length;
        };
        var value = unescape(allcookies.substring(cookie_pos, cookie_end)); 
    };
    return value;
}
//生成uuid
const setUuid=function() {
    var s = [];
    var hexDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    };
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid; 
}
//时间戳转时间
const getNowFormatDate=function() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hh = now.getHours();
    var mm = now.getMinutes();
    var s = now.getSeconds();
    var clock = year + "-";
    if(month < 10)clock += "0";clock += month + "-";
    if(day < 10)clock += "0";clock += day + " ";
    if(hh < 10)clock += "0";clock += hh + ":";
    if (mm < 10) clock += '0';clock += mm+":";
    if (s < 10) clock += '0';clock += s;
    return clock;
};
//过滤特殊字符，表情
const substringFun=function(substring){
    if(substring){
        var reg = new RegExp("[~#^$@%&!?%*]", 'g');
        if (substring.match(reg)) {
            return true;
        }
        for ( var i = 0; i < substring.length; i++) {
            var hs = substring.charCodeAt(i);
            if (0xd800 <= hs && hs <= 0xdbff) {
                if (substring.length > 1) {
                    var ls = substring.charCodeAt(i + 1);
                    var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                    if (0x1d000 <= uc && uc <= 0x1f77f) {
                        return true;
                    }
                }
            } else if (substring.length > 1) {
                var ls = substring.charCodeAt(i + 1);
                if (ls == 0x20e3) {
                    return true;
                }
            } else {
                if (0x2100 <= hs && hs <= 0x27ff) {
                    return true;
                } else if (0x2B05 <= hs && hs <= 0x2b07) {
                    return true;
                } else if (0x2934 <= hs && hs <= 0x2935) {
                    return true;
                } else if (0x3297 <= hs && hs <= 0x3299) {
                    return true;
                } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
                    || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
                    || hs == 0x2b50) {
                    return true;
                }
            }
        }
    }
};
export {
    baseUrl,
    isPoneAvailable,
    getUrlKey,
    getCookie,
    setUuid,
    getNowFormatDate,
    substringFun,
};