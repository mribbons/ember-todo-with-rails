Todos.Router.map(function() {
	this.resource('todos', { path: '/' }, function() {
		// additional child routes
		this.route('active');
		this.route('completed');
	});
});

Todos.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});

Todos.TodosIndexRoute = Ember.Route.extend({
	model: function(){
		return this.modelFor('todos');
	}
});

Todos.TodosNewRoute = Todos.TodosRoute.extend({
    model: function(){
        Todos.Todo.createRecord();
    }
});

Todos.TodosActiveRoute = Ember.Route.extend({
	model: function(){
		return this.store.filter(Todos.Todo, function(todo){
			return !todo.get('is_completed');
		});
	},
	renderTemplate: function(controller) {
		this.render('todos/index', {controller: controller});
	}
});

Todos.TodosCompletedRoute = Ember.Route.extend({
	model: function(){
		return this.store.filter(Todos.Todo, function(todo){
			return todo.get('is_completed');
		});
	},
	renderTemplate: function(controller) {
		this.render('todos/index', {controller: controller});
	}
});