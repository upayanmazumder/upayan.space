import { component$ } from '@builder.io/qwik';
import heroStyles from './details.module.css';
import Infobox from "../../components/infobox/infobox";

export default component$(() => {

    return (
        <div class={heroStyles.hero}>
            <div id="about" class={heroStyles.card}>
                <Infobox>
                    <span q:slot="title">About Me</span>
                    <p>
                    I'm Upayan, a 19-year-old student currently pursuing a BTech in Computer Science 
                    with a specialization in Data Science at VIT Vellore. I have a deep passion for programming 
                    and love exploring various technologies. My areas of interest range from web development to 
                    data science, and I'm always excited to work on new projects and expand my skillset.
                    </p>
                </Infobox>
            </div>

            <div id="services" class={heroStyles.card}>
                <Infobox>
                    <span q:slot="title">Services</span>
                    <p>
                    I primarily focus on web development, but I also have experience in Discord bot development. 
                    Recently, I've been diving into Data Structures and Algorithms (DSA) and AI/ML projects. 
                    In addition, I spend time experimenting with electronics, including the ESP32 microcontroller, 
                    and I’m looking forward to learning more about Arduino and Raspberry Pi.
                    </p>
                </Infobox>
            </div>
            
            <div id="contact" class={heroStyles.card}>
                <Infobox>
                    <span q:slot="title">Contact</span>
                    <p>
                    Feel free to get in touch with me at <a href="mailto:contact@upayan.space">contact@upayan.space</a>.
                    </p>
                </Infobox>
            </div>
        </div>
    );
});