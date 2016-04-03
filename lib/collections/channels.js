Channels = new Mongo.Collection("channels");
Channels.allow({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  }, 
  remove: function(){
    return false;
  }
});
