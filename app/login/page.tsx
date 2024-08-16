"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Alert } from "../components/notif";
import Link from "next/link"

const LoginPage: React.FC = () => {
  const [loading, isLoading] = React.useState(false);
  const router = useRouter()

  const loginHandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const dataForm: any = Object.fromEntries(form);

    if (dataForm["username"] === "" || dataForm["password"] === "") {
      alert("Please fill in all fields");
    } else {
      try {
        isLoading(true);
        const payload = JSON.stringify(dataForm);
        const response = await fetch("/api/account/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: payload,
        }).then((respone) => {
          if (respone.ok) {
            return respone.json();
          } else if (respone.status === 401) {
            throw new Error("Invalid credentials");
          }
        });
        if (response) {
          Alert({
            title: "Login Berhasil",
            text: "Silahkan melanjutkan proses absensi",
            icon: "success",
          })
        }
      } catch (err) {
        if (err){
          Alert({
            title: "Login Gagal",
            text: "Kombinasi username dan password tidak cocok",
            icon: "error"
          })
        }
      } finally {
        isLoading(false);
      }
    }
  };
  return (
    <>
      <div className="flex flex-row min-h-[100vh] items-center justify-center">
        <form
          onSubmit={loginHandle}
          method="POST"
          className="flex flex-col card-style"
        >
          <div className="d-flex flex-col mb-4">
            <h1><i className="bi bi-backpack2 mr-2"></i>Login</h1>
            <p className="text-xs font-normal">
              Login sekarang untuk melakukan absensi
            </p>
          </div>
          <input
            type="text"
            name="username"
            placeholder="Masukan Username"
            className="input-style"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            placeholder="Masukan Password"
            className="input-style"
          />
          <div className="flex flex-row justify-center">
            {loading ? (
              <i className="bi bi-arrow-clockwise me-1 text-center animate-spin font-bold text-2xl loading-style"></i>
            ) : (
              <button
                type="submit"
                className="button-style"
              >
                Login
              </button>
            )}
          </div>
          <div className="flex flex-col">
            <p className="text-xs">Lupa password akun ? <a href="" className="hover:text-secondary underline transition-all">Hubungi Admin</a></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
