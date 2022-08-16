const colorSlider = document.querySelector('#color');
const sizeSlider = document.querySelector('#size');
const opacitySlider = document.querySelector('#opacity');
const blurSlider = document.querySelector('#blur');
const contrastSlider = document.querySelector('#contrast');
const brightnessSlider = document.querySelector('#brightness');
const saturationSlider = document.querySelector('#saturation');
const invertSlider = document.querySelector('#invert');
const borderRadiusSlider = document.querySelector('#border-radius');

const boxCode = document.querySelector('#custombox-code');

const box = document.querySelector('.box');

let initColor = 'rbga(0, 0, 0, 0.5)';
let size = 200; 
let alpha = 1;

let red = 255;
let green = 255;
let blue = 255;

let blurs = 0;
let contrast = 50;
let brightness = 100; 
let saturate = 50; 
let invert = 0; 
let borderRadius = 0; 

let backdropTextBox = ``;

const updateBoxCode = () =>{
  boxCode.value = `width: ${size}px; height: ${size}px; background: rgba(${red}, ${green}, ${blue}, ${alpha}); backdrop-filter: blur(${blurs}px) contrast(${contrast}%) brightness(${brightness}%) saturate(${saturate}%) invert(${invert}%); border-radius: ${borderRadius}px;`;
}


const hexToRGB = (hex) => {
  red = parseInt(hex.substring(1, 3), 16);
  green = parseInt(hex.substring(3, 5), 16);
  blue = parseInt(hex.substring(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}


colorSlider.addEventListener('input' , (e) => {
  initColor = hexToRGB(e.target.value); 
  box.style.background = initColor;
  updateBoxCode();  
});

sizeSlider.addEventListener('input' , (e) => {
  size = e.target.value;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`; 
  updateBoxCode();  
});

opacitySlider.addEventListener('input', (e) =>{
  alpha = (e.target.value) / 100;
  box.style.background = `rgba(${red}, ${green}, ${blue}, ${alpha})`
  updateBoxCode();  
});

blurSlider.addEventListener('input', (e) =>{
  blurs = e.target.value;
  box.style.cssText += `backdrop-filter: blur(${blurs}px)`;
  updateBoxCode();  
});

contrastSlider.addEventListener('input', (e) =>{
  contrast = e.target.value;
  box.style.cssText += `backdrop-filter: contrast(${contrast}%)`;
  updateBoxCode();  
});

brightnessSlider.addEventListener('input', (e) =>{
  brightness = e.target.value;
  box.style.cssText += `backdrop-filter: brightness(${brightness}%)`;
  updateBoxCode();  
});

saturationSlider.addEventListener('input', (e) =>{
  saturate = e.target.value;
  box.style.cssText += `backdrop-filter: saturate(${saturate}%)`;
  updateBoxCode();  

});

invertSlider.addEventListener('input', (e) =>{
  invert = e.target.value;
  box.style.cssText += `backdrop-filter: invert(${invert}%)`;
  updateBoxCode();  

});


borderRadiusSlider.addEventListener('input', (e) =>{
  borderRadius = e.target.value; 
  box.style.cssText += `border-radius: ${borderRadius}px`;
  updateBoxCode();  
});



