

Template.header.events({
  "click .navbar-toggle": function(event, template) {
      event.preventDefault();
      $("#wrapper").toggleClass("toggled");
  }
});
