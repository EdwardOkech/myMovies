/**
 * Created by princek on 8/31/15.
 */
Meteor.methods({
    insertMovie: function (movieDocument) {
        if (this.isSimulation) {
            Session.set('Save Button', 'Saving...');
        }
        else {
            var user = Meteor.user();

            if (user) {
                throw new Meteor.Error(401, 'you need to login to add a movie');
            }
        }
    }
});
