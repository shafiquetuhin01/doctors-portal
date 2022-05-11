import React from "react";
import treatment from "../../assets/images/treatment.png";

const SpecialService = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialService;
