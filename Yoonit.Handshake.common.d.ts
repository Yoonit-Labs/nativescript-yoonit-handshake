import { Handshake } from './index';
export declare abstract class HandshakeBase implements Handshake {
    updateFingerprints(publicKey: string, serviceUrl: string, result: (result: string) => void): void;
}
