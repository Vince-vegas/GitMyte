import langObj from './langObj.json';

export const onDetectColor = (lang) => {
    const obj = langObj;
    if (obj.hasOwnProperty(lang)) {
        return obj[lang];
    } else if (lang === 'C++') {
        return '#f34b7d';
    }

    // when the lang param is null
    return 'blue';
};
