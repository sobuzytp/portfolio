import { useState } from "react";
import { useSettings } from "../context/SettingsContext";

const emptyForm = { name: "", email: "", subject: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const { t } = useSettings();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSent(false);
  };

  const validate = () => {
    const e = t.contact.errors;
    const found = {};
    if (!form.name.trim()) found.name = e.name;
    if (!form.email.trim()) found.email = e.email;
    else if (!emailPattern.test(form.email.trim())) found.email = e.emailInvalid;
    if (!form.subject.trim()) found.subject = e.subject;
    if (!form.message.trim()) found.message = e.message;
    return found;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
      setForm(emptyForm);
    } else {
      setSent(false);
    }
  };

  const field = (name, label, Tag = "input", extra = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <Tag
        id={name}
        name={name}
        value={form[name]}
        onChange={handleChange}
        aria-invalid={Boolean(errors[name])}
        {...extra}
      />
      {errors[name] && <p className="field__error">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact__wrap">
        <h2 className="section__title">{t.contact.title}</h2>
        <p className="section__subtitle">{t.contact.subtitle}</p>

        <form className="card contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            {field("name", t.contact.name, "input", { type: "text", autoComplete: "name" })}
            {field("email", t.contact.email, "input", { type: "email", autoComplete: "email" })}
          </div>
          {field("subject", t.contact.subject, "input", { type: "text" })}
          {field("message", t.contact.message, "textarea", { rows: 5 })}
          <button className="btn btn--primary" type="submit">
            {t.contact.send}
          </button>
          {sent && (
            <p className="success" role="status">
              {t.contact.success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
