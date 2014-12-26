Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	is_completed: DS.attr('boolean')
});

/*Todos.Todo = Ember.Resource.extend({
    resourceUrl: '/todos',
    resourceName: 'todo'
});*/

Todos.Todo.FIXTURES = [
{
	id: 1,
	title: 'Learn ember.js',
	is_completed: true
},
{
	id: 2,
	title: '...',
	is_completed: false
},
{
	id: 3,
	title: 'Profit!',
	is_completed: false
}
];