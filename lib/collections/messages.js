Messages = new Mongo.Collection("messages");
Messages.allow({
  insert: function(userId, doc){
    return (userId && doc.user === userId);
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  }
});
