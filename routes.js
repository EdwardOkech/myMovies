/**
 * Created by princek on 8/31/15.
 */
if(Meteor.isClient){
    Session.setDefault('lazyloadLimit', 5);
}

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',

    onAfterAction: function(){
        var data = Movies.findOne({_id:this.params._id})
            Categories.findOne({_id:this.params._id});
        if(_.isObject(data) && !_.isArray(data)){
            document.title = 'Movies Directory | '+ data.title;
        }else {
            document.title = 'Movies Directory | '+ this.route.getName();
        }

    }
});

MovieController = RouteController.extend({
    waitOn: function(){
        return Meteor.subscribe('single-movie', this.params._id);
    },
    data:function(){
        return Movies.findOne({_id:this.params._id});
    }
});

CategoryController = RouteController.extend({
    waitOn: function(){
        return Meteor.subscribe('single-category', this.params._id);
    },
    data:function(){
        return Categories.findOne({_id:this.params._id});
    }
});

Router.map(function(){
    this.route('Home', {
        path: '/home',
        template: 'home',
        subscriptions : function(){
            return Meteor.subscribe("lazyload-movies", Session.get('lazyloadLimit'));
        }
    });
    this.route('Categories', {
        path: '/categories',
        template: 'categories'
    });
    this.route('News', {
        path: '/news',
        template: 'news'
    });
    this.route('Movie', {
        path: '/movies/:_id',
        template: 'movie',
        controller: 'MovieController'
    });
    this.route('Login', {
        path: '/',
        template: 'login'

    });
    this.route('Register', {
        path: '/register',
        template: 'register'

    });
    this.route('Logedin', {
        path: '/logedin',
        template: 'logedin'

    });
    this.route('AddMovie', {
        path: '/addMovie',
        template: 'addMovie'

    });
    this.route('AddCategory', {
        path: '/addCategory',
        template: 'addCategory'

    });
    this.route('EditMovie', {
        path: '/editMovie',
        template: 'editMovie'

    });

});

var requiresLogin = function(){
    if(!Meteor.user()){
        this.render('notFound');
    }else{
        this.next();
    }
};