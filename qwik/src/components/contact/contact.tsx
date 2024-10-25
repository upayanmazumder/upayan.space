import { component$, useStore, $ } from "@builder.io/qwik";
import contactStyles from './contact.module.css';
import { BsInfoCircle } from "@qwikest/icons/bootstrap";

interface ContactForm {
    name: string;
    email: string;
    message: string;
    loading: boolean;
    successMessage: string | null;
    error: string | null;
}

export default component$(() => {
    const form = useStore<ContactForm>({
        name: '',
        email: '',
        message: 'Hey there! Just wanted to say that...',
        loading: false,
        successMessage: null,
        error: null,
    });

    const submitForm = $(async () => {
        if (form.message.length > 200) {
            form.error = 'Message exceeds the 200 character limit';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            form.error = 'Invalid email address';
            return;
        }

        if (!form.name.trim()) {
            form.error = 'Name is required';
            return;
        }

        form.loading = true;
        form.error = null;
        form.successMessage = null;

        try {
            const response = await fetch('https://upayan-statistics-api.upayan.space/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    longtext: form.message,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            form.successMessage = 'Message sent successfully!';
        } catch (error) {
            form.error = 'Failed to send message: ' + (error as Error).message;
        } finally {
            form.loading = false;
        }
    });

    return (
        <details class="container">
            <summary>Send me a message</summary>
            {form.loading && <p>Sending message...</p>}
            {form.error && <p class="error" aria-live="assertive">Error: {form.error}</p>}
            {form.successMessage && <p class="success" aria-live="polite">{form.successMessage}</p>}

            <div class={contactStyles.formGroup}>
                <label for="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={form.name}
                    onInput$={(e) => (form.name = (e.target as HTMLInputElement).value)}
                    aria-required="true"
                />
            </div>

            <div class={contactStyles.formGroup}>
                <label for="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={form.email}
                    onInput$={(e) => (form.email = (e.target as HTMLInputElement).value)}
                    aria-required="true"
                />
            </div>

            <div class={contactStyles.formGroup}>
                <label for="message">Message:</label>
                <textarea
                    id="message"
                    value={form.message}
                    onInput$={(e) => (form.message = (e.target as HTMLTextAreaElement).value)}
                    aria-required="true"
                />
                <p title="Large messages may fail to transfer!"><BsInfoCircle /> {form.message.length} characters</p>
            </div>

            <button onClick$={submitForm} disabled={form.loading} class={contactStyles.button}>
                Send Message
            </button>
        </details>
    );
});
