import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary justify-center">{name}</h2>
        <p className="text-center">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">
              No slot available. Please try another day.
            </span>
          )}
        </p>
        <p className="text-center">
          {slots.length} {slots.length >= 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="modal-button btn btn-secondary text-white uppercase"
          >
            book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
