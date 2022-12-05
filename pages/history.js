import dynamic from "next/dynamic";
import Image from "next/image";
//hooks
import useUserFetch from "../helpers/hooks/user";
//custom
import { AuthGuard } from "../components/elements/AuthGuard";
import { classNames } from "../helpers/utility";
import { useData } from "../context/dataContext";
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

export default function History() {
  const { setSelDrop } = useData();
  const { drops, dropsPending } = useUserFetch();

  const getContainers = (array) => {
    if (array?.length > 0) {
      let tmp = 0;
      array.forEach((d) => {
        tmp = tmp + d?.containers || 0;
      });
      return tmp;
    } else {
      return 0;
    }
  };

  const handleClick = (d) => {
    setSelDrop(d);
  };

  return (
    <AuthGuard>
      <main className="min-h-[95vh] pt-20 pb-16">
        <section className="container mx-auto">
          <div className="bg-white rounded-box overflow-hidden">
            <div className="flex bg-primary text-white font-bold text-xs uppercase">
              <div className="p-3 text-center flex-1">User</div>
              <div className="p-3 w-[80px]">Points</div>
            </div>
            {dropsPending && (
              <div className="flex-1">
                <p className="font-semibold text-center py-10 text-gray-400">
                  Loading
                </p>
              </div>
            )}
            {drops &&
              drops.map((drop, i) => (
                <label
                  key={drop.id}
                  htmlFor="trans_modal"
                  onClick={() => handleClick(drop)}
                  className={classNames(
                    "flex border-x border-primary font-poppins",
                    i % 2 && "bg-gray-100"
                  )}
                >
                  <div className="p-3 flex-1 border-t border-r border-dashed">
                    <div className="flex gap-4">
                      <div className="grid place-content-center">
                        <div className="relative rounded-box w-12 h-12 overflow-hidden mt-2 mx-auto bg-gradient-to-r from-green-200 via-green-400 to-green-500">
                          <Image
                            src="/images/user.webp"
                            className="object-contain"
                            layout="fill"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p className="text-xs font-medium text-teal-600">
                          <span className="text-gray-400 capitalize">
                            phone :
                          </span>{" "}
                          {drop?.user?.id}
                        </p>
                        <p className="text-lg font-medium text-teal-600 -mt-1">
                          {drop?.user?.name}
                        </p>
                        <p className="text-sm font-medium text-gray-500 capitalize">
                          <span className="font-semibold text-teal-600">
                            {getContainers(drop?.containers)}
                          </span>{" "}
                          containers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 text-primary border-t border-dashed w-[80px]">
                    <div className="grid place-content-center h-full">
                      {drop.status === "pending" && (
                        <div className="text-info">
                          <MdOutlinePending size="1.5em" className="mx-auto" />
                          <p className="text-xs text-center uppercase font-semibold">
                            pending
                          </p>
                        </div>
                      )}
                      {drop.status === "complete" && (
                        <div className="text-success">
                          <MdDoneOutline size="1.5em" className="mx-auto" />
                          <p className="text-xs text-center uppercase font-semibold">
                            complete
                          </p>
                        </div>
                      )}
                      {drop.status === "error" && (
                        <div className="text-error">
                          <MdErrorOutline size="1.5em" className="mx-auto" />
                          <p className="text-xs text-center uppercase font-semibold">
                            error
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </label>
              ))}
            <div className="flex bg-primary text-white font-bold text-xs uppercase">
              <div className="p-3 text-center flex-1">User</div>
              <div className="p-3 w-[80px]">Points</div>
            </div>
          </div>
        </section>
      </main>
    </AuthGuard>
  );
}
