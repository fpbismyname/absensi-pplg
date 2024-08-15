"use client";
import React, { FormEvent } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const LoginPage: React.FC = () => {
  const [loading, isLoading] = React.useState(false);
  const router = useRouter();

  const loginHandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const dataForm: any = Object.fromEntries(form);
    if (dataForm["username"] === "" || dataForm["password"] === "") {
      alert("Please fill in all fields");
    } else {
      try {
        isLoading(true);
        const response = await axios.post("/api/account/login", dataForm);
        if (response) {
          Swal.fire({
            title: "Login Success",
            text: "You have been logged in successfully",
            icon: "success"
          }).then(()=>router.push('/'))
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response && err.response.status === 401) {
            Swal.fire({
              title: "Error",
              text: "Invalid username or password",
              icon: "error"
            })
          }
        }
      } finally {
        isLoading(false);
      }
    }
  };
  return (
    <>
      <div className="flex flex-row min-h-[100vh] items-center w-3/12">
        <form
          onSubmit={loginHandle}
          method="POST"
          className="flex flex-col gap-3 text-center bg-secondary p-10 rounded-xl text-wrap"
        >
          <div className="d-flex flex-col mb-4">
            <h1>Login</h1>
            <p className="text-xs font-normal">
              Login sekarang untuk melakukan absensi
            </p>
          </div>
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
            {loading ? (
              <i className="bi bi-arrow-clockwise me-1 text-center animate-spin font-bold text-xl"></i>
            ) : (
              <button
                type="submit"
                className="p-2 bg-primary rounded-xl hover:bg-black hover:text-secondary"
              >
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
