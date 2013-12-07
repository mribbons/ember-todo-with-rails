Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			// Get the Todo title set by the "New Todo" field
			var title = this.get('newTitle');
			if (!title.trim()) return;

			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			this.set('newTitle', '');

			todo.save();
		},

		clearCompleted: function() {
			var completed = this.filterBy('isCompleted', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	},

	remaining: function() {
		return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	inflection: function() {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining'),

	hasCompleted: function() {
		return this.get('completed') > 0;
	}.property('completed'),

	completed: function() {
		return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	allAreDone: function(key, value) {
		if (value === undefined){
			return !!this.get('length') && this.everyBy('isCompleted', true);
		} else {
			this.setEach('isCompleted', value);
			this.invoke('save');
			return value;
		}
	}.property('@each.isCompleted')
});