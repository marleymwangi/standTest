import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import fetch from "node-fetch";
//hooks
import usePersonFetch from "../../helpers/hooks/person";
//custom
import { classNames, isEmpty } from "../../helpers/utility";
//dynamic
const FaPlus = dynamic(async () => (await import("react-icons/fa")).FaPlus);

export default function Step3({ payload, setPayload, step, setStep }) {
  const { setUserPointsDb } = usePersonFetch(payload?.user?.id);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEmpty(payload?.user)) {
      console.log("Empty");
      setStep("number");
    }
  }, [payload]);

  const companyName = (name) => {
    switch (name) {
      case "pernod":
        return "Pernod";
      case "cocacola":
        return "Coca Cola";
    }
  };

  const handleComplete = () => {
    let tot = 0;

    payload?.containers.forEach((cont) => {
      let tmp = cont.containers * 1;
      tot = tot + tmp;
    });

    if (!isEmpty(payload?.user)) {
      let currP = payload?.user?.points || 0;

      let total = currP + tot;
      sendVoucher({
        name: payload?.user?.name,
        phone: payload?.user?.id,
        amount: 1,
      });
      setUserPointsDb(total)
        .then((res) => {
          console.log(res);
          setPayload({});
          setLoading(false);
          toast.success(
            <div>
              <h5 className="font-medium text-gray-900">Success</h5>
              <h6>Points assigned to customer</h6>
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
              <h5 className="font-medium text-gray-900">Success</h5>
              <h6>Error occurred when trying to save the reminder</h6>
            </div>,
            {
              closeOnClick: true,
            }
          );
          setLoading(false);
        });
    }
  };

  const sendVoucher = async (body) => {
    let url =
      "https://us-central1-taka-earth.cloudfunctions.net/takaAPI/disburse";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        // response.status >= 200 && response.status < 300
        response.json().then((data) => {
          console.log(data);
          toast.success(
            <div>
              <h5 className="font-medium text-gray-900">Success</h5>
              <h6>Voucher disbursed to customer</h6>
            </div>,
            {
              closeOnClick: true,
            }
          );
        });
      } else {
        response.json().then((data) => {
          console.warn(data);
          reject(data);
        });
      }
    });
  };

  return (
    <div className="mx-auto pt-[5vh] w-full">
      <p className="text-lg text-teal-700 font-medium text-center">
        Confirm Customer Dropoff
      </p>
      {payload?.containers?.length > 0 &&
        payload?.containers.map((c, i) => (
          <div
            className="grid grid-cols-2 bg-white  mt-5 text-xl font-bold w-full"
            key={i}
          >
            <span className="border border-dashed p-4 text-center">
              {companyName(c?.name)}
            </span>
            <span className="border border-dashed p-4 text-center">
              {c?.containers}
            </span>
          </div>
        ))}
      <div className="mt-10">
        <button
          onClick={handleComplete}
          className={classNames(
            loading && "loading",
            "btn btn-primary border-0 btn-lg rounded-xl w-full md:max-w-md mx-auto "
          )}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
