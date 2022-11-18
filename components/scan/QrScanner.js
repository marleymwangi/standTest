import React from "react";
//custom
import Html5QrcodePlugin from "./Html5QrcodePlugin";

class QrScanner extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Html5Qrcode React example!</h1>
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={this.onNewScanResult}
        />
      </div>
    );
  }

  onNewScanResult(decodedText, decodedResult) {
    // Handle the result here.
    console.log("decodedResult ", decodedResult);
    console.log("decodedText ", decodedText);
  }
}

export default QrScanner;
