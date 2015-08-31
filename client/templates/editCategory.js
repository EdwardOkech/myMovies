/**
 * Created by princek on 8/31/15.
 */
Template.editCategory.events({
    'submit form': function(event, template){
        event.preventDefault();
        var form = event.target,
            user = Meteor.user(),
            _this = this; // to reference _id callback

            if(this._id){

            Categories.update(this._id, {$set: {
                 genre:        form.genre.value,
                 owner:        user._id

            }}, function(error){
                  if(error){
                    alert(error.reason);
                }

              });
            }

            }
    });