
Template.listings.helpers({
  channels: function () {
        return Channels.find();
    },
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.listings.events({

});

Template.channel.events({
    'click .channel': function (e) {
        e.preventDefault();
        Session.set('channel', this.name);
    }
});

Template.channel.helpers({
  active: function () {
        if (Session.get('channel') === this.name) {
            return "active";
        } else {
            return "";
        }
    }
});
