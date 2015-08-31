/**
 * Created by princek on 8/31/15.
 */
if(Meteor.isClient){
    Template.register.events({
        'submit form': function(event){
            event.preventDefault();
            var emailVar = event.target.registerEmail.value;
            var usernameVar = event.target.registerUsername.value;
            var passwordVar = event.target.registerPassword.value;
            console.log('form submitted.');

            Accounts.createUser({
                email : emailVar,
                username: usernameVar,
                password: passwordVar
            });
        }
    });
}