import '@nativescript/core';
import { HandshakeBase } from "./Yoonit.Handshake.common";
export declare class YoonitHandshake extends HandshakeBase {
    native: Handshake;
    handshakeListener: HandshakeEventListener;
    constructor();
    destroy(): void;
    updateFingerprints(publicKey: string, serviceUrl: string, callback: (result: string) => void): void;
}
declare class HandshakeEventListener extends NSObject implements HandshakeListener {
    private owner;
    resultCallback: (result: string) => void;
    static initWithOwner(owner: WeakRef<YoonitHandshake>): HandshakeEventListener;
    onResult(result: HandshakeResult): void;
}
export {};
