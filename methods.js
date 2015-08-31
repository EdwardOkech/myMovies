/**
 * Created by princek on 8/31/15.
 */
Meteor.methods({
    insertMovie: function(movieDocument){
        if(this.isSimulation){
            Session.set('Save Button', 'Saving...');
        }
    }
})