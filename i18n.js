const i18n = () => {
  let lang = 'EN';

  return {
    getLang() {
      return lang;
    },
    setLang(newLang) {
      lang = newLang;
    },
  };
};

export default i18n();
