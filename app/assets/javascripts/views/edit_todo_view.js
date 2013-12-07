Todos.EditTodoView = Ember.TextField.extend({
	didInsertelement: function() {
		this.$().focus();
	}
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);