import { cakeImages } from "../data/cakes";
import ImageFrame from "./ImageFrame";

function Gallery() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-heading gallery-heading">
          <div>
            <p className="eyebrow">Gallery</p>

            <h2>
              A little sweetness,
              <br />
              <em>beautifully captured.</em>
            </h2>
          </div>

          <p>
            Real cake photographs from Cake Delight
            Shewalewadi.
          </p>
        </div>

        <div className="gallery-grid">
          {cakeImages.map((item, index) => (
            <figure
              className={`gallery-item gallery-item-${index + 1}`}
              key={item.image}
            >
              <ImageFrame
                src={item.image}
                alt={item.alt}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;