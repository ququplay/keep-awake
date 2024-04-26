var capacitorKeepAwake = (function (exports, core) {
    'use strict';

    const KeepAwake = core.registerPlugin('KeepAwake', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.KeepAwakeWeb()),
    });

    class KeepAwakeWeb extends core.WebPlugin {
        constructor() {
            super(...arguments);
            this.wakeLock = null;
            this._isSupported = 'wakeLock' in navigator;
        }
        async keepAwake() {
            if (!this._isSupported) {
                this.throwUnsupportedError();
            }
            if (this.wakeLock) {
                await this.allowSleep();
            }
            this.wakeLock = await navigator.wakeLock.request('screen');
        }
        async allowSleep() {
            var _a;
            if (!this._isSupported) {
                this.throwUnsupportedError();
            }
            (_a = this.wakeLock) === null || _a === void 0 ? void 0 : _a.release();
            this.wakeLock = null;
        }
        async isSupported() {
            const result = {
                isSupported: this._isSupported,
            };
            return result;
        }
        async isKeptAwake() {
            if (!this._isSupported) {
                this.throwUnsupportedError();
            }
            const result = {
                isKeptAwake: !!this.wakeLock,
            };
            return result;
        }
        throwUnsupportedError() {
            throw this.unavailable('Screen Wake Lock API not available in this browser.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        KeepAwakeWeb: KeepAwakeWeb
    });

    exports.KeepAwake = KeepAwake;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
