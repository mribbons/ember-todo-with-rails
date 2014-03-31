class TodosController < ApplicationController
  respond_to :json
  inherit_resources

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def permitted_params
    { todo: params.fetch(:todo, {}).permit(:title, :is_completed) }
  end
end
