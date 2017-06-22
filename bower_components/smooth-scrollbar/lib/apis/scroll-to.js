'use strict';

var _utils = require('../utils/');

var _smoothScrollbar = require('../smooth-scrollbar');

/**
 * @method
 * @api
 * Scrolling scrollbar to position with transition
 *
 * @param {Number} [x]: scrollbar position in x axis
 * @param {Number} [y]: scrollbar position in y axis
 * @param {Number} [duration]: transition duration
 * @param {Function} [cb]: callback
 */
/**
 * @module
 * @prototype {Function} scrollTo
 */

_smoothScrollbar.SmoothScrollbar.prototype.scrollTo = function () {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.offset.x;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.offset.y;

    var _this = this;

    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var options = this.options,
        offset = this.offset,
        limit = this.limit,
        __timerID = this.__timerID;


    cancelAnimationFrame(__timerID.scrollTo);
    cb = typeof cb === 'function' ? cb : function () {};

    if (options.renderByPixels) {
        // ensure resolved with integer
        x = Math.round(x);
        y = Math.round(y);
    }

    var startX = offset.x;
    var startY = offset.y;

    var disX = (0, _utils.pickInRange)(x, 0, limit.x) - startX;
    var disY = (0, _utils.pickInRange)(y, 0, limit.y) - startY;

    var curveX = (0, _utils.buildCurve)(disX, duration);
    var curveY = (0, _utils.buildCurve)(disY, duration);

    var totalFrame = curveX.length;
    var frame = 0;

    var scroll = function scroll() {
        _this.setPosition(startX + curveX[frame], startY + curveY[frame]);

        frame++;

        if (frame === totalFrame) {
            requestAnimationFrame(function () {
                cb(_this);
            });
        } else {
            __timerID.scrollTo = requestAnimationFrame(scroll);
        }
    };

    scroll();
};