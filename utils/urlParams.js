/**
 * @function getUrlParam
 * @description 获取URL上的参数
 * @param {*} key
 * @param {*} search
 * @returns {string|object}
 */
export function getUrlParam(key, search){
    const reSearch = /(?:[?&])(\w+)=([^#&\s]*)/g;

    if (!search) {
        search = window.location.search;
    }

    if (search.charAt(0) !== '?') {
        search = `?${search}`;
    }

    const temp = {};

    search.replace(reSearch, (a, f, s) => {
        temp[f] = decodeURIComponent(s);
    });
    if (key && temp[key]) {
        return temp[key];
    }

    return temp;
}

/**
 * URL增加查询参数
 * @param url
 * @param externalParams 要增加的查询参数的K-V对象
 * @returns URL string
 */
export function addUrlParam (url, externalParams){
    url = url || window.location.href

    for (let key in externalParams) {
        let value = encodeURIComponent(externalParams[key])
        let urlInfo = url.split('?')
        let paramStr = urlInfo[1]
        let tmp = key + '=' + value
        let reg = new RegExp('(^|)' + key + '=([^&]*)(|$)')

        if (value !== undefined && value !== null) {
            if (url.match(reg) != null) {
                url = url.replace(reg, tmp)
            } else if (paramStr !== undefined) {
                url += '&' + key + '=' + value
            } else {
                url += '?' + key + '=' + value
            }
        }
    }
    return url
}
