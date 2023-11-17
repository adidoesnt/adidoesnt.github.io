import { MobileNavigationMenu } from './mobileNavigationMenu.tsx';
import { Hamburger as HamburgerIcon } from '@assets/hamburger';
import { useState } from 'react';

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => setIsOpen(true);

    return (
        <div className="flex lg:hidden h-[30px] md:h-[40px]">
            <button id="hamburgerButton" onClick={handleClick}>
                <HamburgerIcon />
            </button>
            <MobileNavigationMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};
