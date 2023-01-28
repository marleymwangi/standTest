import Image from "next/image";
import Link from "next/link";
//custom
import { AuthGuard } from "../components/elements/AuthGuard";

export default function Home() {
  return (
    <AuthGuard>
      <main className="min-h-[95vh] pt-20 pb-16">
        <section className="container mx-auto grid gap-6">
        <Link href="/enroll">
            <div className="bg-primary h-[25vh] w-[60vw] mx-auto rounded-box overflow-hidden border-4 p-2 border-teal-500 flex flex-col items-center shadow-xl">
              <div className="relative h-[80%] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/register.jpg"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
              </div>
              <p className="text-2xl font-bold mt-2 text-white">Enroll</p>
            </div>
          </Link>
          <Link href="/wizard">
            <div className="bg-primary h-[25vh] w-[60vw] mx-auto rounded-box overflow-hidden border-4 p-2 border-teal-500 flex flex-col items-center shadow-xl">
              <div className="relative h-[80%] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/drop.jpg"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
              </div>
              <p className="text-2xl font-bold mt-2 text-white">Dropoff</p>
            </div>
          </Link>
          <Link href="/history">
            <div className="bg-primary h-[25vh] w-[60vw] mx-auto rounded-box overflow-hidden border-4 p-2 border-teal-500 flex flex-col items-center shadow-xl">
              <div className="relative h-[80%] w-full  rounded-xl overflow-hidden">
                <Image
                  src="/images/history.jpg"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
              </div>
              <p className="text-2xl font-bold mt-2 text-white">History</p>
            </div>
          </Link>
        </section>
      </main>
    </AuthGuard>
  );
}
