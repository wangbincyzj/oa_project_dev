/**********************************************************
 *	跨浏览器通用插件Javascript接口
 *
 * 	使用此JS脚本之前请先仔细阅读帮助文档!
 * 
 * @author		Longmai
 * @version		4.1
 * @date		2016/01/29
 * @explanation	操作系统支持: Windows, Linux, Mac OS
 *				浏览器支持: IE, Firefox, Chrome, Safari, 以及目前市面上使用这些浏览器核心的其它浏览器;
 *              如猎豹，360，QQ, 遨游等等。
 *
**********************************************************/

var _TimerErrorMessage;
var _ExpireUrl;
var _IAWebClient = new IAWebPlugin("IAWebPlugin");

/*******************************************************
*
* 函数名称：IAWebFind()
* 功    能：查找锁。
* 说	明：查找到锁后才能执行后面的函数
* 返	回：返回0代表查找成功。否则失败，可用GetLastError来获取错误码
*
**********************************************************/
function IAWeb_Find() {
    return _IAWebClient.IAWebFind();
}
/*******************************************************
*
* 函数名称：IAWebGetLastError()
* 功    能：获取最后一次错误的错误码
* 说	明：获取最后一次错误码，根据文档或工具来解析错误原因
*
**********************************************************/
function IAWeb_GetLastError() {
    return _IAWebClient.IAWebGetLastError();
}
/*******************************************************
*
* 函数名称：IAWebGetGUID()
* 功    能：获取加密锁唯一ID
* 说	明：必须在查找到锁后调用此函数才能成功
* 返	回：返回加密锁的ID。否则失败，可用GetLastError来获取错误码
*
**********************************************************/
function IAWeb_GetGUID() {
    return _IAWebClient.IAWebGetGUID();
}
/*******************************************************
*
* 函数名称：IAWebOpen(PassWrod)
* 功    能：打开加密锁 ，  PassWrod为加密锁的用户密码
* 说	明：必须在查找到锁后调用此函数才能成功
* 返	回：返回0为成功。否则失败，可用GetLastError来获取错误码
*
**********************************************************/
function IAWeb_Open(PassWrod) {
    return _IAWebClient.IAWebOpen(PassWrod);
}
/*******************************************************
*
* 函数名称：IAWebOpen(PassWrod)
* 功    能：打开加密锁 ，  PassWrod为加密锁的用户密码
* 说	明：必须在查找到锁后调用此函数才能成功
* 返	回：返回0为成功。否则失败，可用GetLastError来获取错误码
*
**********************************************************/
function IAWeb_Close() {
    return _IAWebClient.IAWebClose();
}
/*******************************************************
*
* 函数名称：IAWebMD5(RndStr)
* 功    能：进行客户端的MD5运算 ，  RndStr为随机数
* 说	明：必须在查找到锁并打开后调用此函数才能成功
* 返	回：返回客户端摘要(密文)。否则失败，可用GetLastError来获取错误码
*
**********************************************************/
function IAWeb_MD5(RndStr) {
    return _IAWebClient.IAWebMD5(RndStr);
}
/*******************************************************
*
* 函数名称：IAWebSetUPin(newPwd)
* 功    能：修改加密锁的用户密码，newPwd是需要修改的密码
* 说	明：必须在查找到锁并打开后调用此函数才能成功
* 返	回：返回0为成功。否则失败，可用GetLastError来获取错误码
*
**********************************************************/
function IAWeb_SetUPin(newPwd) {
    return _IAWebClient.IAWebSetUPin(newPwd);
}
/*******************************************************
*
* 函数名称：IAWeb_CheckExist()
* 功    能：检查加密锁是否存在
* 说	明：此方法结合IAWeb_StartCheckTimer方法可用来定时
*           检测加密锁是否存在,不存在即返回到指定页面(
*           _ExpireUrl)
*
**********************************************************/

function IAWeb_CheckExist() {
    var rtn = _IAWebClient.IAWebFind();
    if (rtn != 0) {
        if (_TimerErrorMessage != null) {
            alert(_TimerErrorMessage + "  Error  ");
        }
        window.location = _ExpireUrl;
    }
    return rtn;
}
/*******************************************************
*
* 函数名称：IAWeb_StartCheckTimer()
* 功    能：定时操作方法
* 输    入：interval：时间1000/秒；errMsg：输出的错误信息
*           logonUrl：跳转地址
* 说	明：此方法结合IAWeb_CheckExist方法可用来定时检测加
*           密锁是否存在,不存在即返回到指定页面(_ExpireUrl)
*
**********************************************************/
function IAWeb_StartCheckTimer(interval, errMsg, logonUrl) {
    _TimerErrorMessage = errMsg;
    _ExpireUrl = logonUrl;
    //定时检测
    window.setInterval(IAWeb_CheckExist, interval);
}

