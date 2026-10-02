import React from "react";

import { ExternalLink, Star } from "lucide-react";

import { business } from "../data/business";
import { reviews } from "../data/reviews";

function Reviews() {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="reviews-top">
          <div>
            <p className="eyebrow">Customer Reviews</p>

            <h2>
              Loved for the
              <br />
              <em>taste &amp; design.</em>
            </h2>
          </div>

          <div className="rating-display">
            <span className="stars">★★★★★</span>

            <strong>{business.googleRating}</strong>

            <span>Google Rating</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article
              className="review-card"
              key={review.name}
            >
              <div className="review-stars">
                {Array.from({
                  length: review.rating
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    fill="currentColor"
                  />
                ))}
              </div>

              <blockquote>
                “{review.text}”
              </blockquote>

              <div className="review-author">
                <span>
                  {review.name.charAt(0)}
                </span>

                <strong>{review.name}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="center-action">
          <a
            href={business.googleMapsUrl}
            className="button button-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;