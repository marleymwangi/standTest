//custom
import { useData } from "../../context/dataContext";
import { useEffect } from "react";
import { isEmpty, brands, productsDict } from "../../helpers/utility";
import Link from "next/link";
import { format, formatDistanceToNow } from "date-fns";

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

  //find brand from brands array using value and return text
  const findBrand = (value) => {
    let brand = brands.find((b) => b.value === value);
    return brand.text;
  };

  //find product from productsDict using value and return text
  const findProduct = (brnd, value) => {
    let product = productsDict[brnd].find((p) => p.value === value);
    return product.text;
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
            <Link href={"/user/profile?id=" + selDrop?.user?.id}>
              <p onClick={handleCloseModal} className="font-medium">
                {selDrop?.user?.name}
              </p>
            </Link>
            <p className="text-gray-400">Phone Number</p>{" "}
            <Link href={"/user/profile?id=" + selDrop?.user?.id}>
              <p onClick={handleCloseModal} className="font-medium">
                {selDrop?.user?.id}
              </p>
            </Link>
            <p className="text-gray-400">Points Allocation</p>{" "}
            <p className="font-medium capitalize">{selDrop?.status}</p>
            <p className="text-gray-400">Location</p>{" "}
            <p className="font-medium capitalize">Quickmart Kilimani</p>
            <p className="text-gray-400">Time</p>{" "}
            <div className="">
              <p className="font-medium text-primary">
                {new Date(selDrop?.timestamp) instanceof Date &&
                  !isNaN(new Date(selDrop?.timestamp)) &&
                  format(new Date(selDrop?.timestamp), "PPp")}
              </p>
              <p className="font-medium text-sm text-primary">
                {new Date(selDrop?.timestamp) instanceof Date &&
                  !isNaN(new Date(selDrop?.timestamp)) &&
                  formatDistanceToNow(new Date(selDrop?.timestamp))}{" "}
                ago
              </p>
            </div>
            <p className="col-span-2 text-lg font-semibold mt-6 text-gray-400">
              Containers
            </p>
            {selDrop &&
              selDrop?.containers?.length > 0 &&
              selDrop.containers.map((c, i) => (
                <div key={i} className="col-span-2 bg-gray-100 capitalize">
                  <div className="flex items-center justify-between px-6">
                    <div className="py-2">
                      {c.op ? (
                        <p className="font-semibold">{c?.product}</p>
                      ) : (
                        <p className="font-semibold">
                          {findProduct(c?.brand, c?.product)}
                        </p>
                      )}
                      {c?.ob ? (
                        <p className="text-sm text-gray-500">{c?.brand}</p>
                      ) : (
                        <p className="text-sm text-gray-500">
                          {findBrand(c?.brand)}
                        </p>
                      )}
                    </div>
                    <p className="font-semibold">{c.containers} Containers</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
