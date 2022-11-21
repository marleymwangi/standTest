//custom
import Html5QrcodePlugin from "./Html5QrcodePlugin";

export default function QrScanner() {
  const onNewScanResult = (decodedText, decodedResult) => {
    // Handle the result here.
    console.log("decodedResult ", decodedResult);
    console.log("decodedText ", decodedText);
  };

  return (
    <div>
      <h1>Html5Qrcode React example!</h1>
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
    </div>
  );
}
