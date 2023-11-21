import type { Album, Track } from '@pages/api/getAlbums';
import { useCallback } from 'react';

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
    const { spotify: href } = external_urls!;
    const handleClick = () => setIsOpen(false);

    const getDuration = useCallback((duration_ms: number) => {
        const minutes = Math.floor(duration_ms / 60000);
        const seconds = +((duration_ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, []);

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
                    <a href={href} target="_blank">
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
                    </a>
                </div>
                <hr />
                <div className="flex flex-col gap-1 text-left px-4">
                    {tracks?.map((track: Track) => {
                        const {
                            name,
                            external_urls,
                            track_number,
                            duration_ms
                        } = track;
                        const { spotify: href } = external_urls;
                        return (
                            <a href={href} target="_blank">
                                <p className="text-sm">
                                    {track_number}. {name}{' '}
                                    <i className="opacity-50">
                                        {getDuration(duration_ms)}
                                    </i>
                                </p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    ) : null;
};
