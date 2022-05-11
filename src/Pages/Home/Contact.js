import React from "react";
import contBg from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <div className="mt-24" style={{ background: `url(${contBg})` }}>
      <h2 className="pt-12 text-xl font-bold text-primary text-center">
        Cotact Us
      </h2>
      <h3 className="mt-12 text-white text-center text-4xl">
        Stay Connected With Us
      </h3>
      <div className="flex justify-center">
        <div>
          <input
            className="align-middle block w-96 pl-2 mt-4 h-12"
            type="email"
            placeholder="Email Adderess"
          />
          <input
            className="align-middle block w-96 pl-2 mt-4 h-12"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="align-middle block w-96 mt-4 h-20"
            type="text"
            cols="20"
            rows="2"
          ></textarea>
          <div className="flex justify-center my-4">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
