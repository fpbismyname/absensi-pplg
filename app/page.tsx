import Link from "next/link";
import React from "react"

const Home:React.FC = () =>{
  return (
    <>
      <h1>Welcome</h1>
      <Link href="/login">Login</Link>
    </>
  )
}

export default Home;