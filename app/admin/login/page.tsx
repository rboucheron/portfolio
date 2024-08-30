"use client";
import React, { useState } from "react";
import Input from "@/components/Input";

function page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json(); 
        localStorage.setItem('admin', JSON.stringify(data))
        setEmail("");
        setPassword("");
      } else {
        const errorData = await response.json();
        console.log(errorData)
      }
    } catch (error) {}
  };
  return (
    <div className="w-1/2 m-auto mt-24">
      <h1 className="mb-8 font-bold text-2xl text-blue-600 w-full text-center">
        Connection
      </h1>
      <Input
        label="Email"
        type="email"
        result={(result: string) => setEmail(result)}
        placeHolder="@"
      />
      <Input
        label="Mot de passe"
        type="password"
        placeHolder="*****"
        result={(result: string) => setPassword(result)}
      />
      <div
        onClick={handleSubmit}
        className="bg-green-400 p-2 w-1/5 text-center rounded-md text-sm text-white mb-4 mt-4 hover:bg-sky-800"
      >
        Valider
      </div>
    </div>
  );
}

export default page;
