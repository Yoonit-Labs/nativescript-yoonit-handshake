import '@nativescript/core';
import { HandshakeBase } from "./Yoonit.Handshake.common";
import Result from './Result';
export class YoonitHandshake extends HandshakeBase {
    constructor() {
        super();
        this.native = Handshake.new();
        this.handshakeListener = HandshakeEventListener.initWithOwner(new WeakRef(this));
        this.native.handshakeListener = this.handshakeListener;
    }
    destroy() {
        this.native.handshakeListener = null;
        this.native.owner = null;
    }
    updateFingerprints(publicKey, serviceUrl, callback) {
        this.handshakeListener.resultCallback = callback;
        this.native.updateFingerprints(publicKey, serviceUrl);
    }
}
var HandshakeEventListener = /** @class */ (function (_super) {
    __extends(HandshakeEventListener, _super);
    function HandshakeEventListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandshakeEventListener_1 = HandshakeEventListener;
    HandshakeEventListener.initWithOwner = function (owner) {
        var listener = HandshakeEventListener_1.new();
        listener.owner = owner;
        return listener;
    };
    HandshakeEventListener.prototype.onResult = function (result) {
        if (!this.resultCallback || !this.owner.get()) {
            return;
        }
        switch (result) {
            case HandshakeResult.OK:
                this.resultCallback(Result.OK);
                return;
            case HandshakeResult.STORE_IS_EMPTY:
                this.resultCallback(Result.STORE_IS_EMPTY);
                return;
            case HandshakeResult.NETWORK_ERROR:
                this.resultCallback(Result.NETWORK_ERROR);
                return;
            case HandshakeResult.INVALID_DATA:
                this.resultCallback(Result.INVALID_DATA);
                return;
            case HandshakeResult.INVALID_SIGNATURE:
                this.resultCallback(Result.INVALID_SIGNATURE);
                return;
            case HandshakeResult.INVALID_URL_SERVICE:
                this.resultCallback(Result.INVALID_URL_SERVICE);
                return;
        }
    };
    var HandshakeEventListener_1;
    HandshakeEventListener = HandshakeEventListener_1 = __decorate([
        ObjCClass(HandshakeListener)
    ], HandshakeEventListener);
    return HandshakeEventListener;
}(NSObject));
//# sourceMappingURL=Yoonit.Handshake.ios.js.map