import Router from "next/router";
import Image from "next/image";
import { format } from "date-fns";

export default function UserCard({ data }) {
  const handleClick = (e) => {
    e.preventDefault();
    Router.push("/user/profile?id=" + data.id);
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-box bg-white w-full py-4 px-3 border shadow-lg"
    >
      <div className="flex gap-4">
        <div className="grid place-content-center">
          <div className="relative rounded-box w-12 h-12 overflow-hidden mt-2 mx-auto bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500">
            <Image
              src="/images/user.webp"
              className="object-contain"
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div className="grid">
          <div className="flex items-center gap-3">
            <p className="text-xs text-gray-400 capitalize">name </p>
            <p className="font-medium text-emerald-600 flex-1">{data?.name}</p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <p className="text-xs text-gray-400 capitalize">phone </p>
            <p className="font-medium text-emerald-600 flex-1"> {data?.id}</p>
          </div>
          <div className="flex items-center gap-3 text-sm  mt-2">
            <p className="text-xs text-gray-400 capitalize">created </p>
            <p className="text-xs text-gray-400 flex-1">
              {" "}
              {new Date(data?.created) instanceof Date &&
                format(new Date(data?.created), "Ppp")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
