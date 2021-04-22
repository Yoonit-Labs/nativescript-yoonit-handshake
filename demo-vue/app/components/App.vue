<template>
  <Page @loaded="onLoaded">
  </Page>
</template>

<script>
import { CertStoreConfiguration, SecureDataStore } from '@yoonit/nativescript-handshake'

  export default {
    data: () => ({
    }),

    methods: {
      async onLoaded() {
        const certStoreConfig = new CertStoreConfiguration()
        const secureStore = new SecureDataStore()

        certStoreConfig.Builder({
          url: 'https://www.cyberlabs.ai',
          publicKey: 'cyberlabson'
        })
        .setUseChallenge(true)
        .setIdentifier('teste')
        .setPeriodicUpdateIntervalMillis(2000)
        .setExpirationUpdateThresholdMillis(2000)

        secureStore.save(certStoreConfig.getPublicKey(), 'cyberlabs key')

        console.log('======= secure load ======', secureStore.load('cyberlabs key'))
        console.log('[YooWultra] URL', certStoreConfig.getServiceUrl())
        console.log('[YooWultra] useChallenge', certStoreConfig.getUseChallenge())
        console.log('[YooWultra] getPeriodicUpdateIntervalMillis', certStoreConfig.getPeriodicUpdateIntervalMillis())
        console.log('[YooWultra] getExpirationUpdateThresholdMillis', certStoreConfig.getExpirationUpdateThresholdMillis())
        console.log('[YooWultra] publicKey', certStoreConfig.getPublicKey() === certStoreConfig.getPublicKey())
        console.log('[YooWultra] Config build', certStoreConfig.getBuild())
      }
    }
  }
</script>

<style scoped>
</style>
