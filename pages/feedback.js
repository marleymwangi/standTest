import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Router from "next/router";
//hooks
import useUserFetch from "../helpers/hooks/user";
//custom
import { classNames, isEmpty, verifyNumber } from "../helpers/utility";
import { AuthGuard } from "../components/elements/AuthGuard";

export default function FeedbackPage() {
  const [loading, setLoading] = useState(false);
  const [dataObject, setDataObject] = useState({});
  const [inputStates, setinputStates] = useState({});
  const { addUserFeedback } = useUserFetch();

  const change = (event, type = "str") => {
    event.preventDefault();
    switch (type) {
      case "num":
        if (verifyNumber(event.target.value) || event.target.value === "") {
          setDataObject((prevState) => {
            return {
              ...prevState,
              [event.target.name]: event.target.value,
            };
          });

          if (event.target.value.length < 9) {
            setinputStates((prevState) => {
              return {
                ...prevState,
                [event.target.name]: null,
              };
            });
          } else if (event.target.value.length === 9) {
            setinputStates((prevState) => {
              return {
                ...prevState,
                [event.target.name]: "success",
              };
            });
          } else {
            setinputStates((prevState) => {
              return {
                ...prevState,
                [event.target.name]: {
                  error: true,
                  mess: "Phone number is too long",
                },
              };
            });
          }
        } else {
          setinputStates({
            ...inputStates,
            [event.target.name]: {
              error: true,
              mess: "Please enter a valid input",
            },
          });
        }
        break;
      case "str":
        setDataObject((prevState) => {
          return {
            ...prevState,
            [event.target.name]: event.target.value,
          };
        });

        if (event.target.value?.length > 0) {
          setinputStates((prevState) => {
            return {
              ...prevState,
              [event.target.name]: "success",
            };
          });
        } else {
          setinputStates((prevState) => {
            return {
              ...prevState,
              [event.target.name]: null,
            };
          });
        }
        break;
      default:
        break;
    }
  };

  const isValidated = () => {
    if (
      inputStates?.title === "success" &&
      inputStates?.content === "success" &&
      inputStates?.phoneNumber === "success"
    ) {
      return true;
    } else {
      if (inputStates?.title !== "success") {
        setinputStates((prevState) => {
          return {
            ...prevState,
            title: {
              error: true,
              mess: "Please enter a valid input",
            },
          };
        });
      }
      if (inputStates?.content !== "success") {
        setinputStates((prevState) => {
          return {
            ...prevState,
            content: {
              error: true,
              mess: "Please enter a valid input",
            },
          };
        });
      }
      if (inputStates?.phoneNumber !== "success") {
        setinputStates((prevState) => {
          return {
            ...prevState,
            phoneNumber: {
              error: true,
              mess: "Please enter a valid input",
            },
          };
        });
      }
      return false;
    }
  };

  const handleComplete = (e) => {
    e.preventDefault();
    if (isValidated()) {
      let obj = {};
      obj.phone = `+254${dataObject?.phoneNumber?.trim()}`;
      obj.title = dataObject?.title?.trim();
      obj.content = dataObject?.content?.trim();

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
            <div className="flex gap-2 items-center">
              <button
                className={classNames(
                  "btn btn-primary h-[4em] border-2",
                  inputStates?.phoneNumber === "success" &&
                    "btn-success text-white",
                  inputStates?.phoneNumber?.error && "btn-error text-white",
                  inputStates?.phoneNumber !== "success" &&
                    !inputStates?.phoneNumber?.error &&
                    "btn-primary"
                )}
              >
                +254
              </button>
              <div className="relative form-control w-full">
                <input
                  type="number"
                  placeholder=" "
                  name="phoneNumber"
                  value={dataObject?.phoneNumber || ""}
                  onChange={(e) => change(e, "num")}
                  className={classNames(
                    "block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer font-medium",
                    inputStates?.phoneNumber === "success" &&
                      "text-success border-success",
                    inputStates?.phoneNumber?.error &&
                      "text-error border-error",
                    inputStates?.phoneNumber !== "success" &&
                      !inputStates?.phoneNumber?.error &&
                      "text-teal-500 border-teal-500 focus:border-teal-500"
                  )}
                />
                <label
                  className={classNames(
                    "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                    inputStates?.phoneNumber === "success" && "text-success",
                    inputStates?.phoneNumber?.error && "text-error",
                    inputStates?.phoneNumber !== "success" &&
                      !inputStates?.phoneNumber?.error &&
                      "text-teal-700 peer-focus:text-teal-600"
                  )}
                >
                  7XXXXXXXX
                </label>
              </div>
            </div>
            {inputStates?.phoneNumber?.error && (
              <p className="text-error text-xs italic text-center mt-1">
                {inputStates?.phoneNumber?.mess}
              </p>
            )}
          </div>
          <div className="relative form-control w-full mt-3">
              <input
                type="text"
                placeholder=" "
                name="title"
                value={dataObject?.title || ""}
                onChange={(e) => change(e, "str")}
                className={classNames(
                  "block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer font-medium",
                  inputStates?.title === "success" &&
                    "text-success border-success",
                  inputStates?.title?.error && "text-error border-error",
                  inputStates?.title !== "success" &&
                    !inputStates?.title?.error &&
                    "text-teal-500 border-teal-500 focus:border-teal-500"
                )}
              />
              <label
                className={classNames(
                  "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                  inputStates?.title === "success" && "text-success",
                  inputStates?.title?.error && "text-error",
                  inputStates?.title !== "success" &&
                    !inputStates?.title?.error &&
                    "text-teal-700 peer-focus:text-teal-600"
                )}
              >
                Title
              </label>
            </div>
          <div className="relative form-control w-full mt-3">
            <textarea
              type="text"
              name="content"
              placeholder=" "
              onChange={(e) => change(e, "str")}
              className={classNames(
                "block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer",
                inputStates?.content === "success" && "text-success border-success",
                inputStates?.content?.error && "text-error border-error",
                inputStates?.content !== "success" &&
                    !inputStates?.content?.error &&
                  "border-teal-500 focus:border-teal-500"
              )}
            />
            <label
              className={classNames(
                "absolute text-sm duration-300 transform -translate-y-2 scale-75 top-3 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2",
                inputStates?.content === "success" && "text-success border-success",
                inputStates?.content?.error && "text-error border-error",
                inputStates?.content !== "success" &&
                    !inputStates?.content?.error &&
                  "text-teal-700 peer-focus:text-teal-600"
              )}
            >
              Note Content
            </label>
            {inputStates?.content?.error  && (
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
