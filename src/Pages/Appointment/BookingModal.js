import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const [user, loading, error] = useAuthState(auth);
  const { name, slots, _id } = treatment;
  const modalSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id, name, slot);
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
          <h3 className="font-bold text-lg text-secondary ">
            Booking for: {name}
          </h3>
          <form
            onSubmit={modalSubmit}
            className="grid grid-cols-1 gap-2 justify-items-center mt-3"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              disabled
              value={user?.displayName}
              type="text"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              value={user?.email}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              value={user?.phone}
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
