import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
//custom
import { AuthGuard } from "../components/elements/AuthGuard";

export default function Home() {
  const { data: session } = useSession();
  return (
    <AuthGuard>
      <main className="min-h-[95vh] pt-20 pb-16">
        <section className="container mx-auto">
          <Link href="/wizard">
            <div className="bg-emerald-600 h-[30vh] w-[30vh] mx-auto rounded-box overflow-hidden border border-emerald-500 flex flex-col items-center shadow-xl">
              <div className="relative h-[80%] w-full">
                <Image src="/images/user.jpg" objectFit="cover" layout="fill" alt=""/>
              </div>
              <p className="text-2xl font-bold my-6 text-white">New Customer</p>
            </div>
          </Link>
        </section>
      </main>
    </AuthGuard>
  );
}
