import { useRef } from "react";
import Img from "./Img.jsx";
import { reviews } from "../data.js";

export default function Clients() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".review");
    const step = card ? card.offsetWidth + 20 : 280;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="section">
      <div className="wrap">
        <div className="clients__head">
          <h3 className="label label--underline">About us</h3>
          <div className="arrows">
            <button aria-label="Previous reviews" onClick={() => scroll(-1)}>←</button>
            <button aria-label="Next reviews" onClick={() => scroll(1)}>→</button>
          </div>
        </div>
        <div className="clients">
          <h2>Our Awesome Clients</h2>
          <div className="track" ref={trackRef}>
            {reviews.map((r) => (
              <article key={r.name} className="review">
                <p>{r.text}</p>
                <div className="review__who">
                  <Img name="avatar.png" alt={r.name} className="avatar" />
                  {r.name}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
