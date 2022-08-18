import { ruRU } from '@mui/material/locale';

export default function(i18n) {
    let lang = i18n.language;
    let locale = ruRU;
    if (lang === 'kk') {
        locale = JSON.parse(JSON.stringify(ruRU));
    }
    return { lang, locale }
}
