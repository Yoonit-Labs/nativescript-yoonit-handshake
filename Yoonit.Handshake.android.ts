// +-+-+-+-+-+-+
// |y|o|o|n|i|t|
// +-+-+-+-+-+-+
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// | Yoonit Handshake Plugin for NativeScript applications           |
// | Luigui Delyer, Gabriel Rizzo,                                   |
// | Haroldo Teruya & Victor Goulart @ Cyberlabs AI 2020-2021        |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

import * as application from "@nativescript/core/application";
import { HandshakeBase } from "./Yoonit.Handshake.common";
import Result from './Result';

export class YoonitHandshake extends HandshakeBase {

    native: com.yoonit.handshake.Handshake;
    handshakeListener: HandshakeEventListener;

    constructor() {
        super();

        application.on(application.launchEvent, () => {
            let context = application.android.context;
            this.handshakeListener = HandshakeEventListener.initWithOwner(new WeakRef(this));
            this.native = new com.yoonit.handshake.Handshake(context, this.handshakeListener);
        });
    }

    public updateFingerprints(
        publicKey: string,
        serviceUrl: string,
        callback: (result: string) => void
    ): void {
        this.handshakeListener.resultCallback = callback
        this.native.updateFingerprint(publicKey, serviceUrl);
    }
}

@Interfaces([com.yoonit.handshake.HandshakeListener])
@NativeClass
class HandshakeEventListener extends java.lang.Object implements com.yoonit.handshake.HandshakeListener {

    private owner: WeakRef<YoonitHandshake>;
    public resultCallback: (result: string) => void;

    public static initWithOwner(owner: WeakRef<YoonitHandshake>): HandshakeEventListener {
        const listener = new HandshakeEventListener as HandshakeEventListener;
        listener.owner = owner;

        return listener;
    }

    public continueExecution(): void {
        if (!this.resultCallback || !this.owner.get()) {
            return;
        }

        this.resultCallback(Result.OK)
    }

    public handleFailedUpdate(type: string, result: string): void {
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
    }
}