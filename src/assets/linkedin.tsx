import { SOCIALS } from '@constants/navigation';
const { LINKEDIN } = SOCIALS;

export const Linkedin = () => {
    return (
        <div className="h-[45px] md:h-[60px]">
            <a href={(LINKEDIN as unknown as string) ?? ''} target="_blank">
                <svg
                    width="auto"
                    height="auto"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <rect
                        width="80"
                        height="80"
                        fill="url(#linkedinpattern)"
                    ></rect>
                    <defs>
                        <pattern
                            id="linkedinpattern"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                        >
                            <use
                                xlinkHref="#image0_1_1155"
                                transform="scale(0.01)"
                            ></use>
                        </pattern>
                        <image
                            id="image0_1_1155"
                            width="100"
                            height="100"
                            xlinkHref="data:image/png;base64,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"
                        />
                    </defs>
                </svg>
            </a>
        </div>
    );
};
