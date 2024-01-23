import React  from "react";
import { useRef } from "react";


function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
