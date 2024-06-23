import React, {useState, useRef, useLayoutEffect} from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false)
  const [enable, setEnable] = useState(false)

  const [loading, setLoading] = useState(false);

  const intersectionCallback = (entries) => {
    for (const entry of entries) { 
      if (entry.isIntersecting) { // This is true when the element is in view.
        entry.target.classList.add('show'); 
      } 
    }
  }
  const observer = new IntersectionObserver(intersectionCallback);
  function checkIfVisible(){
    const items = document.querySelectorAll('.contact-wrapper');
    for (const item of items) {
      observer.observe(item);
    }
  }  
  useLayoutEffect(() => {

    window.addEventListener('scroll', checkIfVisible)
  
    return () => window.removeEventListener('scroll', checkIfVisible)
  
  }, [])
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    if (name==="email"){
      const validated = validateEmail(value);
      setError(!validated)
      setEnable(validated)
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_6rhhau9',
        'template_35dpnjd',
        {
          from_name: form.name,
          to_name: "Евгений Барыкин",
          from_email: form.email,
          to_email: "barykin.developer@gmail.com",
          message: form.message,
        },
        'NtW7JA8J3BrqMyQC4'
      )
      .then(
        () => {
          setLoading(false);
          alert("Спасибо!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  }
  return (
    <section id='contact'>
      <div className='contact-wrapper'>
          <h3 className="contact-header">Связаться со мной</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='contact-form'
          >
            <label className='contact-name'>
              <span className='contact-info'>Ваше имя</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className='contact-name-input'
              />
            </label>
            <label className='contact-email'>
              <span className='contact-info'>Ваш email {error ? <div className="contact-error">введен неверно</div> : <div></div>}</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Ваш еmail"
                className='contact-email-input'
              />
            </label>
            <label className='contact-message'>
              <span className='contact-info'>Сообщение</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Ваше сообщение'
                className='contact-message-input'
              />
            </label>

            <button
              type='submit'
              className={enable? "contact-form-subbmit active" : "contact-form-subbmit"}
              disabled={!enable}
            >
              {loading ? "Отсылаю..." : "Отослать"}
            </button>
          </form>
        </div>
    </section>
  )
}

export default Contact
