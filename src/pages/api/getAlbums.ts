export const prerender = false;

import type { AstroGlobal } from 'astro';
import axios from 'axios';

export type CoverImage = {
    height: number;
    url: string;
    width: number;
};

export type Track = {
    id: string;
    name: string;
    track_number: number;
    preview_url: string;
    external_urls: {
        spotify: string;
    };
    duration_ms: number;
};

export type Album = {
    id: string;
    name: string;
    release_date: string;
    external_urls: {
        spotify: string;
    };
    uri: string;
    images: Array<CoverImage>;
    tracks?: Array<Track>;
};

const {
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET,
    SPOTIFY_ARTIST_ID,
    SPOTIFY_TOKEN_ENDPOINT
} = process.env;

const clientId = SPOTIFY_CLIENT_ID ?? '';
const clientSecret = SPOTIFY_CLIENT_SECRET ?? '';
const artistId = SPOTIFY_ARTIST_ID ?? '';
const tokenEndpoint = SPOTIFY_TOKEN_ENDPOINT ?? '';

export const getToken = async () => {
    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
        'base64'
    );
    try {
        const response = await axios.post(
            tokenEndpoint,
            {},
            {
                headers: {
                    Authorization: `Basic ${credentials}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    grant_type: 'client_credentials'
                }
            }
        );
        const { data } = response;
        const { access_token: token } = data;
        return token as string;
    } catch (error) {
        console.error(error);
    }
};

const getAlbums = async (token?: string) => {
    if (!token) return;
    const uri = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    try {
        const response = await axios.get(uri, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const { data } = response;
        const { items: albums } = data;
        return albums;
    } catch (error) {
        console.error(error);
    }
};

const getTracks = async (token?: string, albumId?: string) => {
    if (!token || !albumId) return;
    const uri = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
    try {
        const response = await axios.get(uri, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const { data } = response;
        const { items } = data;
        const tracks = items?.map((item: Track) => {
            const { id, name, track_number, preview_url, external_urls, duration_ms } = item;
            return {
                id,
                name,
                track_number,
                preview_url,
                external_urls,
                duration_ms
            };
        });
        return tracks;
    } catch (error) {
        console.error(error);
    }
};

const GET = async (_: Readonly<AstroGlobal>) => {
    const token = await getToken();
    const data = (await getAlbums(token)) as Array<Album>;
    const albums = (await Promise.all(
        data.map(async (album) => {
            const { id, name, uri, release_date, external_urls, images } =
                album;
            const tracks = await getTracks(token, id);
            return {
                id,
                name,
                uri,
                release_date,
                external_urls,
                images,
                tracks
            };
        })
    )) as Array<Album>;
    return new Response(JSON.stringify(albums), {
        status: 200
    });
};

export default GET;
