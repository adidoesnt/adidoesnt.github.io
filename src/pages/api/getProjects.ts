export const prerender = false;

import type { AstroGlobal } from 'astro';

const { GH_TOKEN, GH_USERNAME, GH_REPOS_PER_PAGE } = process.env;
const token = GH_TOKEN ?? '';
const username = GH_USERNAME ?? '';
const reposPerPage = parseInt(GH_REPOS_PER_PAGE ?? '100');

export type Repository = unknown & {
    name: string;
    description: string;
    html_url: string;
};

const GET = async (_: Readonly<AstroGlobal>) => {
    const URI = `https://api.github.com/users/${username}/repos?per_page=${reposPerPage}`;
    const authHeader = `token ${token}`;
    const headers = {
        Authorization: authHeader
    };
    const response = await fetch(URI, {
        method: 'GET',
        headers
    });
    const data = (await response.json()) as Array<Repository>;
    const repos = data.map((repo: Repository) => {
        const { name, description, html_url } = repo;
        return {
            name,
            description,
            html_url
        };
    });
    return new Response(JSON.stringify(repos), {
        status: 200
    });
};

export default GET;
