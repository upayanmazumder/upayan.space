import { component$, useStylesScoped$ } from '@builder.io/qwik';
import footerStyles from './footer.css?inline';
import SocialMediaIcons from "../social-media/personal/personal";

export default component$(() => {
    useStylesScoped$(footerStyles);

    return (
        <footer class="footer">
            <SocialMediaIcons/>
            <p class="footer-copy">&copy; {new Date().getFullYear()} Upayan. All rights reserved.</p>
        </footer>
    );
});