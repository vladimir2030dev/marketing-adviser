/* Custom JavaScript */
/* Custom JavaScript */
$('.partners__slider').slick({
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.fa-chevron-left'),
    nextArrow: $('.fa-chevron-right'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


/*   const anchors = document.querySelectorAll('a.nav-link')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href')
      
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  } */

  $(document).ready(function() {
 
 
    $("a.nav-link").click(function() {
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
       }, {
          duration: 500,
          easing: "swing"
       });
       return false;
    });
  
  
 });

 $('#form-service').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('Оставить заявку на ' + recipient)
  modal.find('.select').val(recipient)
})


 function send(event, php) {
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
          json = JSON.parse(this.response); // Ебанный internet explorer 11
          console.log(json);
          if (json.result == "success") {
              alert("Сообщение отправлено");
          } else {
              alert("Ошибка. Сообщение не отправлено");
          }
      } else { alert("Ошибка сервера. Номер: " + req.status); }
  };
  req.onerror = function () { alert("Ошибка отправки запроса"); };
  req.send(new FormData(event.target));
}



