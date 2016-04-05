module.exports = transformObject;

function transformObject(obj) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    return doTransform.call(this, obj, args);
}

function doTransform(context, obj, args) {
    var result = {};
    Object.keys(obj).forEach(function(key) {
        var value = obj[key];
        if (typeof value === 'function') {
            value = value.apply((context || obj), args);
        }
        if (typeof value === 'object') {
            value = doTransform(context, value, args);
        }
        if (value) {
            result[key] = value;
        }
    }, this);
    return result;
}