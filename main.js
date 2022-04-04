const bullets = document.querySelectorAll(".bullet span")
const images = document.querySelectorAll(".image")

function moveSlider(){
    let index = this.dataset.value;
    
    let currentImage = document.querySelector(`.img-${index}`)
    images.forEach(img => img.classList.remove('show'))
    currentImage.classList.add('show')

    bullets.forEach(bull=> bull.classList.remove('active'))
    this.classList.add('active')

    const textSlider = document.querySelector(".text-group")
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`
}

bullets.forEach((bullet) =>{
    bullet.addEventListener("click", moveSlider)
})

const cursor = document.querySelector('.cursor');
const cursorinner = document.querySelector('.cursor2');
const a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});


a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

const app = document.querySelector('.app h1')
let i = 0
i < 1643

function get(){
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  
  .then(function(data) {
      console.log(data)
    return app.innerHTML = data[i++].text
  });
}
