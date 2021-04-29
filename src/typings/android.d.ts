/// <reference path="android-declarations.d.ts"/>

declare namespace com {
	export namespace yoonit {
		export namespace handshake {
			export class BuildConfig {
				public static class: java.lang.Class<com.yoonit.handshake.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public constructor();
			}
					
			export class Handshake {
				public constructor(param0: globalAndroid.Context, param1: com.yoonit.handshake.HandshakeListener)
				public updateFingerprint(param0: string, param1: string);
			}	

			
			export class HandshakeListener {
				public continueExecution()
				public handleFailedUpdate(param0: string, param1: string)
			}			
		}
	}
}
