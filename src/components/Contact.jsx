import { useState } from "react";
import Img from "./Img.jsx";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
    setSent(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name";
    if (!EMAIL_RE.test(form.email.trim())) next.email = "Enter a valid email address";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setForm({ name: "", email: "" });
    }
  };

  return (
    <section id="contact" className="cta">
      <Img name="cta-truck.png" alt="" className="cta__truck" />
      <div className="wrap cta__grid">
        <p className="cta__text">
          We provide traffic management consultants so you get started quickly, contact us for a quote today!
        </p>
        <form className="form" onSubmit={onSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={onChange} placeholder="Your name"
            className={errors.name ? "has-error" : ""} />
          {errors.name && <small role="alert">{errors.name}</small>}

          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={onChange}
            placeholder="Your email address" className={errors.email ? "has-error" : ""} />
          {errors.email && <small role="alert">{errors.email}</small>}

          <button type="submit" className="btn">Get started &nbsp;⟶</button>
          {sent && <span className="form__ok" role="status">Thanks! We’ll send your quote soon.</span>}
        </form>
      </div>
    </section>
  );
}
