<template>
  <Page>
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
      <Label text="Update Fingeprint request result:" />
      <Label :text="updateRequestResult" />
      <Label :text="updateRequestDescription" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data: () => ({
    updateRequestResult: "-",
    updateRequestDescription: "-"
  }),
  methods: {
    updateFingerprint() {
      this.$yoo.handshake.updateFingerprints(
        "BEcTK0YpgYom5ifxUyX5yKDNUBaaLQpWxU361n+ihb5EAnKvABWde1P6lnZR3CR9ykrTLrO0ANdivFabS20iGOA=",
        "https://y9ggj3nnv8.execute-api.us-east-1.amazonaws.com/v1/sslpinning",
        (result) => {
          switch (result) {
            case "OK":
              this.updateRequestResult = "OK"
              this.updateRequestDescription = "- Everything is OK;\n- No action is required;"
              return

            case "STORE_IS_EMPTY":
              this.updateRequestResult = "STORE_IS_EMPTY"
              this.updateRequestDescription = "- The update request succeeded;\n- Result is still an empty list of certificates;\n- May loading & validating of remote data succeeded;\n- All loaded certificates are already expired;"
              return

            case "NETWORK_ERROR":
              this.updateRequestResult = "NETWORK_ERROR"
              this.updateRequestDescription = "- The update request failed on a network communication."
              return

            case "INVALID_DATA":
              this.updateRequestResult = "INVALID_DATA"
              this.updateRequestDescription = "The update request returned the data which did not pass the sifnature validation."
              return

            case "INVALID_SIGNATURE":
              this.updateRequestResult = "INVALID_SIGNATURE"
              this.updateRequestDescription = "The update request returned the data which did not pass the signature validation."
              return

            case "INVALID_URL_SERVICE":
              this.updateRequestResult = "INVALID_URL_SERVICE"
              this.updateRequestDescription = "The url service does not exist or is invalid."
              return
          }
        }
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
  margin: 8 0 8 12;
  font-size: 14;
  color: #000000;
}
Button {
  padding: 8 12;
  color: #333333;
  background-color: lightgray;
  border-radius: 8;
  margin: 8 0 8 12;
}
</style>
