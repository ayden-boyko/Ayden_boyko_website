"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { InView } from "react-intersection-observer";
import dynamic from "next/dynamic";

const email = dynamic(() => import("@emailjs/browser"), {
  loading: () => <p>Email Widget Loading</p>,
});

const ContactMe = (props) => {
  const { style } = props;
  const form = useRef();
  const [widgetStyle, setSyle] = useState(style);

  const sendEmail = (e) => {
    e.preventDefault();

    email
      .sendForm(
        process.env.SERVICE_CODE,
        process.env.TEMPLATE_CODE,
        form.current,
        process.env.USER_CODE
      )
      .then(
        (result) => {
          alert(result.text);
          document.getElementById("user_name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <InView
      as="div"
      id="email"
      onChange={(inView, entry) =>
        inView
          ? setSyle(
              widgetStyle.replace("invisible", "visible") + " animate-right"
            )
          : ""
      }
      className={widgetStyle}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" transition duration-1000 bg-white text-black translate-x-2 -translate-y-2 rounded-sm border-black border-2 p-2 dark:bg-slate-500 md:py-4 md:h-64 sm:h-60"
      >
        <label className="dark:text-white">Name</label>
        <br />
        <input
          type="text"
          name="user_name"
          id="user_name"
          className=" transition duration-1000 bg-white border-black rounded border text-black sm:w-5/6"
        />
        <br />
        <label className="dark:text-white">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          className=" transition duration-1000 bg-white border-black rounded border text-black sm:w-5/6"
        />
        <br />
        <label className="dark:text-white">Message</label>
        <br />
        <textarea
          name="message"
          id="message"
          className=" transition duration-1000 bg-white border-black rounded border w-2/3"
        />
        <br />
        <input
          type="submit"
          value="Send"
          className="transition duration-500 delay-100 rounded-sm border-black border p-1 hover:bg-gray-400 bg-white"
        />
        <br />
        <ReCAPTCHA
          size="normal"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          className="m-2 -translate-x-2 lg:visible min-[300px]:invisible"
        />
      </form>
    </InView>
  );
};

export default ContactMe;
