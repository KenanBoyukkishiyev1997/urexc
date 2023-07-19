export function scrollHeader() {
  $(document).ready(function () {
    $(window)
      .scroll(function () {
        let scrollDistance = $(window).scrollTop();
        // Adjust the "active" class based on the scroll position
        $(".about").each(function (i) {
          if (100 <= scrollDistance) {
            $("header").removeClass("activeHeader");
            $("header").removeClass("removeScroll");

            $("header").eq(i).addClass("activeHeader");
          } else {
            $("header").removeClass("activeHeader");
            $("header").addClass("removeScroll");
          }
        });
      })
      .scroll(); // Trigger the scroll event on page load
  });

  window.addEventListener('scroll', function() {
    const circle = document.querySelector('.circle');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 200) {
      circle.classList.add('scroll-up');
    } else {
      circle.classList.remove('scroll-up');
    }
  });

  $(function() {
    const toggleMenu = $(".toggle-menu");
    const menuDrawer = $(".menu-drawer");
    const icon = toggleMenu.find("i");
    const originalColor = icon.css("background-color");
  

    toggleMenu.click(function() {
        $(this).toggleClass("active");
        menuDrawer.toggleClass("open");
    
        if (toggleMenu.hasClass("active")) {
          icon.eq(1).hide(); // Hide the middle arrow
          icon.css("background-color", "#21364B");
          toggleMenu.css("position", "absolute")
          toggleMenu.css("top", "20px")
          toggleMenu.css("right", "20px")
          menuDrawer.css("padding-top" , '100px')

        } else {
          icon.eq(1).show(); // Show the middle arrow
          icon.css("background-color", originalColor);
          toggleMenu.css("position", "relative")
          toggleMenu.css("top", "10px")
          toggleMenu.css("right", "unset")
          menuDrawer.css("padding-top" , '0px')

        }
      });


  });
}
