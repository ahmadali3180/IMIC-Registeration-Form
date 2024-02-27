import React from "react";

function Contact() {
  return (
    <section id="Contact" className="max-w-5xl mx-auto">
      <h1 className="text-primary text-3xl xs:text-2xl mb-8 italic text-center font-semibold">
        Contact Moderators
      </h1>
      <div className="sm:grid sm:grid-cols-2 gap-8 my-8 p-6 xs:flex xs:flex-col xs:justify-evenly xs:text-sm">
        <div className="flex flex-col gap-2 text-left">
          <p>
            Name:{" "}
            <span className="text-primary font-semibold">M. Asad Saeed</span>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:03221101697"
              className="text-primary font-semibold underline"
            >
              03221101697
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:muhammadasadsaeed9439@gmail.com"
              className="text-primary font-semibold underline"
            >
              muhammadasadsaeed9439@gmail.com
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <p>
            Name:{" "}
            <span className="text-primary font-semibold">Esha Fayyaz</span>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:03001699166"
              className="text-primary font-semibold underline"
            >
              03001699166
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:Eshafayyaz212@gmail.com"
              className="text-primary font-semibold underline"
            >
              Eshafayyaz212@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
