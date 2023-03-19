import { useState } from "react";
import dynamic from "next/dynamic";
//hooks
import useUserFetch from "../../helpers/hooks/user";
//custom
import { AuthGuard } from "../../components/elements/AuthGuard";
import { classNames } from "../../helpers/utility";
import UserCard from "../../components/elements/UserCards";
//dynamic
const FaSearch = dynamic(async () => (await import("react-icons/fa")).FaSearch);

export default function User() {
  const { users } = useUserFetch();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  let filtered =
    text.length > 0
      ? users.filter((user) => {
          let phone = user.id;
          let names = user.name.toLowerCase().split(" ");
          let matched = names.some((name) =>
            name
              .toLowerCase()
              .startsWith(
                text.toLowerCase().slice(0, Math.max(name.length - 1, 1))
              )
          );
          return phone.includes(text.toLowerCase()) || matched;
        })
      : users;

  return (
    <AuthGuard>
      <main className="min-h-[95vh] pt-20 pb-16 px-6 flex flex-col gap-4 items-start">
        <section className="container mx-auto">
          <div className="relative form-control w-full">
            <input
              type="text"
              placeholder=" "
              onChange={handleChange}
              className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer text-emerald-700 border-emerald-500 focus:border-emerald-500"
            />
            <label className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-emerald-700 peer-focus:text-emerald-600">
              Search
            </label>
          </div>
          <div className="flex flex-col items-start gap-4 w-full mt-4">
            {filtered.map((user) => (
              <UserCard key={user.id} data={user} />
            ))}
          </div>
        </section>
      </main>
    </AuthGuard>
  );
}
