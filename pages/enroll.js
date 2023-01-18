import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Router from "next/router";
//hooks
import usePersonFetch from "../helpers/hooks/person";
//custom
import { classNames, isEmpty, verifyNumber } from "../helpers/utility";
import { AuthGuard } from "../components/elements/AuthGuard";

export default function Enroll() {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState({ data: "", state: null });
  const [firstName, setFirstName] = useState({ data: "", state: null });
  const [lastName, setLastName] = useState({ data: "", state: null });
  const { person, pending, error, createUserAccount } = usePersonFetch(
    `+254${phoneNumber?.data}`
  );

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
      firstName.state === "success" &&
      lastName.state === "success" &&
      phoneNumber.state === "success"
    ) {
      return true;
    } else {
      if (firstName.state !== "success") {
        setFirstName({ ...firstName, state: "error" });
      }
      if (lastName.state !== "success") {
        setLastName({ ...lastName, state: "error" });
      }
      if (phoneNumber.state !== "success") {
        setPhoneNumber({ ...phoneNumber, state: "error" });
      }
      return false;
    }
  };

  useEffect(() => {
    if (!pending && isEmpty(error) && !isEmpty(person)) {
      setPhoneNumber({
        data: phoneNumber.data,
        state: "error",
        mess: "User with this phone number already exists",
      });
    }
  }, [person, pending, error]);

  const handleComplete = (e) => {
    e.preventDefault();
    if (!pending && isEmpty(person) && isValidated()) {
      console.log("creating user");
      let obj = {};
      let fn = firstName.data?.trim(),
        ln = lastName.data?.trim();
      fn = fn.charAt(0).toUpperCase() + fn.slice(1);
      ln = ln.charAt(0).toUpperCase() + ln.slice(1);
      obj.name = `${fn} ${ln}`;
      obj.phone = `+254${phoneNumber.data?.trim()}`;

      console.log(obj);
      createUserAccount(obj)
        .then((res) => {
          console.log(res);
          setLoading(false);
          toast.success(
            <div>
              <h5 className="font-medium text-gray-900">Success</h5>
              <h6>User account created successfully</h6>
            </div>,
            {
              closeOnClick: true,
            }
          );
          Router.push(`/user/profile?id=${obj.phone}}`);
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            <div>
              <h5 className="font-medium text-gray-900">Success</h5>
              <h6>Error occurred when trying to create the user</h6>
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
            Customer Enrollment
          </p>
          <div className="grid gap-4">
            <div className="relative form-control w-full">
              <input
                placeholder=" "
                onChange={(e) => change(e, setFirstName, "str")}
                type="text"
                className={classNames(
                  "block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer font-medium",
                  firstName?.state === "success" &&
                    "text-success border-success",
                  firstName?.state === "error" && "text-error border-error",
                  firstName?.state !== "success" &&
                    firstName?.state !== "error" &&
                    "text-teal-500 border-teal-500 focus:border-teal-500"
                )}
              />
              <label
                className={classNames(
                  "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                  firstName?.state === "success" && "text-success",
                  firstName?.state === "error" && "text-error",
                  firstName?.state !== "success" &&
                    firstName?.state !== "error" &&
                    "text-teal-700 peer-focus:text-teal-600"
                )}
              >
                First Name
              </label>
            </div>
            <div className="relative form-control w-full">
              <input
                placeholder=" "
                onChange={(e) => change(e, setLastName, "str")}
                type="text"
                className={classNames(
                  "block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer font-medium",
                  lastName?.state === "success" &&
                    "text-success border-success",
                  lastName?.state === "error" && "text-error border-error",
                  lastName?.state !== "success" &&
                    lastName?.state !== "error" &&
                    "text-teal-500 border-teal-500 focus:border-teal-500"
                )}
              />
              <label
                className={classNames(
                  "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                  lastName?.state === "success" && "text-success",
                  lastName?.state === "error" && "text-error",
                  lastName?.state !== "success" &&
                    lastName?.state !== "error" &&
                    "text-teal-700 peer-focus:text-teal-600"
                )}
              >
                Last Name
              </label>
            </div>
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
          <div className="mt-6 grid">
            <button
              onClick={handleComplete}
              className={classNames(
                "btn btn-primary btn-lg rounded-xl w-full md:max-w-md mx-auto shadow-lg mt-6",
                loading && "loading"
              )}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}
