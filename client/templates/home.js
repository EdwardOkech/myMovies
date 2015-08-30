/**
 * Created by princek on 8/30/15.
 */
Template.home.helpers({
    moviesList : function(){
        return Movies.find({});
}
});

Template.home.events({
    'click button.lazyload': function(e, template){
        var currentLimit = Session.get('lazyloadLimit');

        Session.set('lazyloadLimit', currentLimit + 2);
    }
});