"use client";
import React, { use, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { Button } from "./ui/button";

function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <div className="w-1/2 m-auto m-y-4 mt-14">
      <Input
        label="Nom/Prénom"
        type="text"
        result={(result) => setName(result)}
        placeHolder="Jhone Doe"
      />
      <Input
        label="Email"
        type="email"
        result={(result) => setEmail(result)}
        placeHolder="Jhone Doe"
      />
      <Textarea label="Message" result={(result) => setMessage(result)} />
      <div className="w-full flex justify-center">
        <Button> Envoyer </Button>
      </div>
    </div>
  );
}

export default ContactForm;
