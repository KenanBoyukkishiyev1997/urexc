export function scrollHeader() {
  $(document).ready(function () {
    $(window)
      .scroll(function () {
        let scrollDistance = $(window).scrollTop();
        // Adjust the "active" class based on the scroll position
        $(".about").each(function (i) {
          if ($(this).position().top <= scrollDistance) {
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
        } else {
          icon.eq(1).show(); // Show the middle arrow
          icon.css("background-color", originalColor);
        }
      });


  });
}
