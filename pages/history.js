import dynamic from "next/dynamic";
//hooks
import useUserFetch from "../helpers/hooks/user";
//custom
import { AuthGuard } from "../components/elements/AuthGuard";
import { classNames } from "../helpers/utility";
import { useData } from "../context/dataContext";
//dynamic
const MdPending = dynamic(
  async () => (await import("react-icons/md")).MdPending
);
const MdDoneOutline = dynamic(
  async () => (await import("react-icons/md")).MdDoneOutline
);
const MdErrorOutline = dynamic(
  async () => (await import("react-icons/md")).MdErrorOutline
);

export default function History() {
  const { setSelDrop } = useData();
  const { drops } = useUserFetch();

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
              <div className="p-3 w-[80px]">Voucher</div>
            </div>
            {drops &&
              drops.map((drop, i) => (
                <label
                  key={drop.id}
                  htmlFor="trans_modal"
                  onClick={() => handleClick(drop)}
                  className={classNames(
                    "flex border-t border-x border-dashed font-poppins",
                    i % 2 && "bg-gray-100"
                  )}
                >
                  <div className="p-3 flex-1 border-r border-dashed">
                    <div className="flex gap-4">
                      <div className="grid place-content-center">
                        <div className="avatar">
                          <div className="w-12 h-12 rounded-full">
                            <img src="/images/user.webp" />
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <p className="text-xs font-medium text-teal-600">
                          <span className="text-gray-400 capitalize">
                            phone :
                          </span>{" "}
                          {drop?.user?.id}
                        </p>
                        <p className="text-lg font-semibold text-teal-600 -mt-1">
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
                  <div className="p-3 text-primary w-[80px]">
                    <div className="grid place-content-center">
                      <div className="">
                        <MdPending size="2.5em" className="mx-auto" />
                        <p className="text-xs text-center uppercase font-bold">
                          pending
                        </p>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            <div className="flex bg-primary text-white font-bold text-xs uppercase">
              <div className="p-3 text-center flex-1">User</div>
              <div className="p-3 w-[80px]">Voucher</div>
            </div>
          </div>
        </section>
      </main>
    </AuthGuard>
  );
}
