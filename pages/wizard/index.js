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
            {
              step === "number" &&(
                <p className="font-medium text-emerald-600">Step 1: Find Customer</p>
              )
            }
            {
              step === "containers" &&(
                <p className="font-medium text-emerald-600">Step 2: Input Containers</p>
              )
            }
            {
              step === "confirm" &&(
                <p className="font-medium text-emerald-600">Step 3: Submit Dropoff</p>
              )
            }
            <div className="grid grid-cols-3 gap-1">
              <div onClick={()=>setStep("number")} className={classNames("h-2 w-full rounded", step === "number" ? "bg-emerald-400" : "bg-gray-300")}/>
              <div onClick={()=>setStep("containers")} className={classNames("h-2 w-full rounded", step === "containers" ? "bg-emerald-400" : "bg-gray-300")}/>
              <div onClick={()=>setStep("confirm")} className={classNames("h-2 w-full rounded", step === "confirm" ? "bg-emerald-400" : "bg-gray-300")}/>
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
