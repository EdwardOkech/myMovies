/**
 * Created by princek on 8/30/15.
 */


Categories = new Mongo.Collection('categories');

//make a default name for a list in the for of 'Category A'
Categories.defaultName = function(){
    var nextLetter = 'A', nextGenre = 'List' + nextLetter;
    while(Categories.findOne({genre: nextGenre})){
        nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
        nextGenre = 'Category' + nextLetter;
    }
    return nextGenre;
};
Movies = new Mongo.Collection('movies');

if(Meteor.isServer){
    Movies.allow({
        insert:function(userId, doc){
            return userId && doc.owner === userId;
        },
        update:function(userId, doc, fields, modifier){
            return Meteor.user();
        },
        fetch: ['owner']
    })
};