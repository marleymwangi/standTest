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
              .startsWith(text.slice(0, Math.max(name.length - 1, 1)))
          );
          return phone.includes(text.toLowerCase()) || matched;
        })
      : users;

  return (
    <AuthGuard>
      <main className="min-h-[95vh] pt-20 pb-16 px-6 flex flex-col gap-4 items-start">
        <section className="container mx-auto">
          <div className="rounded-full bg-white p-1 flex justify-between shadow-lg">
            <textarea
              value={text}
              type="text"
              onChange={handleChange}
              placeholder="Type here"
              className="input pt-2 resize-none rounded-full input-outline w-full flex-1"
            />
            <button className="btn btn-primary text-white btn-circle ml-2">
              <FaSearch size="1.5em" />
            </button>
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
