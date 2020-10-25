			$('.third-screen__slider').slick({
  slidesToShow: 2.2,
  arrows: false,
  rows: 2,
  slidesPerRow: 1,
  infinite: false,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1
      }
    }
  ]
});
				

$('.fifth-screen__slider').slick({
  slidesToShow: 3.2,
  arrows: false,
  infinite: false,
  focusOnSelect: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1
      }
    }
  ]
});