import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import moment from 'moment';

let language = 'ru';
if (window.localStorage.getItem('lang')) {
	language = window.localStorage.getItem('lang');
	moment.locale(language);
}
i18next.use(initReactI18next).init({lng: language}).then(() => {});

export const addTranslation = (translations) => {
	for (const lang of Object.keys(translations)) {
		i18next.addResources(lang, 'translation', translations[lang]);
	}
};
