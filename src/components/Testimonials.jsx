import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials">
      {/* Container */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage
        </h2>
        {/* Testimonials */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial #1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img
              src="images/avatar-anisha.png"
              className="w-16 -mt-14"
              alt=""
            />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Manage has supercharged our team's workglow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
