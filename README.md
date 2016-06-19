README
======
Demonstration of Ember MVC Todo tutorial app converted to work with rails back end.

This works with Rails 4.1.8 & Ember.js 1.9.1

I moved a few files around from the original app to make it more railsy.

Using the serializer gem puts things in the format ember likes.
Check the docs at https://github.com/rails-api/active_model_serializers

Installation
------------

```shell
git clone https://github.com/mribbons/ember-todo-with-rails
cd ember-todo-with-rails
bundle install
rake db:migrate
```

Changes
-------

```shell
app/assets/javascripts/application.js
```

Get rid of this:

```javascript
    Todos.ApplicationAdapter = DS.LSAdapter.extend({
   	namespace: 'todos-emberjs'
   });
```

Add this:

```javascript
Todos.Store = DS.Store.extend({});
```

Issues:
-------
Modifying an item's title works, but throws an error:

```shell
Uncaught Error: Attempted to handle event `willCommit`
on <Todos.Todo:ember402:5> while in state root.loaded.updated.inFlight.
```

Todo:
-----
Move the handlebars templates into .js files under views.