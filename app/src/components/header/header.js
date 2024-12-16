import React from 'react';
import Image from "next/image";
import headerStyles from './header.module.css';
import navbar from '../navbar/navbar';
import Navbar from '../navbar/navbar';
const Header = () => {
    return (
        <div class={headerStyles.header}>
            <Image
                src="/upayan-transparent.svg"
                alt="Upayan"
                width={120}
                height={120}
                priority
            />
            <Navbar />
        </div >
    );
};

export default Header;