class AddUserIdToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :user_id, :text
  end
end
