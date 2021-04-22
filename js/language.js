const languages = document.querySelector('.languages');
const languageNames = document.querySelectorAll('.languages p');

const languagesMobile = document.querySelector('.languagesMobile');
const languageMobileNames = document.querySelectorAll('.languagesMobile p')

languageNames.forEach(language => {
    language.addEventListener('click', () => {
        languages.querySelector('.activeLanguage').classList.remove('activeLanguage');
        language.classList.add('activeLanguage')
    })
})

languageMobileNames.forEach(language => {
    language.addEventListener('click', () => {
        languagesMobile.querySelector('.activeLanguage').classList.remove('activeLanguage');
        language.classList.add('activeLanguage')
    })
})