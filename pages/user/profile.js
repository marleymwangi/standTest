import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";
//hooks
import usePersonFetch from "../../helpers/hooks/person";
//custom
import { AuthGuard } from "../../components/elements/AuthGuard";
import { classNames } from "../../helpers/utility";
//dynamic
const MdOutlinePending = dynamic(
  async () => (await import("react-icons/md")).MdOutlinePending
);
const MdDoneOutline = dynamic(
  async () => (await import("react-icons/md")).MdDoneOutline
);
const MdErrorOutline = dynamic(
  async () => (await import("react-icons/md")).MdErrorOutline
);

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;

  const { person, transactions, transPending } = usePersonFetch(
    `+${id?.trim()}`
  );

  return (
    <AuthGuard>
      <main className="min-h-[95vh] pt-20 pb-16 px-6 flex flex-col gap-4 items-start">
        <section className="flex flex-col items-center container mx-auto">
          <div className="relative rounded-box w-24 h-24 mask mask-squircle mt-2 mx-auto bg-gradient-to-r from-teal-500 via-teal-300 to-teal-500">
            <Image
              src="/images/user.webp"
              className="object-contain"
              layout="fill"
              alt=""
            />
          </div>
          <p className="text-primary text-lg">
            {!person?.name && (
              <span className="bg-gray-300 animate-pulse rounded w-12 h-5" />
            )}
            {person?.name && <span>{person?.name}</span>}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            {!person?.id && (
              <span className="bg-gray-300 animate-pulse rounded w-7 h-5" />
            )}
            {person?.id && <span>{person?.id}</span>}
            {" . Points "}
            {!person?.points && (
              <span className="bg-gray-300 animate-pulse rounded w-7 h-5" />
            )}
            {person?.points && <span>{person?.points}</span>}
          </div>
        </section>
        <section className="container mx-auto">
          <div className="bg-white rounded-box overflow-hidden">
            <div className="flex bg-primary text-white font-bold text-xs uppercase">
              <div className="p-3 text-center flex-1">Transaction</div>
              <div className="p-3 w-[80px]">Status</div>
            </div>
            {transPending && (
              <div className="flex-1">
                <p className="font-semibold text-center py-6 text-gray-400">
                  Loading
                </p>
              </div>
            )}
            {!transPending && transactions.length < 1 && (
              <div className="flex-1">
                <p className="font-semibold text-center py-6 text-gray-400">
                  No transactions
                </p>
              </div>
            )}
            {transactions &&
              transactions.map((transaction, i) => (
                <label
                  key={transaction.id}
                  htmlFor="trans_modal"
                  onClick={() => handleClick(transaction)}
                  className={classNames(
                    "flex border-x border-primary font-poppins",
                    i % 2 && "bg-gray-100"
                  )}
                >
                  <div className="p-3 flex-1 border-t border-r border-dashed">
                    <div className="flex gap-4">
                      <div className="">
                        <p className="text-xs font-medium text-teal-600">
                          <span className="text-gray-400 capitalize">
                            File Id :
                          </span>{" "}
                          {transaction?.file_id}
                        </p>
                        <p className="text-xs font-medium text-teal-600">
                          <span className="text-gray-400 capitalize">
                            Amount :
                          </span>{" "}
                          {transaction?.paid_amount}
                        </p>
                        <p className="text-xs font-medium text-teal-600">
                          <span className="text-gray-400 capitalize">
                            Provider Ref :
                          </span>{" "}
                          {transaction?.provider_reference}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 text-primary border-t border-dashed w-[80px]">
                    <div className="grid place-content-center h-full">
                      {transaction.status === "Completed" ? (
                        <div className="text-success">
                          <MdDoneOutline size="1.5em" className="mx-auto" />
                          <p className="text-xs text-center uppercase font-semibold">
                            complete
                          </p>
                        </div>
                      ) : (
                        <div className="text-info">
                          <MdOutlinePending size="1.5em" className="mx-auto" />
                          <p className="text-xs text-center uppercase font-semibold">
                            pending
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </label>
              ))}
            <div className="flex bg-primary text-white font-bold text-xs uppercase">
              <div className="p-3 text-center flex-1">Transaction</div>
              <div className="p-3 w-[80px]">Status</div>
            </div>
          </div>
        </section>
      </main>
    </AuthGuard>
  );
}
