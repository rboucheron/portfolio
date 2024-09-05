"use client";
import React, { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { Button } from "./ui/button";
import { useMessage } from "@/lib/store";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";

function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSend, setIsSend] = useState<boolean>(false);
  const { toast } = useToast();
  const { message, updateMessage } = useMessage();

  const sendEmail = () => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_MAILJS_SERVICE as string,
        process.env.NEXT_PUBLIC_MAILJS_TEMPLATE as string,
        { name, email, message },
        process.env.NEXT_PUBLIC_MAILJS_APIKEY as string
      )
      .then(
        (result) => {
          setIsSend(true);
          updateMessage("")
          toast({
            description: "Email envoyé avec succès !",
          });
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'email", error.text);
          toast({
            variant: "destructive",
            description: "Erreur lors de l'envoi de l'email !",
          });
        }
      );
  };

  return (
    <div className="w-full sm:w-11/12 lg:w-1/2 m-auto m-y-4 mt-14 mb-32">
      <Input
        label="Nom/Prénom"
        type="text"
        result={(result) => setName(result)}
        inputValue={isSend ? "" : name}
      />
      <Input
        label="Email"
        type="email"
        result={(result) => setEmail(result)}
        inputValue={isSend ? "" : email}
      />
      <Textarea
        label="Message"
        textareaValue={isSend ? "" : message}
        result={(result) => updateMessage(result)}
      />

      {message !== "" && name !== "" && email !== "" && isSend === false && (
        <div className="w-full flex justify-center">
          <Button onClick={sendEmail}> Envoyer </Button>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
