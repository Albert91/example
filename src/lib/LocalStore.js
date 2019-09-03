export default class LocalStore {
  static setCookie(key, value) {
    let date = new Date();
    let time = date.getTime();
    let expireTime = time + 1000 * 60 * 60 * 24 * 365 * 10;

    date.setTime(expireTime);
    document.cookie = `${key}=${value};expires=${date.toGMTString()};path=/`;
  }

  static readCookie(key) {
    let params = {};
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      let current_cookies = cookies[i].split("=");
      params[current_cookies[0]] = current_cookies[1];
    }

    return params[key];
  }
}
