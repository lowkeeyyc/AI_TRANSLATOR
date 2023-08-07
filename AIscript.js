// Add your JavaScript code for handling user interactions and functionality here
// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  const homeScreen = document.getElementById('HomeScreen');

  homeScreen.style.display = 'block';
  
  const translateText = document.getElementById('translate-btn');
  const textInput = document.getElementById('text-input');
  const textOutput = document.querySelector('.text-output');
    
  translateText.addEventListener('click', function() {
    const textToTranslate = textInput.value;
    // Implement translation logic here using appropriate API or library

    // Update the translated text output
    textOutput.textContent = translatedTextValue;
  });
  translateImage.addEventListener('click', function() {
    const imageToTranslate = textInput.value;
    // Implement translation logic here using appropriate API or library

    // Update the translated text output
    textOutput.textContent = translatedTextValue;
  });
  translateVoice.addEventListener('click', function() {
    const voiceToTranslate = textInput.value;
    // Implement translation logic here using appropriate API or library

    // Update the translated text output
    textOutput.textContent = translatedTextValue;
  });




















});