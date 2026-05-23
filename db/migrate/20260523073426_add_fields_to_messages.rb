class AddFieldsToMessages < ActiveRecord::Migration[8.1]
  def change
    add_column :messages, :body, :string
    add_column :messages, :user_id, :int
  end
end
