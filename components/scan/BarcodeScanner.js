import { Component, createRef } from "react";
import { BarcodeScanner } from "dynamsoft-javascript-barcode";
//custom
import "../../dbr";

class BarcodeScannerComponent extends Component {
  constructor(props) {
    super(props);
    this.bDestroyed = false;
    this.pScanner = null;
    this.elRef = createRef();
  }

  async componentDidMount() {
    try {
      let scanner = await (this.pScanner =
        this.pScanner || BarcodeScanner.createInstance());
      if (this.bDestroyed) {
        scanner.destroy();
        return;
      }

      this.elRef.current.appendChild(scanner.getUIElement());
      scanner.onFrameRead = (results) => {
        for (let result of results) {
          const format = result.barcodeFormat
            ? result.barcodeFormatString
            : result.barcodeFormatString_2;
          this.props.appendMessage({
            format,
            text: result.barcodeText,
            type: "result",
          });
          if (result.barcodeText.indexOf("Attention(exceptionCode") !== -1) {
            this.props.appendMessage({
              msg: result.exception.message,
              type: "error",
            });
          }
        }
      };
      await scanner.open();
    } catch (ex) {
      this.props.appendMessage({ msg: ex.message, type: "error" });
      console.error(ex);
  }
}

  async componentWillUnmount() {
    this.bDestroyed = true;
    if (this.pScanner) {
      (await this.pScanner).destroy();
    }
  }
  shouldComponentUpdate() {
    // Never update UI after mount, dbrjs sdk use native way to bind event, update will remove it.
    return false;
  }
  render() {
    return <div className="w-full h-[50vh]" ref={this.elRef}></div>;
  }
}

export default BarcodeScannerComponent;
