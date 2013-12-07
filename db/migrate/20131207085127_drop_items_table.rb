class DropItemsTable < ActiveRecord::Migration
  def change
    drop_table :items
  end
end
