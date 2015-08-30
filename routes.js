/**
 * Created by princek on 8/31/15.
 */
Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.map(function(){
    this.route('Home', {
        path: '/',
        template: 'home'
    });

});