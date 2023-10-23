import React from "react";
import { MailIcon } from "@heroicons/react/solid";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Indian+Institute+of+Information+Technology,+Pune,+Ambegaon+Budruk,+Pune,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Ambegaon Budruk <br />
                Pune, Maharashtra 411041
              </p>
            </div>
            <div className="lg:w-2/3 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                bagra200chetan@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+91 78786-03706</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 items-center justify-center">
          <a href="mailto:bagra200chetan@gmail.com">
            <MailIcon className="inline-block w-20 mb-10" />
          </a>
        </div>
      </div>
      <div className="w-full py-4 text-white bg-blue flex justify-center items-center">
        <hr className="w-1/5 sm:w-1/4 lg:w-96 border-violet" />
        <p className="mx-3 md:mx-6 text-sm sm:text-xl font-light flex items-center">
          Made with
          <span role="img" aria-label="heart" className="mx-2 animate-pulse">
            ❤️
          </span>
          by &nbsp;
          <span style={{ color: "cyan" }}> Chetan </span>
        </p>
        <hr className="w-1/5 sm:w-1/4 lg:w-96 border-violet" />
      </div>
    </section>
  );
}
