/**
 * @module
 * @prototype {Function} setPosition
 */

import { pickInRange, setStyle } from '../utils/';
import { SmoothScrollbar } from '../smooth-scrollbar';

/**
 * @method
 * @api
 * Set scrollbar position without transition
 *
 * @param {Number} [x]: scrollbar position in x axis
 * @param {Number} [y]: scrollbar position in y axis
 * @param {Boolean} [withoutCallbacks]: disable callback functions temporarily
 */
SmoothScrollbar.prototype.setPosition = function (
    x = this.offset.x,
    y = this.offset.y,
    withoutCallbacks = false,
) {
    this.__hideTrackThrottle();

    const status = {};
    const { options, offset, limit, targets, __listeners } = this;

    if (options.renderByPixels) {
        // ensure resolved with integer
        x = Math.round(x);
        y = Math.round(y);
    }

    if (x !== offset.x) this.showTrack('x');
    if (y !== offset.y) this.showTrack('y');

    x = pickInRange(x, 0, limit.x);
    y = pickInRange(y, 0, limit.y);

    if (x === offset.x && y === offset.y) return;

    status.direction = {
        x: x === offset.x ? 'none' : (x > offset.x ? 'right' : 'left'),
        y: y === offset.y ? 'none' : (y > offset.y ? 'down' : 'up'),
    };

    this.__readonly('offset', { x, y });

    status.limit = { ...limit };
    status.offset = { ...this.offset };

    // reset thumb position after offset update
    this.__setThumbPosition();

    setStyle(targets.content, {
        '-transform': `translate3d(${-x}px, ${-y}px, 0)`,
    });

    // invoke all listeners
    if (withoutCallbacks) return;

    __listeners.forEach((fn) => {
        if (options.syncCallbacks) {
            fn(status);
        } else {
            requestAnimationFrame(() => {
                fn(status);
            });
        }
    });
};
