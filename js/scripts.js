$(document).ready(function() {
  $("button#dog").click(function() {
  $("ul#dogSays").prepend("<li>Bark!</li>");
  $("ul#catSays").prepend("<li>Meow!</li>");
  $("ul#dogSays").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#catSays").children("li").first().click(function() {
    $(this).remove();
  });
});

  $("button#cat").click(function() {
    $("ul#dogSays").prepend("<li>Growl!</li>");
    $("ul#catSays").prepend("<li>Meowth!</li>");
    $("ul#dogSays").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#catSays").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dogButton").click(function() {
    $("#dogButton").after('<br><img src="img/dog.jpg">');
  })

  $("button#catButton").click(function() {
    $("#catButton").after('<br><img src="img/cat.jpg">');
  })

});
