import ModalDrop from "./Drop";
import ModalScan from "./Scan";
import ModalUser from "./UserMenu";

export default function Modals() {
  return (
    <div>
      <ModalUser />
      <ModalDrop />
      <ModalScan />
    </div>
  );
}
