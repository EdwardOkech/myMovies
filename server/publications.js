/**
 * Created by princek on 8/31/15.
 */
Meteor.publish('all-categories', function(){
    return Categories.find();
});

Meteor.publish('all-movies', function(){
    return Movies.find();
});

Meteor.publish('limited-movies', function(){
    return Movies.find({},{
        limit : 5
    });
});
Meteor.publish('specificfields-movies', function(){
    return Movies.find({}, {
        fields:{
            title:1
        }
    });
});

Meteor.publish('lazyload-movies', function(limit){
    return Movies.find({}, {
        limit:limit,
        fields:{
            title:1
        }
    });
});