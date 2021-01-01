{
  $(".asa").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    speed: 150,
    adaptiveHeight: true,
    asNavFor: ".thumbnail",
    arrows: true,
	  slidesToShow: 1,
	  centerMode: true,
	  centerPadding: '80px',
	  focusOnSelect: true,
  });

  $(".thumbnail").slick({
    asNavFor: ".asa",
    focusOnSelect: true,
    arrows: false,
    slidesToShow: 4,
  });
}
