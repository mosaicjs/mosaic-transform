var d3_scale = require('d3-scale');

module.exports = transform;

function transform(domain, range, transform) {
    var d, t, r;
    function f(val) {
        return r(t(d(val)));
    }
    function prepare(n) {
        var result = [];
        var len = (n.length || 1);
        var step = 1 / len;
        for (var i = 0; i < len; i++) {
            result.push(step * i);
        }
        result[len - 1] = 1;
        return result;
    }
    f.domain = function(_) {
        if (!_)
            return domain;
        domain = _;
        d = d3_scale.scaleLinear().clamp(true).domain(_).range(prepare(_));
        return f;
    }
    f.range = function(_) {
        if (!_)
            return range;
        range = _;
        r = d3_scale.scaleLinear().clamp(true).domain(prepare(_)).range(_);
        return f;
    }
    f.transform = function(_) {
        if (!_)
            return t;
        t = _;
        return f;
    }
    domain = domain || [ 0, 1 ];
    range = range || [ 0, 1 ];
    transform = transform || function(_) {
        return +_;
    };
    return f.domain(domain).transform(transform).range(range);
}
