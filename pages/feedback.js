import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Router from "next/router";
//hooks
import useUserFetch from "../helpers/hooks/user";
//custom
import { classNames, isEmpty, verifyNumber } from "../helpers/utility";
import { AuthGuard } from "../components/elements/AuthGuard";

export default function Enroll() {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState({ data: "", state: null });
  const [content, setContent] = useState({ data: "", state: null });
  const { addUserFeedback } = useUserFetch();

  const change = (event, setFunction, type = "str") => {
    event.preventDefault();
    switch (type) {
      case "num":
        if (verifyNumber(event.target.value)) {
          if (event.target.value.length < 9) {
            setPhoneNumber({
              data: event.target.value,
              state: null,
            });
          } else if (event.target.value.length === 9) {
            setPhoneNumber({
              data: event.target.value,
              state: "success",
            });
          } else {
            setPhoneNumber({
              data: event.target.value,
              state: "error",
              mess: "Phone number is too long",
            });
          }
        } else {
          setPhoneNumber({
            data: event.target.value,
            state: "error",
            mess: "Input must be a number",
          });
        }
        break;
      case "str":
        if (event.target.value?.length > 0) {
          setFunction({
            data: event.target.value,
            state: "success",
          });
        } else {
          setFunction({
            data: event.target.value,
            state: null,
          });
        }
        break;
      default:
        break;
    }
  };

  const isValidated = () => {
    if (
      content.state === "success" &&
      phoneNumber.state === "success"
    ) {
      return true;
    } else {
      if (content.state !== "success") {
        setContent({ ...content, state: "error" });
      }
      if (phoneNumber.state !== "success") {
        setPhoneNumber({ ...phoneNumber, state: "error" });
      }
      return false;
    }
  };

  const handleComplete = (e) => {
    e.preventDefault();
    if (isValidated()) {
      let obj = {};
      obj.phone = `+254${phoneNumber.data?.trim()}`;
      obj.content = content.data?.trim();

      addUserFeedback(obj)
        .then((res) => {
          console.log(res);
          setLoading(false);
          toast.success(
            <div>
              <h5 className="font-medium text-gray-900">Success</h5>
              <h6>User feedback saved successfully</h6>
            </div>,
            {
              closeOnClick: true,
            }
          );
          Router.push(`/`);
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            <div>
              <h5 className="font-medium text-gray-900">Success</h5>
              <h6>Error occurred when trying to save</h6>
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
    <AuthGuard>
      <main className="min-h-[95vh] px-6 pt-20 pb-16">
        <div className="mx-auto pb-10 w-full">
          <p className="text-sm text-teal-600 font-medium text-center mb-3">
            Customer Feedback
          </p>
          <div className="grid gap-4">
            <div className="flex gap-1 items-center">
              <button
                className={classNames(
                  "btn btn-primary h-[4em] border-2",
                  phoneNumber?.state === "success" && "btn-success text-white",
                  phoneNumber?.state === "error" && "btn-error text-white",
                  phoneNumber?.state !== "success" &&
                    phoneNumber?.state !== "error" &&
                    "btn-primary"
                )}
              >
                +254
              </button>
              <div className="relative form-control w-full">
                <input
                  placeholder=" "
                  onChange={(e) => change(e, setPhoneNumber, "num")}
                  type="text"
                  className={classNames(
                    "block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer font-medium",
                    phoneNumber?.state === "success" &&
                      "text-success border-success",
                    phoneNumber?.state === "error" && "text-error border-error",
                    phoneNumber?.state !== "success" &&
                      phoneNumber?.state !== "error" &&
                      "text-teal-500 border-teal-500 focus:border-teal-500"
                  )}
                />
                <label
                  className={classNames(
                    "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                    phoneNumber?.state === "success" && "text-success",
                    phoneNumber?.state === "error" && "text-error",
                    phoneNumber?.state !== "success" &&
                      phoneNumber?.state !== "error" &&
                      "text-teal-700 peer-focus:text-teal-600"
                  )}
                >
                  7XXXXXXXX
                </label>
              </div>
            </div>
            {phoneNumber.state === "error" && (
              <p className="text-error text-xs italic text-center mt-1">
                {phoneNumber?.mess}
              </p>
            )}
          </div>
          <div className="relative form-control w-full mt-3">
            <textarea
              type="text"
              placeholder=" "
              onChange={(event) => change(event, setContent)}
              className={classNames(
                "block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer",
                content?.state === "success" && "text-success border-success",
                content?.state === "error" && "text-error border-error",
                content?.state !== "success" &&
                  content?.state !== "error" &&
                  "border-teal-500 focus:border-teal-500"
              )}
            />
            <label
              className={classNames(
                "absolute text-sm duration-300 transform -translate-y-2 scale-75 top-3 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2",
                content?.state === "success" && "text-success",
                content?.state === "error" && "text-error",
                content?.state !== "success" &&
                  content?.state !== "error" &&
                  "text-teal-700 peer-focus:text-teal-600"
              )}
            >
              Note Content
            </label>
            {content?.state === "error" && (
              <p className="text-error text-xs italic text-center mt-1">
                Please enter a valid content
              </p>
            )}
          </div>
          <div className="mt-14 px-6 grid">
            <button
              onClick={handleComplete}
              className={classNames(
                "btn btn-primary btn-lg rounded-xl w-full md:max-w-md mx-auto shadow-lg",
                loading && "loading"
              )}
            >
              Save
            </button>
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}
