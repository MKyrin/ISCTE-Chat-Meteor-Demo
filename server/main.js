import { Meteor } from 'meteor/meteor';

  Meteor.startup(function () {
     if (Channels.find().count() === 0) {
       Channels.insert({ "name" : "mei"});
       Channels.insert({ "name" : "tsio"});

     }
  });
