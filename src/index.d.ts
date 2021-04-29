// +-+-+-+-+-+-+
// |y|o|o|n|i|t|
// +-+-+-+-+-+-+
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// | Yoonit Handshake Plugin for NativeScript applications           |
// | Luigui Delyer, Gabriel Rizzo,                                   |
// | Haroldo Teruya & Victor Goulart @ Cyberlabs AI 2020-2021        |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

export declare class Handshake {
    updateFingerprints(
        publicKey: string,
        serviceUrl: string,
        result: (result: string) => void
    ): void;
}
