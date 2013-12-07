README
======
Demonstration of Ember MVC Todo tutorial app converted to work with rails back end.

This works with Rails 4.0.1.

I moved a few files around from the original app to make it more railsy.

Using the serializer gem puts things in the format ember likes.
Check the docs at https://github.com/rails-api/active_model_serializers

Things I had to change:

```app/assets/javascripts/application.js```

Get rid of this:
```Todos.ApplicationAdapter = DS.LSAdapter.extend({
   	namespace: 'todos-emberjs'
   });
```

Add this:
```Todos.Store = DS.Store.extend({});
```

Change 'todo' model references to Todos.Todo:

```app/assets/javascripts/controllers/todos_controller.js:```
```			var todo = this.store.createRecord('todo', { // change this
			var todo = this.store.createRecord(Todos.Todo, { // to this
```

```app/assets/javascripts/router.js```
``` Todos.TodosActiveRoute = Ember.Route.extend({
    	model: function(){
   		return this.store.filter('todo', function(todo){ // change this
   		return this.store.filter(Todos.Todo, function(todo){ // to this

 Todos.TodosCompletedRoute = Ember.Route.extend({
 	model: function(){
		return this.store.filter('todo', function(todo){ // change this
		return this.store.filter(Todos.Todo, function(todo){ // to this
```

Issues:
-------
Modifying an item's title works, but throws an error:
```Uncaught Error: Attempted to handle event `willCommit`
on <Todos.Todo:ember402:5> while in state root.loaded.updated.inFlight.
```

Todo:
-----
Move the handlebars templates into .js files under views.