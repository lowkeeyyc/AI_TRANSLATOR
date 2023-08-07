document.addEventListener('DOMContentLoaded', function() {
    const ownerSection = document.querySelector('.owner-preference');
    const languageSection = document.querySelector('.language-preference');
     
    ownerSection.style.display = 'block';


    const businessChoice = document.getElementById('business-box');
    const travelChoice = document.getElementById('travel-box');
    const educationChoice = document.getElementById('education-box');
    const shoppingChoice = document.getElementById('shopping-box');
    const generalChoice = document.getElementById('general-box');

    businessChoice.addEventListener('click', function() {
        ownerSection.style.transform = 'translateX(-100%)';
        languageSection.style.transform = 'translateX(0)';
    });
    travelChoice.addEventListener('click', function() {
        ownerSection.style.transform = 'translateX(-100%)';
        languageSection.style.transform = 'translateX(0)';
    });
    educationChoice.addEventListener('click', function() {
        ownerSection.style.transform = 'translateX(-100%)';
        languageSection.style.transform = 'translateX(0)';
    });
    shoppingChoice.addEventListener('click', function() {
        ownerSection.style.transform = 'translateX(-100%)';
        languageSection.style.transform = 'translateX(0)';
    });
    generalChoice.addEventListener('click', function() {
        ownerSection.style.transform = 'translateX(-100%)';
        languageSection.style.transform = 'translateX(0)';
    });


});
