class TodosController < ApplicationController
  def index
    @todos = Todo.all

    render :json => @todos
  end

  def show
    render :json => []
  end
end
