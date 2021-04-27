// +-+-+-+-+-+-+
// |y|o|o|n|i|t|
// +-+-+-+-+-+-+
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// | Yoonit Handshake Plugin for NativeScript applications           |
// | Luigui Delyer, Gabriel Rizzo,                                   |
// | Haroldo Teruya & Victor Goulart @ Cyberlabs AI 2020-2021        |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

import '@nativescript/core';
import { HandshakeBase } from "./Yoonit.Handshake.common";

export class YoonitHandshake extends HandshakeBase {

    native: Handshake;
     handshakeListener: HandshakeEventListener;

    constructor() {
        super();

        this.native = Handshake.new();
        this.handshakeListener = HandshakeEventListener.initWithOwner(new WeakRef(this));
        this.native.handshakeListener = this.handshakeListener;
    }

    destroy(): void {
        this.native.handshakeListener = null;
        (<any>this.native).owner = null;
    }

    public updateFingerprints(
        publicKey: string,
        serviceUrl: string,
        callback: (result: string) => void
    ): void {
        this.handshakeListener.resultCallback = callback;
        this.native.updateFingerprints(publicKey, serviceUrl);
    }
}

@ObjCClass(HandshakeListener)
@NativeClass
class HandshakeEventListener extends NSObject implements HandshakeListener {

    private owner: WeakRef<YoonitHandshake>;
    public resultCallback: (result: string) => void;

    public static initWithOwner(owner: WeakRef<YoonitHandshake>): HandshakeEventListener {
        const listener = HandshakeEventListener.new() as HandshakeEventListener;
        listener.owner = owner;

        return listener;
    }

    public onResult(result: HandshakeResult): void {
        if (this.resultCallback && this.owner.get()) {
            this.resultCallback(result.toString());
        }
    }
}