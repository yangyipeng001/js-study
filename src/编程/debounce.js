/**
 * debounce -> 防抖
 * https://github.com/mqyqingfeng/Blog/issues/22
 * 
 * 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行。
 */

function debounce(func, wait, immediate) {
    var timeout, result;

    var debounced = function () {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);

        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)

            if (callNow) {
                result = func.apply(context, args)
            }
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }

        return result;
    };

    debounced.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}
