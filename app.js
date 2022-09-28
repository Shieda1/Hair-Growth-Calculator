// https://www.omnicalculator.com/everyday-life/hair-growth

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const growthlengthRadio = document.getElementById('growthlengthRadio');
const growthtimeRadio = document.getElementById('growthtimeRadio');

let growthlength;
let growthtime = v; 

// labels of the inpust
const variable = document.getElementById('variable');

growthlengthRadio.addEventListener('click', function() {
  variable.textContent = 'Growth time';
  growthtime = v;
  result.textContent = '';
});

growthtimeRadio.addEventListener('click', function() {
  variable.textContent = 'Growth length';
  growthlength = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(growthlengthRadio.checked)
    result.textContent = `Growth length = ${computegrowthlength().toFixed(5)}`;

  else if(growthtimeRadio.checked)
    result.textContent = `Growth time = ${computegrowthtime().toFixed(5)}`;
})

// calculation

function computegrowthlength() {
  return Number(growthtime.value) * 1.27;
}

function computegrowthtime() {
  return Number(growthlength.value) / 1.27;
}