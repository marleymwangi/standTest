import { useState } from "react";
import { AuthGuard } from "../../components/elements/AuthGuard";
import { classNames } from "../../helpers/utility";
//custom
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function WizardIndex() {
  const [step, setStep] = useState("number");
  const [payload, setPayload] = useState({});

  return (
    <AuthGuard>
      <main className="min-h-[95vh] pt-20 pb-16">
        <section className="container overflow-hidden mx-auto grid gap-16 px-2">
          <div className="grid gap-2">
            <p className="font-medium text-teal-700">Step 1: Find Customer</p>
            <div className="grid grid-cols-3 gap-1">
              <div className={classNames("h-2 w-full rounded", step === "number" ? "bg-primary" : "bg-gray-300")}/>
              <div className={classNames("h-2 w-full rounded", step === "containers" ? "bg-primary" : "bg-gray-300")}/>
              <div className={classNames("h-2 w-full rounded", step === "confirm" ? "bg-primary" : "bg-gray-300")}/>
            </div>
          </div>
          {step === "number" && (
            <Step1
              step={step}
              payload={payload}
              setStep={setStep}
              setPayload={setPayload}
            />
          )}
          {step === "containers" && (
            <Step2
              step={step}
              payload={payload}
              setStep={setStep}
              setPayload={setPayload}
            />
          )}
          {step === "confirm" && (
            <Step3
              step={step}
              payload={payload}
              setStep={setStep}
              setPayload={setPayload}
            />
          )}
        </section>
      </main>
    </AuthGuard>
  );
}
