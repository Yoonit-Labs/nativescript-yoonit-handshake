// +-+-+-+-+-+-+
// |y|o|o|n|i|t|
// +-+-+-+-+-+-+
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// | Yoonit Camera Plugin for NativeScript applications              |
// | Luigui Delyer, Gabriel Rizzo,                                   |
// | Haroldo Teruya & Victor Goulart @ Cyberlabs AI 2020-2021        |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

import {
    CertStoreConfiguration as CertStoreConfigurationDefinition,
    SecureDataStore as SecureDataStoreDefinition
} from '.';

export abstract class CertStoreConfigurationBase implements CertStoreConfigurationDefinition {

    // BUILDER
    Builder({ url, publicKey }: { url: string, publicKey: string}): void {}

    // GETTERS
    getServiceUrl(): void {}
    getIdentifier(): void {}
    getPeriodicUpdateIntervalMillis(): void {}
    getExpirationUpdateThresholdMillis(): void {}
    getPublicKey(): void {}
    getBuild(): void {}

    // SETTER
    setUseChallenge(useChallenge: boolean): void {}
    setIdentifier(identifier: string): void {}
    setPeriodicUpdateIntervalMillis(interval: number): void {}
    setExpirationUpdateThresholdMillis(interval: number): void {}
}

export abstract class CertStoreBase {}

export abstract class SecureDataStoreBase implements SecureDataStoreDefinition {
    load(key: string): Array<number> { return [1]; }

    save(data: native.Array<number>, key: string): boolean { return true; }

    remove(key: string): void {}
}