/**
 * Created by princek on 8/31/15.
 */
Template.logedin.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});