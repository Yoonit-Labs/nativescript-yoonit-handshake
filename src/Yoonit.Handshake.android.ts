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

    native: ai.cyberlabs.yoonit.yoonit.Handshake;

    constructor() {
        super();
        this.native = new ai.cyberlabs.yoonit.yoonit.Handshake(android.content.Context);
    }

    public updateFingerprints(
        publicKey: string,
        serviceUrl: string,
        callback: (result: string) => void
    ): void {
        this.native.updateFingerprint(publicKey, serviceUrl, callback);
    }
}