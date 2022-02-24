export const readLanguage = () => (
    JSON.parse(localStorage.getItem('language')) || 'EN'
  );

export const setLanguage = (language) => {
  localStorage.setItem('language', JSON.stringify(language));
};