/*******************************************************
*
* 函数名称：createElementIAWeb()
* 功    能：自动判断操作系统是X64或X32并自动添加相应的插件
* 说	明：自动判断操作系统是X64或X32并自动添加相应的插件_CLSID为IAWebClinetID
*
**********************************************************/
function createElementIAWeb() {

}
/*******************************************************
*
* 函数名称：DetectIAWebPlugin()()
* 功    能：自动判断是否注册客户端插件
* 说	明：IAWebACTIVEX.IAWebActiveXCtrl.1为IAWebClinet插件注册后的NAME
*
**********************************************************/

function DetectIAWebPlugin() {
    var browser = DetectBrowser();
    if (browser == "IE") {
        return true;
    } else {
        return true;
    }

}

/*******************************************************
*
* 函数名称：DetectBrowser()()
* 功    能：自动判断当前使用浏览器
* 说	明：自动判断浏览器引擎，返回结果为当前浏览器名称
*
**********************************************************/
function DetectBrowser() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    var browser = "Unknown";
    if (Sys.ie) { browser = "IE"; }
    if (Sys.firefox) { browser = "Firefox"; }
    if (Sys.chrome) { browser = "Chrome"; }

    return browser;
}

function IsIE9Above() {
    if (navigator.userAgent.indexOf("Gecko") >= 0) {
        return true;
    }
    else {
        var ua = navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)[1];
        if (parseInt(ua, 10) >= 9)
            return true;
        else
            return false;
    }
}


function IAWebPlugin() {
    var xmlhttp;
    function AjaxIO(json) {
        if (xmlhttp == null) {
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }

        var url = "http://127.0.0.1:60010/IAWeb_Client";
        if ("https:" == document.location.protocol) {
            url = "https://127.0.0.1:60011/IAWeb_Client";
        }
        xmlhttp.open("POST", url, false);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("json=" + json);
    }

    this.IAWebFind = function () {
        //构建JSON
        var json = '{"function":"KeyFindAll"}';

        try {
            AjaxIO(json);
        }
        catch (e) {
            return -3;
        }

        //获取结果
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = eval("(" + xmlhttp.responseText + ")");
            return obj.rtn;
        } else {
            return -2;
        }
    };

    this.IAWebGetLastError = function () {
        var json = '{"function":"KeyGetLastError"}';
        try {
            AjaxIO(json);
        }
        catch (e) {
            return -3;
        }

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = eval("(" + xmlhttp.responseText + ")");
            return obj.errorCode;
        } else {
            return -2;
        }
    };

    this.IAWebGetGUID = function () {
        var json = '{"function":"KeyGetUID"}';
        AjaxIO(json);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = eval("(" + xmlhttp.responseText + ")");
            return obj.guid;
        } else {
            return "";
        }
    };

    this.IAWebOpen = function (keyPassword) {
        var json = '{"function":"KeyOpen", "userPin":"' + keyPassword + '"}';
        AjaxIO(json);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = eval("(" + xmlhttp.responseText + ")");
            return obj.rtn;
        } else {
            return 1;
        }
    };

    this.IAWebMD5 = function (randomStr) {
        var json = '{"function":"KeyMD5", "random":"' + randomStr + '"}';
        AjaxIO(json);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = eval("(" + xmlhttp.responseText + ")");
            return obj.outData;
        } else {
            return "";
        }
    };

    this.IAWebSetUPin = function (userPin) {
        var json = '{"function":"KeySetUserPin","newUserPin":"' + userPin + '"}';
        AjaxIO(json);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = eval("(" + xmlhttp.responseText + ")");
            return obj.rtn;
        } else {
            return 1;
        }
    };

    this.IAWebClose = function () {
        var json = '{"function":"KeyClose"}';
        AjaxIO(json);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = eval("(" + xmlhttp.responseText + ")");
            return obj.rtn;
        } else {
            return 1;
        }
    };
}



export const webClient = {
    IAWebPlugin,
    IAWeb_Find,
    DetectBrowser,
    DetectIAWebPlugin,
    createElementIAWeb,
    IAWeb_GetGUID
}

