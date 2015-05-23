Todos.IndexController = Ember.Controller.extend({});

Todos.TodoController = Ember.Controller.extend({
	is_completed: function(key, value) {
		var model = this.get('model');

		if (value === undefined) {
			return model.get('is_completed');
		} else {
			model.set('is_completed', value);
			model.save();
			return value;
		}
	}.property('model.is_completed'),

	actions: {
		editTodo: function() {
			this.set('isEditing', true);
		},
		acceptChanges: function() {
			this.set('isEditing', false);
			var model = this.get('model');
			if (model.get('isSaving')) {
				return;
			}
			if (Ember.isEmpty(this.get('model.title'))) {
				this.send('removeTodo');
			} else {
				this.get('model').save();
			}
		},
		removeTodo: function() {
			var todo = this.get('model');
			todo.deleteRecord();
			todo.save();
		}
	},

	isEditing: false
});
