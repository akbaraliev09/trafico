import { useState } from "react";
import Img from "./Img.jsx";
import { faqs } from "../data.js";

const STEP = 6; 

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // открыт один вопрос; null = все закрыты
  const [visible, setVisible] = useState(STEP);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? null : i));
  const items = faqs.slice(0, visible).map((f, i) => ({ ...f, i }));
  const hasMore = visible < faqs.length;

  const renderItem = (f) => {
    const open = openIndex === f.i;
    return (
      <div key={f.i} className={`faq__item ${open ? "is-open" : ""}`}>
        <button aria-expanded={open} onClick={() => toggle(f.i)}>
          <span>{f.q}</span>
          <i aria-hidden="true">{open ? "−" : "+"}</i>
        </button>
        {open && <p>{f.a}</p>}
      </div>
    );
  };

  return (
    <section id="faq" className="faq">
      <div className="wrap faq__wrap">
        <Img name="faq.png" alt="Courier thinking" className="faq__img" />
        <h3 className="label">FAQ</h3>
        <h2>Questions and Answers on Professional Traffic Permits:</h2>

        <div className="faq__cols">
          <div className="faq__col">{items.filter((f) => f.i % 2 === 0).map(renderItem)}</div>
          <div className="faq__col">
            {items.filter((f) => f.i % 2 === 1).map(renderItem)}
            {hasMore && (
              <button className="faq__more" onClick={() => setVisible((v) => Math.min(v + STEP, faqs.length))}>
                LOAD MORE <i aria-hidden="true">+</i>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
