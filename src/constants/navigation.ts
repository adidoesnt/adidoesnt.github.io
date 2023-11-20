export enum PAGE {
    HOME = 'home',
    ABOUT = 'about',
    RESUME = 'resume',
    PROJECTS = 'projects',
    // BLOG = 'blog',
    ACK = 'acknowledgements'
}

const {
    PUBLIC_FACEBOOK_URL,
    PUBLIC_GITHUB_URL,
    PUBLIC_EMAIL,
    PUBLIC_INSTAGRAM_URL,
    PUBLIC_LINKEDIN_URL
} = import.meta.env;

export enum SOCIALS {
    FACEBOOK = PUBLIC_FACEBOOK_URL,
    GITHUB = PUBLIC_GITHUB_URL,
    EMAIL = PUBLIC_EMAIL,
    INSTAGRAM = PUBLIC_INSTAGRAM_URL,
    LINKEDIN = PUBLIC_LINKEDIN_URL
}

const { HOME, ABOUT, RESUME, /*BLOG,*/ ACK, PROJECTS } = PAGE;

export const pages: Array<PAGE> = [
    HOME,
    ABOUT,
    RESUME,
    /*BLOG,*/ PROJECTS,
    ACK
];

export const getName = (page: PAGE) => {
    return `${page.charAt(0).toUpperCase()}${page.slice(1, page.length)}`;
};

export const getPath = (page: PAGE) => {
    if (page === 'home') return '/';
    return `/${page}`;
};
