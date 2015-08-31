/**
 * Created by princek on 8/31/15.
 */
Template.addMovie.events({
    'submit form': function(event, template){
        event.preventDefault();
        var form = event.target,
            user = Meteor.user();

        Movies.insert({
            title:        form.title.value,
            description:  form.description.value,
            release_year: form.release_year.value,
            star:         form.star.value,
            owner:        user._id
        }, function(error){
            if(error){
                alert(error.reason);
            }
        });
        //event.target.form.value = "";
    }
});