import React from "react";
import { format } from "date-fns";
const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots, _id } = treatment;
  const modalSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id,name,slot);
    setTreatment(null);
  };
 
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary ">Booking for: {name}</h3>
          <form onSubmit={modalSubmit} className="grid grid-cols-1 gap-2 justify-items-center mt-3">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              placeholder="your email"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="+880"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
