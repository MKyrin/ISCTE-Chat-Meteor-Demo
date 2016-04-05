

Meteor.subscribe("allUsernames");
// Meteor.subscribe('messages');
Meteor.subscribe('channels');

Meteor.startup(function() {
    Session.set('channel', 'general');
    Accounts.ui.config({
        passwordSignupFields: 'USERNAME_ONLY'
    });
});
