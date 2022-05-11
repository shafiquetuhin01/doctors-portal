import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>
          If a dog chews shoes whose shoes does he choose whose shoes does he
          choose?
        </p>
        <div class="card-actions justify-end  flex items-center">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
            
          </div>
          <div>
                <h2 className="text-xl">{review.name}</h2>
                <h3>{review.location}</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Review;