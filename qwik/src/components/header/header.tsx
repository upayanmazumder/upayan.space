import { component$, useStylesScoped$ } from '@builder.io/qwik';
import headerStyles from './header.css?inline';
import Upayan from "../../media/upayan.svg";
import Navbar from "../navbar/navbar";

export default component$(() => {
    const title = 'Upayan';

    useStylesScoped$(headerStyles);

    return (
        <header class="header">
            <img src={Upayan} alt="Upayan" width="100" height="100"/>
            <h1 class="title">{title}</h1>
            <Navbar />
        </header>
    );
});