import React from 'react';
import Image from "next/image";
import headerStyles from './header.module.css';

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.icon}>
                <Image
                    src="/upayan.svg"
                    alt="Upayan"
                    width={80}
                    height={80}
                    priority
                />
            </div>
            <div className={headerStyles.text}>
                <h1>Upayan</h1>
            </div>
        </div>
    );
};

export default Header;