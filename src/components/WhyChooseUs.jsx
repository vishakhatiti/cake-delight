import React from "react";

import {
  CakeSlice,
  Heart,
  Sparkles,
  UsersRound
} from "lucide-react";

const features = [
  {
    icon: CakeSlice,
    title: "Fresh Taste",
    text: "Customers regularly mention the freshness and taste of the cakes."
  },
  {
    icon: Sparkles,
    title: "Beautiful Designs",
    text: "Reviews highlight cakes that match the expected design beautifully."
  },
  {
    icon: Heart,
    title: "Celebration Cakes",
    text: "A local choice for birthdays and other special celebrations."
  },
  {
    icon: UsersRound,
    title: "Friendly Service",
    text: "Customer feedback frequently mentions friendly and genuine service."
  }
];

function WhyChooseUs() {
  return (
    <section className="section soft-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Why Cake Delight</p>

          <h2>
            The details customers
            <br />
            <em>remember.</em>
          </h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="feature-card"
                key={feature.title}
              >
                <span className="feature-icon">
                  <Icon size={22} strokeWidth={1.6} />
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;