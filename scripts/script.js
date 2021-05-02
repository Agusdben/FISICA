let vt = document.querySelector('.vt');
let pt = document.querySelector('.pt');
let resultado = document.querySelector('.resultado');
let canvas, grafica, xo, x1, v0, v1, t0, t1, a;

function load(){
  resultado.innerHTML = '';
  resultado.innerHTML = 
  `
    <h4 class="resultado__title">Resultado:</h4>
    <canvas class="resultado__canvas" width="600" height="600"></canvas>
  `;
  canvas = document.querySelector('.resultado__canvas');
  grafica = canvas.getContext('2d');
  x0 = document.querySelector('#x0').value; 
  v0 = document.querySelector('#v0').value; 
  t0 = document.querySelector('#t0').value; 
  t1 = document.querySelector('#t1').value; 
  a = document.querySelector('#a').value;
  x0 = parseFloat(x0);
  v0 = parseFloat(v0);
  t0 = parseFloat(t0);
  t1 = parseFloat(t1);
  a = parseFloat(a);
}

function setData(axisX, axisY, nameX, nameY){
  let data = {
    type: 'line',
    data:{
      labels: axisX,
      datasets: [
        {
          label: nameY,
          data: axisY,
          borderColor: 'red',
        }
      ]
    },
    options:{
      plugins:{
        title: {
          display: true,
          text: `${nameY}-${nameX}`,
          color: "black",
          font: {
            size: 25
          }
        },
      },
      scales: {
        x: {
          title: {
            color: 'black',
            display: true,
            text: nameX,
            font: {
              size: 18
            }
          },
          grid: {
            tickColor: 'red',
            borderColor: 'blue'
          },
          ticks: {
            color: 'red',
          }
        },
        y: {
          title: {
            color: 'black',
            display: true,
            text: nameY,
            font: {
              size: 18
            }
          },
          grid: {
            tickColor: 'red',
            borderColor: 'blue'
          },
          ticks: {
            color: 'red',
          }
        }
      }
    }
  };
  return data;
}

window.onload = ()=>{
  pt.addEventListener('click', ()=>{
    load();
    let tiempo = [];
    let posicionTiempo = [];
    for(let t = t0; t<= t1; t++){
        x1 = x0 + v0 * t + 1/2 * a * t*t;
        tiempo.push([t]);
        posicionTiempo.push(x1);
    }
    let chart = new Chart(grafica, setData(tiempo, posicionTiempo, 'Tiempo', 'Posicón'));
        
  })

  vt.addEventListener('click', ()=>{
    load();
    let tiempo = [];
    let velocidadTiempo = [];
    for(let t = t0; t<= t1; t++){
      v1 = v0 + a * t;
      tiempo.push([t]);
      velocidadTiempo.push(v1);
    }
    let chart = new Chart(grafica, setData(tiempo, velocidadTiempo, 'Tiempo', 'Velocidad'));
  })
}