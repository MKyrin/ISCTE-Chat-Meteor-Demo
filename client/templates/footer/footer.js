Template.footer.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
});

Template.footer.events({
  "submit form": function(event, template) {
    event.preventDefault();
    var message = event.target.message.value;
    if (message) {
      Meteor.call('newMessage', { "text": message, "channel" :  Session.get('channel') });
      event.target.message.value = "";
    }
    
  }
});
