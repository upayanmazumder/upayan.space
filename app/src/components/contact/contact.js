import React, { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    imageUrl: '',
    message: 'Hi Upayan, I wanted to say...',
    loading: false,
    successMessage: null,
    error: null,
  });

  const submitForm = async () => {
    setForm((prevForm) => ({ ...prevForm, error: null, successMessage: null }));

    if (form.message.length > 200) {
      setForm((prevForm) => ({
        ...prevForm,
        error: 'Message exceeds the 200-character limit',
      }));
      return;
    }

    setForm((prevForm) => ({ ...prevForm, loading: true }));

    try {
      const response = await fetch('https://api.upayan.dev/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          longtext: form.message,
          imageUrl: form.imageUrl,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Server responded with an error');
      }

      setForm((prevForm) => ({
        ...prevForm,
        successMessage: 'Message sent successfully!',
      }));
    } catch (error) {
      console.error(`API request failed: ${error}`);
      setForm((prevForm) => ({ ...prevForm, error: error.message }));
    } finally {
      setForm((prevForm) => ({ ...prevForm, loading: false }));
    }
  };

  return (
    <details>
      <summary>Send me a message</summary>
      {form.loading && <p>Sending message...</p>}
      {form.error && (
        <p aria-live="assertive">
          An error occurred! <br /> {form.error}
        </p>
      )}
      {form.successMessage && (
        <p aria-live="polite">
          {form.successMessage}
        </p>
      )}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          aria-required="true"
          aria-describedby="message-info"
        />
        <p
          id="message-info"
          title="Large messages may fail to transfer!"
          className={
            form.message.length > 200 ? contactStyles.characterCountExceeded : ''
          }
        >
          <BsInfoCircle /> {form.message.length} characters
        </p>
      </div>
      <button
        onClick={submitForm}
        disabled={form.loading}
      >
        Send Message
      </button>
    </details>
  );
};

export default ContactForm;