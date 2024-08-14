"use client";
import React, { FormEvent } from "react";
import { Login } from "../libs/types";

const LoginPage: React.FC = () => {
  const loginHandle = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const dataForm = Object.fromEntries(form)
  };
  return (
    <>
      <div className="flex flex-row min-h-[100vh] items-center">
        <form
          onSubmit={loginHandle}
          className="flex flex-col gap-3 text-center bg-secondary p-10 rounded-xl"
        >
          <h1>Login</h1>
          <input
            type="text"
            name="username"
            placeholder="Masukan Username"
            className="p-2 outline-none select-none rounded-xl focus:shadow-[0px_0px_5px_gray]"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            placeholder="Masukan Password"
            className="p-2 outline-none select-none rounded-xl focus:shadow-[0px_0px_5px_gray]"
          />
          <div className="flex flex-row justify-center">
            <button type="submit" className="p-2 bg-primary rounded-xl hover:bg-black hover:text-secondary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
