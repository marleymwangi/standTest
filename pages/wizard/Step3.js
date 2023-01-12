import { useEffect, useState } from "react";
import { toast } from "react-toastify";
//hooks
import usePersonFetch from "../../helpers/hooks/person";
//custom
import {
  classNames,
  isEmpty,
  brands,
  productsDict,
} from "../../helpers/utility";

export default function Step3({ payload, setPayload, setStep }) {
  const { createDropOffTransaction } = usePersonFetch(payload?.user?.id);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEmpty(payload?.user)) {
      setStep("number");
    } else if (payload?.containers?.length < 1) {
      setStep("containers");
    }
  }, [payload]);

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

  const handleComplete = () => {
    if (!isEmpty(payload?.user) && !isEmpty(payload.containers)) {
      let u = payload.user;
      delete u.points;

      createDropOffTransaction({
        user: u,
        timestamp: new Date(),
        containers: payload.containers,
      })
        .then((res) => {
          console.log(res);
          setPayload({});
          setLoading(false);
          toast.success(
            <div>
              <h5 className="font-medium text-gray-900">Success</h5>
              <h6>Drop off saved successfully.</h6>
            </div>,
            {
              closeOnClick: true,
            }
          );
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            <div>
              <h5 className="font-medium text-gray-900">Error</h5>
              <h6>Error saving user drop off</h6>
            </div>,
            {
              closeOnClick: true,
            }
          );
          setLoading(false);
        });
    }
  };

  return (
    <div className="mx-auto pb-10 w-full">
      <p className="text-lg text-teal-600 font-medium text-center">
        Confirm Customer Dropoff
      </p>
      {payload?.containers?.length > 0 &&
        payload?.containers.map((c, i) => (
          <div className="grid grid-cols-2 bg-white  mt-5 w-full" key={i}>
            <div className="py-2 px-6 border border-dashed">
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
                <p className="text-sm text-gray-500">{findBrand(c?.brand)}</p>
              )}
            </div>
            <span className="border border-dashed p-4 text-center font-bold">
              {c?.containers}
            </span>
          </div>
        ))}
      <div className="mt-10 grid">
        <button
          onClick={handleComplete}
          className={classNames(
            loading && "loading",
            (isEmpty(payload?.user) || isEmpty(payload?.containers)) &&
              "!bg-gray-300 !border-gray-300",
            "btn btn-lg btn-primary rounded-xl w-full md:max-w-md mx-auto shadow-lg"
          )}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
