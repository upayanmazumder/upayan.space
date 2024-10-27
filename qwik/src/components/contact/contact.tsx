import { component$, useStore, $ } from "@builder.io/qwik";
import contactStyles from './contact.module.css';
import sessionStyles from "../auth/session/session.module.css";
import { BsInfoCircle } from "@qwikest/icons/bootstrap";
import { Form } from '@builder.io/qwik-city';
import { useSession, useSignIn } from '~/routes/plugin@auth';

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
    const signIn = useSignIn();
    const isSignedIn = !!session.value?.user;

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
            const response = await fetch('https://upayan-statistics-api.upayan.space/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    longtext: form.message,
                    imageUrl: form.imageUrl,
                }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            form.successMessage = 'Message sent successfully!';
        } catch (error) {
            form.error = `Failed to send message: ${(error as Error).message}`;
        } finally {
            form.loading = false;
        }
    });

    return (
        <details class={contactStyles.container}>
            <summary>Send me a message</summary>

            {form.loading && <p class={contactStyles.loading}>Sending message...</p>}
            {form.error && (
                <p class={contactStyles.error} aria-live="assertive">Error: {form.error}</p>
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
                <Form action={signIn} class={sessionStyles.form}>
                    <input type="hidden" name="providerId" value="google" />
                    <input type="hidden" name="options.redirectTo" value="/#certificates" />
                    <button aria-label="Sign in with Google">
                        Log in using Google
                    </button>
                </Form>
            )}
        </details>
    );
});
