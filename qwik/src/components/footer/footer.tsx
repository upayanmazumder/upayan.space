import { component$, useStylesScoped$ } from '@builder.io/qwik';
import footerStyles from './footer.css?inline';
import SocialMediaIcons from "../social-media/personal/personal";

export default component$(() => {
    useStylesScoped$(footerStyles);

    return (
        <footer class="footer">
            <SocialMediaIcons/>
            <div class="footer-links">
                <a href="/p/terms-of-service" class="footer-link">Terms of Service  </a>
                <span class="spacer"> | </span>
                <a href="/p/privacy-policy" class="footer-link">  Privacy Policy</a>
            </div>
            <p class="footer-copy">&copy; {new Date().getFullYear()} Upayan</p>
        </footer>
    );
});