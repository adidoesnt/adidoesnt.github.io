import { pages, getName, getPath } from '@constants/navigation';

export type MobileNavigationMenuProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const MobileNavigationMenu = ({
    isOpen,
    setIsOpen
}: MobileNavigationMenuProps) => {
    const handleClick = () => setIsOpen(false);

    return isOpen ? (
        <div
            id="mobileNav"
            className="flex fixed flex-col inset-0 items-center justify-center z-10 bg-[#161923] bg-opacity-75 backdrop-blur-md text-center text-lg"
        >
            {pages.map((page) => {
                const name = getName(page);
                const path = getPath(page);
                return (
                    <a key={name} href={path}>
                        <span>{name}</span>
                    </a>
                );
            })}
            <button
                id="closeHamburgerButton"
                className="absolute right-0 top-0 m-10"
                onClick={handleClick}
            >
                Close
            </button>
        </div>
    ) : null;
};
