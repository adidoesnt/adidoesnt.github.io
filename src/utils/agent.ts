export const isSafari = /^((?!chrome|android).)*safari/i.test(
    navigator.userAgent
);
export const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

export const isApple = isSafari || isIOS;
