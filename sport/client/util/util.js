function getXhr() {
    let xhr = null;
    let arr = [function () {
        return new XMLHttpRequest;
    }, function () {
        return new ActiveXObject('Microsoft.XMLHTTP');
    }, function () {
        return new ActiveXObject('Msxml2.XMLHTTP');
    }, function () {
        return new ActiveXObject('Msxml3.XMLHTTP');
    }];
    for (let i = 0; i < arr.length; i++) {
        let curXhr = arr[i];
        try {
            xhr = curXhr();
            getXhr = curXhr;
            break;
        } catch (e) {
        }
    }
    if (!xhr) {
        alert('请升级浏览器');
    }
    return xhr;
}
function ajax(options) {
    let _defaultOptions = {
        url: null,
        type: 'GET',
        async: true,
        cache: true,
        data: null,
        dataType: 'text',
        timeout: null,
        success: null,
        error: null
    };
    for (let attr in options) {
        if (options.hasOwnProperty(attr)) {
            _defaultOptions[attr] = options[attr];
        }
    }
    if (_defaultOptions.type.toUpperCase() === 'GET') {
        if (!_defaultOptions.cache && _defaultOptions.url.indexOf('?') > -1) {
            _defaultOptions.url += '_=' + new Date().getTime();
        } else if (!_defaultOptions.cache) {
            _defaultOptions.url += '?_=' + new Date().getTime();
        }
        if (_defaultOptions.data) {
            for (let attr in _defaultOptions.data) {
                if (_defaultOptions.url.indexOf('?') > -1) {
                    _defaultOptions.url += '&' + attr + '=' + _defaultOptions.data[attr];
                } else {
                    _defaultOptions.url += '?' + attr + '=' + _defaultOptions.data[attr];
                }
            }
        }
    }
    let xhr = getXhr();
    xhr.responseType = _defaultOptions.dataType;
    xhr.open(_defaultOptions.type, _defaultOptions.url, _defaultOptions.async);
    xhr.timeout = _defaultOptions.timeout;
    xhr.ontimeout = _defaultOptions.error;
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && /^2\d{2}$/.test(this.status)) {
            typeof _defaultOptions.success === 'function' ? _defaultOptions.success(this.response) : null;
        }
    };
    xhr.send(JSON.stringify(_defaultOptions.data));
}


export {ajax}
