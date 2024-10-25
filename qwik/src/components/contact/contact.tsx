import { component$, useStore, $ } from "@builder.io/qwik";
import contactStyles from './contact.module.css';
import { BsInfoCircle } from "@qwikest/icons/bootstrap";
interface ContactStore {
    name: string;
    email: string;
    message: string;
    loading: boolean;
    successMessage: string | null;
    error: string | null;
}

export default component$(() => {
    const store = useStore<ContactStore>({
        name: '',
        email: '',
        message: 'Hey there! Just wanted to say that...',
        loading: false,
        successMessage: null,
        error: null,
    });

    const submitForm = $(async () => {
        if (store.message.length > 200) {
            store.error = 'Message exceeds the 200 character limit';
            return;
        }

        store.loading = true;
        store.error = null;
        store.successMessage = null;

        try {
            await fetch('https://upayan-statistics-api.upayan.space/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: store.name,
                    email: store.email,
                    longtext: store.message,
                }),
            });

            store.successMessage = 'Message sent successfully!';
        } catch (error) {
            store.error = 'Failed to send message';
        } finally {
            store.loading = false;
        }
    });

    return (
        <details class="container">
            <summary>Send me a message</summary>
            {store.loading && <p>Sending message...</p>}
            {store.error && <p class="error">Error: {store.error}</p>}
            {store.successMessage && <p class="success">{store.successMessage}</p>}

            <div class={contactStyles.formGroup}>
                <label>Name:</label>
                <input
                    type="text"
                    value={store.name}
                    onInput$={(e) => (store.name = (e.target as HTMLInputElement).value)}
                />
            </div>

            <div class={contactStyles.formGroup}>
                <label>Email:</label>
                <input
                    type="email"
                    value={store.email}
                    onInput$={(e) => (store.email = (e.target as HTMLInputElement).value)}
                />
            </div>

            <div class={contactStyles.formGroup}>
                <label>Message:</label>
                <textarea
                    value={store.message}
                    onInput$={(e) => (store.message = (e.target as HTMLTextAreaElement).value)}
                />
                <p title="Large messages may fail to transfer!"><BsInfoCircle /> {store.message.length} characters</p>
            </div>

            <button onClick$={submitForm} disabled={store.loading} class={contactStyles.button}>
                Send Message
            </button>
        </details>
    );
});
