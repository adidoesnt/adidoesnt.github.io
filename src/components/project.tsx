import type { Repository } from '@api/getProjects';
import { Link } from '@assets/link';

const defaultDescription = 'This project has no description.';

export const Project = ({ name, description, html_url }: Repository) => {
    return (
        <div className="flex flex-col gap-2 p-4 text-center rounded-sm min-h-[25dvh] overflow-y-auto bg-blue">
            <Link href={html_url} className="w-8 h-8" />
            <div>
                <h2 className="text-md font-bold">{name}</h2>
            </div>
            <hr className="w-[75%] self-center text-ellipsis" />
            <div>
                <p className={`text-sm ${!description && 'italic text-wisp'}`}>
                    {description ?? defaultDescription}
                </p>
            </div>
        </div>
    );
};
