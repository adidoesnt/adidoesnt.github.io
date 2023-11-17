import { SOCIALS } from '@constants/navigation';
const { EMAIL } = SOCIALS;

export const Gmail = () => {
    return (
        <div className="h-[45px] md:h-[60px]">
            <a href={(EMAIL as unknown as string) ?? ''}>
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
                        fill="url(#gmailpattern)"
                    ></rect>
                    <defs>
                        <pattern
                            id="gmailpattern"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                        >
                            <use
                                xlinkHref="#image0_1_1157"
                                transform="scale(0.01)"
                            ></use>
                        </pattern>
                        <image
                            id="image0_1_1157"
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
