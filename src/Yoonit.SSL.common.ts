// +-+-+-+-+-+-+
// |y|o|o|n|i|t|
// +-+-+-+-+-+-+
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// | Yoonit Camera Plugin for NativeScript applications              |
// | Luigui Delyer, Haroldo Teruya,                                  |
// | Victor Goulart & Márcio Bruffato @ Cyberlabs AI 2020            |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

import {
    CertStoreConfiguration as CertStoreConfigurationDefinition
} from '.';

export abstract class CertStoreConfigurationBase implements CertStoreConfigurationDefinition {
    // GETTERS
    getServiceUrl(): void {};

    getIdentifier(): void {};

    getPeriodicUpdateIntervalMillis(): void {};

    getExpirationUpdateThresholdMillis(): void {};

    getBuild(): void {};
    // BUILDER
    Builder({ url, publicKey }: { url: string, publicKey: string}): void {};

    //SETTER
    setUseChallenge(useChallenge: boolean): void {};

    setIdentifier(identifier: string): void {};

    setPeriodicUpdateIntervalMillis(interval: number): void {};

    setExpirationUpdateThresholdMillis(interval: number): void {};
}

export abstract class CertStoreBase {}