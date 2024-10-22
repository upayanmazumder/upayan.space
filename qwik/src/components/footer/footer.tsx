import { component$, useStylesScoped$ } from '@builder.io/qwik';
import footerStyles from './footer.css?inline';

export default component$(() => {

    useStylesScoped$(footerStyles);

    return (
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-links">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
                <div class="footer-social">
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <p class="footer-copy">&copy; {new Date().getFullYear()} Upayan. All rights reserved.</p>
            </div>
        </footer>
    );
});