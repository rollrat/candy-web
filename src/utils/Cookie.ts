// https://stackoverflow.com/questions/5968196/how-do-i-check-if-a-cookie-exists
export function getCookie(name: string) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin === -1) {
    begin = dc.indexOf(prefix);
    if (begin !== 0) return null;
  }

  begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end === -1) {
    end = dc.length;
  }
  
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
}