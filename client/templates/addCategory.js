/**
 * Created by princek on 8/31/15.
 */
Template.addCategory.events({
    'submit form': function(event, template){
        event.preventDefault();
        var form = event.target,
            user = Meteor.user();

        Categories.insert({
            genre:        form.genre.value,
            owner:        user._id
        }, function(error){
            if(error){
                alert(error.reason);
            }
        });
        //event.target.form.value = "";
    }
});