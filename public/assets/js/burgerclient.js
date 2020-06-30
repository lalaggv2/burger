// Make sure we wait to attach our handlers until the DOM is fully loaded.
//This file contains the ajax to make the calls and trigger the actions

$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    //CREATE A NEW BURGER
    let newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0,
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // let newBurger = {
  //   name: $("#bu").val().trim(),
  //   sleepy: $("[name=devoured]:checked").val().trim()
  // };
  //UPDATE A BURGER CHANGING ITS DEVOURED STATE
  $("#eatburger").on("click", function (event) {
    event.preventDefault();

    let id = $(this).data("id");
    let devouredState = {
      devoured: 1,
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      console.log("Burger is devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //DELETE A BURGER
  $(".deleteburger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      // function () {
      //   console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload()
    );
  });
});
