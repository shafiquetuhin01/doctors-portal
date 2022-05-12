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
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary ">Booking for: {name}</h3>
          <form onSubmit={modalSubmit} className="grid grid-cols-1 gap-2 justify-items-center mt-3">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              placeholder="your email"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="+880"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
