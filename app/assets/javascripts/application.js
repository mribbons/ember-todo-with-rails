// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require ember-template-compiler
//= require ember
//= require ember-data
//= require_self
//= require router
//= require_tree ./controllers
//= require_tree ./models
//= require_tree ./views

window.Todos = Ember.Application.create({
    // log when Ember generates a controller or a route from a generic class
    LOG_ACTIVE_GENERATION: true,
    // log when Ember looks up a template or a view
    LOG_VIEW_LOOKUPS: true
});

Todos.ApplicationStore = DS.Store.extend({});