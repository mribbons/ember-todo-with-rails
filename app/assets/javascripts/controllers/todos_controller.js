Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			// Get the Todo title set by the "New Todo" field
			var title = this.get('newTitle');
			if (!title.trim()) return;

			var todo = this.store.createRecord('todo', {
				title: title,
				is_completed: false
			});

			this.set('newTitle', '');

			todo.save();
		},

		clearCompleted: function() {
			var completed = this.filterBy('is_completed', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	},

	remaining: function() {
		return this.filterBy('is_completed', false).get('length');
	}.property('@each.is_completed'),

	inflection: function() {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining'),

	hasCompleted: function() {
		return this.get('completed') > 0;
	}.property('completed'),

	completed: function() {
		return this.filterBy('is_completed', true).get('length');
	}.property('@each.is_completed'),

	allAreDone: function(key, value) {
		if (value === undefined){
			return !!this.get('length') && this.everyBy('is_completed', true);
		} else {
			this.setEach('is_completed', value);
			this.invoke('save');
			return value;
		}
	}.property('@each.is_completed')
});