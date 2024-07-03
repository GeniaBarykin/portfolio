import i18n from 'i18next';
import global_en from "./en/global.json"
import global_ru from "./ru/global.json"

i18n.init({
  interpolation: {escapeValue: false,
},
lng: "ru",
resources: {
  ru: {
    global: global_ru
  },
  en: {
    global: global_en
  }
    }
}, (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key');
}
)
export default i18n;