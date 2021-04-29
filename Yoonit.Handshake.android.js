import * as application from "@nativescript/core/application";
import { HandshakeBase } from "./Yoonit.Handshake.common";
import Result from './Result';
export class YoonitHandshake extends HandshakeBase {
    constructor() {
        super();
        application.on(application.launchEvent, () => {
            let context = application.android.context;
            this.handshakeListener = HandshakeEventListener.initWithOwner(new WeakRef(this));
            this.native = new com.yoonit.handshake.Handshake(context, this.handshakeListener);
        });
    }
    updateFingerprints(publicKey, serviceUrl, callback) {
        this.handshakeListener.resultCallback = callback;
        this.native.updateFingerprint(publicKey, serviceUrl);
    }
}
var HandshakeEventListener = /** @class */ (function (_super) {
    __extends(HandshakeEventListener, _super);
    function HandshakeEventListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandshakeEventListener_1 = HandshakeEventListener;
    HandshakeEventListener.initWithOwner = function (owner) {
        var listener = new HandshakeEventListener_1;
        listener.owner = owner;
        return listener;
    };
    HandshakeEventListener.prototype.continueExecution = function () {
        if (!this.resultCallback || !this.owner.get()) {
            return;
        }
        this.resultCallback(Result.OK);
    };
    HandshakeEventListener.prototype.handleFailedUpdate = function (type, result) {
        if (!this.resultCallback || !this.owner.get()) {
            return;
        }
        switch (result) {
            case Result.OK:
                this.resultCallback(Result.OK);
                return;
            case Result.STORE_IS_EMPTY:
                this.resultCallback(Result.STORE_IS_EMPTY);
                return;
            case Result.NETWORK_ERROR:
                this.resultCallback(Result.NETWORK_ERROR);
                return;
            case Result.INVALID_DATA:
                this.resultCallback(Result.INVALID_DATA);
                return;
            case Result.INVALID_SIGNATURE:
                this.resultCallback(Result.INVALID_SIGNATURE);
                return;
            case Result.INVALID_URL_SERVICE:
                this.resultCallback(Result.INVALID_URL_SERVICE);
                return;
        }
    };
    var HandshakeEventListener_1;
    HandshakeEventListener = HandshakeEventListener_1 = __decorate([
        Interfaces([com.yoonit.handshake.HandshakeListener])
    ], HandshakeEventListener);
    return HandshakeEventListener;
}(java.lang.Object));
//# sourceMappingURL=Yoonit.Handshake.android.js.map