import { HandshakeBase } from "./Yoonit.Handshake.common";
export declare class YoonitHandshake extends HandshakeBase {
    native: com.yoonit.handshake.Handshake;
    handshakeListener: HandshakeEventListener;
    constructor();
    updateFingerprints(publicKey: string, serviceUrl: string, callback: (result: string) => void): void;
}
declare class HandshakeEventListener extends java.lang.Object implements com.yoonit.handshake.HandshakeListener {
    private owner;
    resultCallback: (result: string) => void;
    static initWithOwner(owner: WeakRef<YoonitHandshake>): HandshakeEventListener;
    continueExecution(): void;
    handleFailedUpdate(type: string, result: string): void;
}
export {};
