import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

function Contact(props) {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ls0v27g",
        "template_qmrlfol",
        form.current,
        "pGR69NPN7RPx8cgSV"
      )
      .then(
        (result) => {
          toast.success("Message envoyer");
        },
        (error) => {
          console.log("erreur");
        }
      );
  };
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="content">
        <p>
          N'hésitez pas à me contacter en utilisant le formulaire ci-dessous.
          J'attends de vos nouvelles avec impatience !
        </p>
      </div>
      <>
        <Toaster />
      </>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Nom" />

        <input type="email" name="user_email" placeholder="Adresse mail" />

        <textarea name="message" placeholder="Message" />
        <input className="btn" type="submit" value="Envoyer" />
      </form>
    </section>
  );
}

export default Contact;
