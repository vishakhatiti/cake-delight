import React from "react";

import { Clock3 } from "lucide-react";

import { business } from "../data/business";

function OpeningHours() {
  return (
    <section className="section hours-section">
      <div className="container hours-grid">
        <div>
          <p className="eyebrow">Opening Hours</p>

          <h2>
            Open <em>Daily.</em>
          </h2>

          <div className="hours-intro">
            <Clock3 size={20} />
            <span>
              10:00 AM – 12:00 AM
            </span>
          </div>
        </div>

        <div className="hours-list">
          {business.hours.map((item) => (
            <div
              className="hours-row"
              key={item.day}
            >
              <span>{item.day}</span>
              <strong>{item.time}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpeningHours;