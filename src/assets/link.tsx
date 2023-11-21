import { isApple } from '@utils/agent';
import link from './fallbacks/link.png';

export type LinkProps = {
    href: string;
    className: string;
};

export const Link = ({ href, className }: LinkProps) => {
    return (
        <a target="_blank" href={href} className={className}>
            {isApple ? (
                <img
                    src={link.src}
                    alt="Gmail Icon"
                    className="w-8 h-8"
                />
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="auto"
                    height="auto"
                >
                    <path fill="#BBDEFB" d="M6 10H38V42H6z" />
                    <path fill="#3F51B5" d="M42 6L42 21 27 6z" />
                    <path
                        fill="#3F51B5"
                        d="M26.132 10.368H34.133V25.368000000000002H26.132z"
                        transform="rotate(45.001 30.132 17.868)"
                    />
                </svg>
            )}
        </a>
    );
};
