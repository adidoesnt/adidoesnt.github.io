import type { Album, Track } from '@pages/api/getAlbums';

export type ModalProps = Partial<Album> & {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const Modal = ({
    images,
    name,
    tracks,
    release_date,
    external_urls,
    isOpen,
    setIsOpen
}: ModalProps) => {
    const refImage = images![1];
    const { url } = refImage;
    const handleClick = () => setIsOpen(false);

    return isOpen ? (
        <div className="flex fixed flex-col inset-0 items-center justify-center z-10 bg-[#161923] bg-opacity-75 backdrop-blur-md text-center">
            <div className="flex flex-col gap-4 p-4 rounded-md bg-blue">
                <button
                    id="closeModalButton"
                    onClick={handleClick}
                    className="self-end text-sm text-wisp"
                >
                    Close
                </button>
                <div>
                    <img
                        src={url}
                        alt={`${name} album cover`}
                        className={`w-[${images![0].width}px] md:w-[${
                            images![1].width
                        }px] lg:w-[${images![2].width}px]`}
                    />
                    <br />
                    <h3 className="font-semibold text-base">{name}</h3>
                    <p className="text-sm">{release_date}</p>
                </div>
                <hr />
                <div className="flex flex-col gap-1">
                    {tracks?.map((track: Track) => {
                        const { name } = track;
                        return <p className="text-sm">{name}</p>;
                    })}
                </div>
            </div>
        </div>
    ) : null;
};
