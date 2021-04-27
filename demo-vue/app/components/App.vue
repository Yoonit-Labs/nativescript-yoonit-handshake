<template>
  <Page @loaded="onLoaded">
    <ActionBar title="Yoonit Camera"/>
      <StackLayout>
        <FlexboxLayout flexDirection="row">
          <StackLayout orientation="horizontal">
            <Button
              text="Update Fingerprint"
              horizontalAlignment="left"
              @tap="updateFingerprint"
            />
          </StackLayout>
        </FlexboxLayout>
        <Label text="OEW" />
      </StackLayout>
  </Page>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    async onLoaded() {
      console.log(this.$yoo.handshake.updateFingerprints)
    },
    updateFingerprint() {
      this.$yoo.handshake.updateFingerprints(
          "BEcTK0YpgYom5ifxUyX5yKDNUBaaLQpWxU361n+ihb5EAnKvABWde1P6lnZR3CR9ykrTLrO0ANdivFabS20iGOA=",
          "https://y9ggj3nnv8.execute-api.us-east-1.amazonaws.com/v1/sslpinning"
      );
    }
  },
}
</script>

<style scoped>
ActionBar {
  background-color: #000000;
  color: #ffffff;
}
Label {
  font-size: 14;
  color: #ffffff;
}
Button {
  padding: 8 12;
  color: #333333;
  background-color: lightgray;
  border-radius: 8;
  margin: 8 0 8 12;
}
</style>
