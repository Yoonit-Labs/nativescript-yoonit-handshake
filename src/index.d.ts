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

export interface ResultEventData extends EventData {
    type: string;
    result: string;
}

export declare class Handshake {
    updateFingerprints(publicKey: string, serviceUrl: string): void;

    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);
    on(event: result, callback: (args: ResultEventData) => void, thisArg?: any);
}