import { Meteor } from 'meteor/meteor';

  Meteor.startup(function () {
     if (Channels.find().count() === 0) {
       Channels.insert({ "name" : "general"});
       Channels.insert({ "name" : "random"});

     }
  });
