"use client";
import InputWithLabel from "@/shared/entities/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SignupContent() {
  const router = useRouter();
  const inputs: Array<InputWithLabel> = [
    {
      label: "username",
      type: "text",
      options: {
        minLength: 3,
        maxLength: 30,
        id: "username",
        name: "username",
        form: "signup-form",
      },
    },
    {
      label: "email",
      type: "email",
      options: {
        minLength: 3,
        maxLength: 40,
        id: "email",
        name: "email",
        form: "signup-form",
      },
    },
    {
      label: "password",
      type: "password",
      options: {
        minLength: 8,
        maxLength: 50,
        id: "password",
        name: "password",
        form: "signup-form",
      },
    },
  ];

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    router.push("/game");
  };

  return (
    <div className="h-full w-full flex">
      <div className="relative h-full w-full bg-bg_secondary grid place-items-center">
        <Link
          href="/"
          className="absolute top-0 left-0 pt-3 pb-2 px-5 bg-bg_black font-extrabold text-2xl"
        >
          GO BACK
        </Link>
        <h1 className="font-extrabold text-6xl text-bg_black">SIGN UP</h1>
      </div>

      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <form
          onSubmit={handleFormSubmit}
          id="signup-form"
          className="grid gap-10 w-[80%] max-w-[550px]"
        >
          <div className="grid gap-5">
            {inputs.map((input: InputWithLabel, index: number) => (
              <div key={index} className="w-full">
                <label
                  htmlFor={input.options?.id}
                  className="block uppercase text-2xl font-extrabold text-bg_black"
                >
                  {input.label}
                </label>
                <input
                  type={input.type}
                  {...input.options}
                  className="w-full text-2xl font-extrabold text-bg_black bg-bg_secondary shadow-[0.3rem_0.3rem_#262322] pt-2 pb-1 px-2 focus:outline-none"
                />
              </div>
            ))}
          </div>
          <input
            type="submit"
            form="signup-form"
            value="SIGN UP"
            className="bg-bg_black w-max justify-self-center pt-3 pb-2 px-6 font-extrabold text-bg_primary  shadow-[0.25rem_0.25rem_#00D1FF] border-bg_secondary border-solid border-2 cursor-pointer"
          />
        </form>
        <Link
          href="/signin"
          className="cursor-pointer font-extrabold text-bg_black text-2xl"
        >
          ALEADY REGISTERED?
        </Link>
      </div>
    </div>
  );
}
