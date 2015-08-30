/**
 * Created by princek on 8/31/15.
 */
Meteor.subscribe('all-categories');

Session.setDefault('lazyloadLimit', 5);
Tracker.autorun(function(){
    Meteor.subscribe('lazyload-movies', Session.get('lazyloadLimit'));
});
