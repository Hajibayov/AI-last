function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.opacity === "1") {
      x.style.opacity = "0";
    } else {
      x.style.opacity = "1";
    }
  }


var selectOptions = document.getElementsByClassName("select__options");

for (option of selectOptions){
    option.onclick = function(){
        customSelectPr.innerHTML = this.textContent;
        console.log(this.textContent)
    }
}

$(".custom-select").click(function () {
  $(".rotate").toggleClass("down");
})

const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarLink = document.getElementsByClassName("navbar-link")
const navbarButton = document.getElementsByClassName("navbar-button")

toggleButton.addEventListener('click',function(){
  for(i=0;i<navbarLink.length;i++)
  navbarLink[i].classList.toggle("active");
})
toggleButton.addEventListener('click',function(){
for(i=0;i<navbarLink.length;i++)
navbarButton[i].classList.toggle("active");
})


$('.carousel[data-type="multi"] .item').each(function() {
  var next = $(this).next();
  if (!next.length) {
      next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < 2; i++) {
      next = next.next();
      if (!next.length) {
          next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
  }
});

$(document).ready(function(){
$('.carousel').slick({
  slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
infinite:true,
prevArrow: document.getElementById('prev-arrow'),
nextArrow: document.getElementById('next-arrow'),

responsive: [
  {
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      }
  },
  {
    breakpoint: 1024,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
    }
},
]
});
});