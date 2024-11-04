// contact.tsx
import { component$, useStore, $ } from "@builder.io/qwik";
import contactStyles from './contact.module.css';
import { BsInfoCircle } from "@qwikest/icons/bootstrap";
import { useSession } from '~/routes/plugin@auth';
import { apiRequest } from '~/shared/api';

interface ContactForm {
    name: string;
    email: string;
    imageUrl: string;
    message: string;
    loading: boolean;
    successMessage: string | null;
    error: string | null;
}

export default component$(() => {
    const session = useSession();
    const isSignedIn = !!session.value?.user;

    const signIn = $(() => {
        window.location.href = '/a/signin';
    });

    const form = useStore<ContactForm>({
        name: session.value?.user?.name || '',
        email: session.value?.user?.email || '',
        imageUrl : session.value?.user?.image || '',
        message: 'Hi Upayan, I wanted to say... ',
        loading: false,
        successMessage: null,
        error: null,
    });

    const submitForm = $(async () => {
        form.error = null;
        form.successMessage = null;
    
        if (form.message.length > 200) {
            form.error = 'Message exceeds the 200-character limit';
            return;
        }
    
        form.loading = true;
    
        try {
            await apiRequest('/contact', 'POST', {
                name: form.name,
                email: form.email,
                longtext: form.message,
                imageUrl: form.imageUrl,
            });
            form.successMessage = 'Message sent successfully!';
        } catch (error) {
            form.error = `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`;
        } finally {
            form.loading = false;
        }
    });

    return (
        <details class={contactStyles.container}>
            <summary>Send me a message</summary>
            {form.loading && <p class={contactStyles.loading}>Sending message...</p>}
            {form.error && (
                <p class={contactStyles.error} aria-live="assertive">An error occurred! <br /> {form.error}</p>
            )}
            {form.successMessage && (
                <p class={contactStyles.success} aria-live="polite">{form.successMessage}</p>
            )}
            {isSignedIn ? (
                <>
                    <div class={contactStyles.formGroup}>
                        <label for="message">Message:</label>
                        <textarea
                            id="message"
                            value={form.message}
                            onInput$={(e) => (form.message = (e.target as HTMLTextAreaElement).value)}
                            aria-required="true"
                            aria-describedby="message-info"
                        />
                        <p
                            id="message-info"
                            title="Large messages may fail to transfer!"
                            class={form.message.length > 200 ? contactStyles.characterCountExceeded : ''}
                        >
                            <BsInfoCircle /> {form.message.length} characters
                        </p>
                    </div>
                    <button
                        onClick$={submitForm}
                        disabled={form.loading}
                        class={contactStyles.button}
                    >
                        Send Message
                    </button>
                </>
            ) : (
                <>
                    <p>You need to be logged in for this!</p>
                    <button onClick$={signIn}>
                        Sign In
                    </button>
                </>
            )}
        </details>
    );
});
