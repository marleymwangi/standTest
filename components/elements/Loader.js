import Image from "next/image";
import { classNames } from "../../helpers/utility";

export default function Loader({ component }) {
  return (
    <div
      id="loader"
      className={classNames("relative", component && "h-[16vh]")}
    >
      <div className="abs-center">
        <div className="relative h-[8vh] w-[8vh]">
          <Image
            src="/images/logo.png"
            className="object-contain"
            priority="eager"
            layout="fill"
            alt=""
          />
        </div>
      </div>
      <div className="abs-center">
        <div className="relative h-[16vh] w-[16vh] animate-spin-slow">
          <Image
            src="/images/leaves.webp"
            className="object-contain"
            priority="eager"
            layout="fill"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
