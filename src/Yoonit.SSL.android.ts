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
    CertStoreConfigurationBase,
    CertStoreBase
} from './Yoonit.SSL.common';

export class CertStoreConfiguration extends CertStoreConfigurationBase {
    certStoreConfiguration: com.wultra.android.sslpinning.CertStoreConfiguration.Builder

    // GETTERS
    public getServiceUrl(): java.net.URL {
        return this.certStoreConfiguration.getServiceUrl();
    }

    public getUseChallenge(): boolean {
        return this.certStoreConfiguration.getUseChallenge();
    }

    public getIdentifier(): string {
        return this.certStoreConfiguration.getIdentifier();
    }

    public getPeriodicUpdateIntervalMillis(): number {
        return this.certStoreConfiguration.getPeriodicUpdateIntervalMillis();
    }

    public getExpirationUpdateThresholdMillis(): number {
        return this.certStoreConfiguration.getExpirationUpdateThresholdMillis();
    }

    // Need to be native output to comunicate with CertStore
    public getBuild(): com.wultra.android.sslpinning.CertStoreConfiguration {
        return this.certStoreConfiguration.build();
    }

    // BUILDER
    public Builder({ url, publicKey }: { url: string, publicKey: string}) {
        const nativeUrl = new java.net.URL(url);
        const nativeByteArray = android.util.Base64.decode(publicKey, android.util.Base64.NO_WRAP);

        this.certStoreConfiguration = new com.wultra.android.sslpinning.CertStoreConfiguration.Builder(nativeUrl, nativeByteArray);

        return this;
    }

    // SETTERS
    public setUseChallenge(useChallenge: boolean) {
        this.certStoreConfiguration.useChallenge(useChallenge);

        return this;
    }

    public setIdentifier(identifier: string) {
        this.certStoreConfiguration.identifier(identifier);

        return this;
    }

    public setPeriodicUpdateIntervalMillis(interval: number) {
        this.certStoreConfiguration.periodicUpdateIntervalMillis(interval);

        return this;
    }

    public setExpirationUpdateThresholdMillis(interval: number) {
        this.certStoreConfiguration.expirationUpdateThresholdMillis(interval);

        return this;
    }
}

export declare class CertStore extends CertStoreBase {}