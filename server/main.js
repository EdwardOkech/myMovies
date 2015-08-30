/**
 * Created by princek on 8/30/15.
 */

Meteor.startup(function()
{
    console.log('server started');

    if(Movies.find().count()=== 0){
        console.log('Adding dummy data');
        var dummyData = [
            { genre: 'action',
               items: [
                   'action1',
                   'action2',
                   'action3'
               ]

            },
            { genre: 'comedy',
               items: [
                   'comedy1',
                   'comedy2',
                   'comedy3'
               ]

            },
            { genre: 'porn',
               items: [
                   'porn1',
                   'porn2',
                   'porn3'
               ]

            },
            { genre: 'drama',
               items: [
                   'drama1',
                   'drama2',
                   'drama3'
               ]

            }

        ];
    _.each(dummyData, function(category){
        var category_id = Categories.insert({
            genre:category.genre,
           incompleteCount: category.items.length
        });

        _.each(category.items, function(title, description, release_year, star, rating){
            Movies.insert({
                categoryId: category_id,
                title: title,
                description: description,
                release_year: release_year,
                star:star,
                rating: 0
            });
        });
    });

    }
});