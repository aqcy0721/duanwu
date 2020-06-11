export const commonParams = {
}
export const options = {
}

export const ERR_OK = 1

function getparam(urlStr, paras) {
  var url = urlStr;
  var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
  var paraObj = {};
  var i;
  var j;
  for (i = 0; j = paraString[i]; i++) {
    paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length)
  }
  var returnValue = paraObj[paras.toLowerCase()];
  if (typeof(returnValue) === "undefined") {
    return "";
  } else {
    return returnValue;
  }
}
export const domain = getparam(window.location.href,'openid');
