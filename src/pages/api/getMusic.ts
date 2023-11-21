export const prerender = false;

import type { AstroGlobal } from 'astro';

const GET = async (_: Readonly<AstroGlobal>) => {
    return new Response(null, {
        status: 200
    });
};

export default GET;
