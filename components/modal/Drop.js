//custom
import { useData } from "../../context/dataContext";
import { useEffect } from "react";
import { isEmpty } from "../../helpers/utility";

export default function ModalDrop() {
  const { selDrop } = useData();

  const handleCloseModal = () => {
    document.getElementById("trans_modal").checked = false;
  };

  useEffect(() => {
    if (isEmpty(selDrop)) {
      handleCloseModal();
    }
  }, []);

  const BrandName = (name) => {
    switch (name) {
      case "cocacola":
        return "Coca Cola";
      default:
        return name;
    }
  };

  return (
    <div>
      <input type="checkbox" id="trans_modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box pb-20">
          <div className="flex items-center justify-between pb-6">
            <p className="text-lg text-primary font-medium">Drop Off Details</p>
            <label
              htmlFor="trans_modal"
              className="btn btn-sm btn-primary btn-outline btn-circle shadow-md"
            >
              ✕
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full text-primary font-poppins mt-[2vh]">
            <p className="text-gray-400">Name</p>{" "}
            <p className="font-medium">{selDrop?.user?.name}</p>
            <p className="text-gray-400">Phone Number</p>{" "}
            <p className="font-medium">{selDrop?.user?.id}</p>
            <p className="text-gray-400">Points Allocation</p>{" "}
            <p className="font-medium capitalize">{selDrop?.status}</p>
            <p className="text-gray-400">Location</p>{" "}
            <p className="font-medium capitalize">Naivas Location1</p>
            <p className="col-span-2 text-lg font-semibold mt-6 text-gray-400">
              Containers
            </p>
            {selDrop &&
              selDrop?.containers?.length > 0 &&
              selDrop.containers.map((c, i) => (
                <div key={i} className="col-span-2 grid gap-3 grid-cols-2 px-4 py-3 bg-gray-100 capitalize">
                  <p className="font-semibold">
                    <span className="text-xs">{i + 1}.</span>{" "}
                    {BrandName(c.name)}
                  </p>{" "}
                  <p className="text-gray-500">
                    {" "}
                    <span className="font-semibold text-primary">
                      {c.containers}
                    </span>{" "}
                    containers
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
