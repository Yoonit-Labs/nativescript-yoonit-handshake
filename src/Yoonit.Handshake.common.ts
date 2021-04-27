// +-+-+-+-+-+-+
// |y|o|o|n|i|t|
// +-+-+-+-+-+-+
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// | Yoonit Handshake Plugin for NativeScript applications           |
// | Luigui Delyer, Gabriel Rizzo,                                   |
// | Haroldo Teruya & Victor Goulart @ Cyberlabs AI 2020-2021        |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

import { EventData } from '@nativescript/core';
import {
    Handshake as HandshakeDefinition,
    ResultEventData
} from '.';

export abstract class HandshakeBase implements HandshakeDefinition {

    public updateFingerprints(
        publicKey: string,
        serviceUrl: string
    ): void {}
}

export interface HandshakeBase {
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);
    on(event: "result", callback: (args: ResultEventData) => void, thisArg?: any);
}