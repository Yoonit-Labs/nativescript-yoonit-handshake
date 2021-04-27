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
    CertStoreConfigurationBase,
    CertStoreBase,
    SecureDataStoreBase
} from './Yoonit.SSL.common';

import {
    ApplicationSettings
  } from '@nativescript/core';

export class CertStoreConfiguration extends CertStoreConfigurationBase {
    certStoreConfiguration: com.wultra.android.sslpinning.CertStoreConfiguration.Builder;

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

    public getPublicKey(): Array<number> {
        return this.certStoreConfiguration.getPublicKey();
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

export class SecureDataStore extends SecureDataStoreBase {

    public save(data: native.Array<number>, key: string): boolean {
        const object = {
            data: data
        };

        ApplicationSettings.setString(key, JSON.stringify(object));

        return true;
    }

    public load(key: string): Array<number> {
        console.log(
            '========= here ========',
            JSON.parse(ApplicationSettings.getString(key)).data
        );

        return JSON.parse(ApplicationSettings.getString(key)).data;
    }

    public remove(key: string): void {
        return ApplicationSettings.remove(key);
    }
}