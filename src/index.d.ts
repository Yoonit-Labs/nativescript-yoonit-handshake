// +-+-+-+-+-+-+
// |y|o|o|n|i|t|
// +-+-+-+-+-+-+
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// | Yoonit Camera Plugin for NativeScript applications              |
// | Luigui Delyer, Haroldo Teruya,                                  |
// | Victor Goulart & Márcio Bruffato @ Cyberlabs AI 2020            |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

export declare class CertStoreConfiguration {
    // GETTERS
    getServiceUrl(): void {};

    getIdentifier(): void {};

    getPeriodicUpdateIntervalMillis(): void {}

    getExpirationUpdateThresholdMillis(): void {}
    
    getBuild(): void {}

    getPublicKey(): void {};

    // BUILDER
    Builder({ url, publicKey }: { url: string, publicKey: string }): void {};

    //SETTER
    setUseChallenge(useChallenge: boolean): void {};

    setIdentifier(identifier: string): void {};

    setPeriodicUpdateIntervalMillis(interval: number): void {};

    setExpirationUpdateThresholdMillis(interval: number): void {};
}

export declare class CertStore {}

export abstract class SecureDataStore implements com.wultra.android.sslpinning.SecureDataStore {
    load(key: string): Array<number> {};

    save(data: native.Array<number>, key: string): boolean { return true };

    remove(key: string): void {}
}