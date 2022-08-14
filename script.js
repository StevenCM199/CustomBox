const colorSlider = document.querySelector('#color');
const sizeSlider = document.querySelector('#size');
const opacitySlider = document.querySelector('#opacity');
const blurSlider = document.querySelector('#blur');
const contrastSlider = document.querySelector('#contrast');
const brightnessSlider = document.querySelector('#brightness');
const saturationSlider = document.querySelector('#saturation');
const invertSlider = document.querySelector('#invert');
const borderRadiusSlider = document.querySelector('#border-radius');

const box = document.querySelector('.box');

let initColor = 'rbga(0, 0, 0, 0.5)';
let size = 0; 
let alpha = 1;

let red = 255;
let green = 255;
let blue = 255;

let blurs = 0;
let contrast = 50;
let brightness = 100; 
let saturate = 50; 
let invert = 0; 

const hexToRGB = (hex) => {
  red = parseInt(hex.substring(1, 3), 16);
  green = parseInt(hex.substring(3, 5), 16);
  blue = parseInt(hex.substring(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}


colorSlider.addEventListener('input' , (e) => {
  initColor = hexToRGB(e.target.value); 
  box.style.background = initColor; 
});

sizeSlider.addEventListener('input' , (e) => {
  size = e.target.value;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`; 
});

opacitySlider.addEventListener('input', (e) =>{
  alpha = (e.target.value) / 100;
  box.style.background = `rgba(${red}, ${green}, ${blue}, ${alpha})`
});

blurSlider.addEventListener('input', (e) =>{
  blurs = e.target.value;
  box.style.cssText += `backdrop-filter: blur(${blurs}px)`;
});

contrastSlider.addEventListener('input', (e) =>{
  contrast = e.target.value;
  box.style.cssText += `backdrop-filter: contrast(${contrast}%)`;
});

brightnessSlider.addEventListener('input', (e) =>{
  brightness = e.target.value;
  box.style.cssText += `backdrop-filter: brightness(${brightness}%)`;
});

saturationSlider.addEventListener('input', (e) =>{
  saturate = e.target.value;
  box.style.cssText += `backdrop-filter: saturate(${saturate}%)`;
});

invertSlider.addEventListener('input', (e) =>{
  invert = e.target.value;
  box.style.cssText += `backdrop-filter: invert(${invert}%)`;
});


borderRadiusSlider.addEventListener('input', (e) =>{
  
  box.style.cssText += `border-radius: ${e.target.value}px`;
});



