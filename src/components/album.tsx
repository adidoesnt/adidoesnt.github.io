import type { Album as AlbumType } from '@api/getMusic';

export type AlbumProps = Partial<AlbumType>;

export const Album = ({
    name,
    images,
    external_urls,
    release_date
}: AlbumProps) => {
    const { spotify: href } = external_urls!;
    const refImage = images![1];
    const { url } = refImage;

    return (
        <div className="flex flex-col items-center rounded-md bg-blue p-4 gap-4">
            <div>
                <img
                    src={url}
                    alt={`${name} album cover`}
                    className={`w-[${images![0].width}px] md:w-[${
                        images![1].width
                    }px] lg:w-[${images![2].width}px]`}
                />
            </div>
            <a target="_blank" href={href} className="text-center">
                <h3 className="font-semibold text-base">{name}</h3>
                <p className="text-sm">{release_date}</p>
            </a>
        </div>
    );
};
