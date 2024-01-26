import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

function Contact(props) {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function Form({ onSubmit }) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      if (onSubmit) {
        onSubmit();
      }

      setIsSubmitting(false);
    };
  };

  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          toast.success("Message envoyé");
        },
        (error) => {
          console.log("erreur", error);
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
      <form onSubmit={sendEmail} ref={form}>
        <input
          type="text"
          name="user_name"
          placeholder="Nom"
          value={formData.user_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Adresse mail"
          value={formData.user_email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <input className="btn" type="submit" value="Envoyer" />
      </form>
    </section>
  );
}

export default Contact;
