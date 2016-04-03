Meteor.publish("messages", function(argument){
  return Messages.find({"channel" : argument});
});

Meteor.publish("allUsernames", function () {
  return Meteor.users.find({}, {fields: {
    "username": 1,
    "services.github.username": 1
  }});
});

Meteor.publish("channels", function(){
  return Channels.find();
});
