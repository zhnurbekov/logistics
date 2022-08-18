import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

let language = 'ru';
i18next.use(initReactI18next).init({lng: language}).then(() => {});

export const addTranslation = (translations) => {
	for (const lang of Object.keys(translations)) {
		i18next.addResources(lang, 'translation', translations[lang]);
	}
};
