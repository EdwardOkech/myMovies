/**
 * Created by princek on 8/31/15.
 */
Template.editMovie.events({
    'submit form': function(event, template){
        event.preventDefault();
        var form = event.target,
            user = Meteor.user(),
            _this = this; // to reference _id callback

            if(this._id){

            Movies.update(this._id, {$set: {
                 title:        form.title.value,
                 description:  form.description.value,
                 release_year: form.release_year.value,
                 star:         from.star.value

            }}, function(error){
                  if(error){
                    alert(error.reason);
                }

              });
            }

            }
    });

