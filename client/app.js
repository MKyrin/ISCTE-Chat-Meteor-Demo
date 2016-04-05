

Meteor.subscribe("allUsernames");
// Meteor.subscribe('messages');
Meteor.subscribe('channels');

Meteor.startup(function() {
    Session.set('channel', 'mei');
    Accounts.ui.config({
        passwordSignupFields: 'USERNAME_ONLY'
    });
});
