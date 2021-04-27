/// <reference path="android-declarations.d.ts"/>

declare namespace ai {
	export namespace cyberlabs {
		export namespace yoonit {
			export namespace yoonit {
				export namespace Handshake {
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
				}

				export class Handshake {
					public constructor(param0: globalAndroid.Context)
					public updateFingerprint(param0: string, param1: string, param2: (result: string) => void);
				}
			}
		}
	}
}
