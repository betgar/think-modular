define('math', ['underscore'], function (_) {
    var isNumber = _.isNumber;

    return {
        add: function (a, b) {
            if (!isNumber(a) || !isNumber(b)) return 0;
            return a + b;
        },
        random: _.random,
        max: _.max,
        min: _.min,
    }
});