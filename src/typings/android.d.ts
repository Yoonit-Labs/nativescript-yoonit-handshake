/// <reference path="android-declarations.d.ts"/>

declare namespace com {
	export namespace wultra {
		export namespace android {
			export namespace sslpinning {
				export class BuildConfig {
					public static class: java.lang.Class<ai.cyberlabs.yoonit.camera.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
				export class CertStore {
					public static class: java.lang.Class<com.wultra.android.sslpinning.CertStore>;
					public static REQUEST_CHALLENGE_HEADER: string;
					public static RESPONSE_SIGNATURE_HEADER: string;
					public static Companion: com.wultra.android.sslpinning.CertStore.Companion;
					public getCachedData$library_release(): com.wultra.android.sslpinning.model.CachedData;
					public reset(): void;
					public validateFingerprint(param0: string, param1: androidNative.Array<number>): com.wultra.android.sslpinning.ValidationResult;
					public validateCertificate(param0: java.security.cert.X509Certificate): com.wultra.android.sslpinning.ValidationResult;
					public getUpdateType(): com.wultra.android.sslpinning.UpdateType;
					public getInstanceIdentifier(): string;
					public removeValidationObserver(param0: com.wultra.android.sslpinning.ValidationObserver): void;
					public loadCachedData$library_release(): com.wultra.android.sslpinning.model.CachedData;
					public validateCertificateData(param0: string, param1: androidNative.Array<number>): com.wultra.android.sslpinning.ValidationResult;
					public removeAllValidationObservers(): void;
					public constructor(param0: com.wultra.android.sslpinning.CertStoreConfiguration, param1: com.wultra.android.sslpinning.interfaces.CryptoProvider, param2: com.wultra.android.sslpinning.interfaces.SecureDataStore);
					public loadFallbackCertificates$library_release(): androidNative.Array<com.wultra.android.sslpinning.model.CertificateInfo>;
					public constructor(param0: com.wultra.android.sslpinning.CertStoreConfiguration, param1: com.wultra.android.sslpinning.interfaces.CryptoProvider, param2: com.wultra.android.sslpinning.interfaces.SecureDataStore, param3: com.wultra.android.sslpinning.service.RemoteDataProvider);
					public addValidationObserver(param0: com.wultra.android.sslpinning.ValidationObserver): void;
					public getCertificates$library_release(): androidNative.Array<com.wultra.android.sslpinning.model.CertificateInfo>;
					public saveDataToCache$library_release(param0: com.wultra.android.sslpinning.model.CachedData): void;
					public updateCachedData$library_release(param0: kotlin.jvm.functions.Function1<any,com.wultra.android.sslpinning.model.CachedData>): void;
					public update(param0: com.wultra.android.sslpinning.UpdateMode, param1: com.wultra.android.sslpinning.UpdateObserver): void;
				}

				export class CertStoreConfiguration {
					public static class: java.lang.Class<com.wultra.android.sslpinning.CertStoreConfiguration>;
					public getPeriodicUpdateIntervalMillis(): number;
					public getExecutorService(): java.util.concurrent.ExecutorService;
					public getPublicKey(): androidNative.Array<number>;
					public validate$library_release(): void;
					public getExpirationUpdateThresholdMillis(): number;
					public getIdentifier(): string;
					public getServiceUrl(): java.net.URL;
					public getUseChallenge(): boolean;
					public getExpectedCommonNames(): androidNative.Array<string>;
					public getSslValidationStrategy(): com.wultra.android.sslpinning.SslValidationStrategy;
					public getFallbackCertificates(): com.wultra.android.sslpinning.model.GetFingerprintResponse;
					public constructor(param0: java.net.URL, param1: androidNative.Array<number>, param2: boolean, param3: androidNative.Array<string>, param4: string, param5: com.wultra.android.sslpinning.model.GetFingerprintResponse, param6: number, param7: number, param8: java.util.concurrent.ExecutorService, param9: com.wultra.android.sslpinning.SslValidationStrategy);
				}

				export module CertStoreConfiguration {
					export class Builder {
						public static class: java.lang.Class<com.wultra.android.sslpinning.CertStoreConfiguration.Builder>;
						/** @deprecated */
						public fallbackCertificate(param0: com.wultra.android.sslpinning.model.GetFingerprintResponse.Entry): com.wultra.android.sslpinning.CertStoreConfiguration.Builder;
						public useChallenge(param0: boolean): com.wultra.android.sslpinning.CertStoreConfiguration.Builder;
						public getSslValidationStrategy(): com.wultra.android.sslpinning.SslValidationStrategy;
						public identifier(param0: string): com.wultra.android.sslpinning.CertStoreConfiguration.Builder;
						public getExecutorService(): java.util.concurrent.ExecutorService;
						public expirationUpdateThresholdMillis(param0: number): com.wultra.android.sslpinning.CertStoreConfiguration.Builder;
						public fallbackCertificates(param0: com.wultra.android.sslpinning.model.GetFingerprintResponse): com.wultra.android.sslpinning.CertStoreConfiguration.Builder;
						public periodicUpdateIntervalMillis(param0: number): com.wultra.android.sslpinning.CertStoreConfiguration.Builder;
						public constructor(param0: java.net.URL, param1: androidNative.Array<number>);
						public getServiceUrl(): java.net.URL;
						public getPeriodicUpdateIntervalMillis(): number;
						public build(): com.wultra.android.sslpinning.CertStoreConfiguration;
						/** @deprecated */
						public getFallbackCertificate(): com.wultra.android.sslpinning.model.GetFingerprintResponse.Entry;
						public sslValidationStrategy(param0: com.wultra.android.sslpinning.SslValidationStrategy): com.wultra.android.sslpinning.CertStoreConfiguration.Builder;
						public getUseChallenge(): boolean;
						public getPublicKey(): androidNative.Array<number>;
						public getExpirationUpdateThresholdMillis(): number;
						public getIdentifier(): string;
						public getExpectedCommonNames(): androidNative.Array<string>;
						public getFallbackCertificates(): com.wultra.android.sslpinning.model.GetFingerprintResponse;
						public expectedCommonNames(param0: androidNative.Array<string>): com.wultra.android.sslpinning.CertStoreConfiguration.Builder;
						public executorService(param0: java.util.concurrent.ExecutorService): com.wultra.android.sslpinning.CertStoreConfiguration.Builder;
					}
				}
			}
		}
	}
}
