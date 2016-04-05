
Template.messages.helpers({
  messages: Messages.find({}),
  channel : function(){ return Session.get("channel")},
});

Template.messages.events({

});

Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  });
});
