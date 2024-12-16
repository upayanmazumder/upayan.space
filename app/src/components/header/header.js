import React from 'react';
import Image from "next/image";

const Header = () => {
    return (
        <div>
            <div>
                <Image
                    src="/upayan.svg"
                    alt="Upayan"
                    width={80}
                    height={80}
                    priority
                />
            </div>
            <div>
                <h1>Upayan</h1>
            </div>
        </div>
    );
};

export default Header;