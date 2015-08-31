/**
 * Created by princek on 8/31/15.
 */
Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.loginUsername.value;
        var passwordVar = event.target.loginPassword.value;
        console.log('form submitted');
        Meteor.loginWithPassword(usernameVar, passwordVar ,function(err, result){
            if(!err){
                Router.go('/home');
            }else{
                console.log(err.reason);
            }
        });
    }
});