import $ from "jQuery";
$(".product").on("click", function(e) {
  $(".product .productExtension").css("display", "none");
  $(this)
    .children(".productExtension")
    .css("display", "block");
  if (e.target.classList.contains("closeProductExtension")) {
    $(".productExtension").css("display", "none");
  }
});
