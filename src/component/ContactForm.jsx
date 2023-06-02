import { useState, useRef, useEffect } from "react";
import styles from "../styles/index.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef(null);

  useEffect(() => {
    const handIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.scrollVisible);
          entry.target.classList.remove(styles.scroollHidden);
        } else {
          entry.target.classList.remove(styles.scrollVisible);
          entry.target.classList.add(styles.scroollHidden);
        }
      });
    };
    const observer = new IntersectionObserver(handIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const ContactForm = document.querySelector(`.${styles.ContactForm}`);
    if (ContactForm) {
      observer.observe(ContactForm);
    }

    return () => {
      if (ContactForm) {
        observer.unobserve(ContactForm);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    console.log("Formulario enviado");
    e.preventDefault();
    if (typeof window === "undefined") {
      // Código de envío de correo electrónico solo en el lado del servidor
      // const sgMail = require("@sendgrid/mail");
      // sgMail.setApiKey(process.env.API_KEY);

      const msg = {
        to: "recipient@example.com",
        from: "sender@example.com",
        subject: "Example Subject",
        text: "Example email body",
      };

      try {
        await sgMail.send(msg);
        console.log("El email se ha enviado correctamente");
      } catch (error) {
        console.error("Error al enviar el email:", error);
      }
    } else {
      // Lógica para mostrar un mensaje en el cliente indicando que el formulario no se puede enviar desde el navegador
      // const messageElement = document.createElement("p");
      // messageElement.textContent =
      //   "El formulario no se puede enviar desde el navegador. Por favor, inténtelo en otro momento.";
      // document.body.appendChild(messageElement);
      alert("skate or die no se puedo enviar");
    }
  };

  return (
    <form className={styles.ContactForm} ref={formRef} onSubmit={handleSubmit}>
      <h3>Contact</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
