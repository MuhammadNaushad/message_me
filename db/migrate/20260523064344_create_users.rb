class CreateUsers < ActiveRecord::Migration[8.1]
  def change
    create_table :users do |t|
      t.timestamps
      t.string :username
      t.string :password_digest
    end
  end
end
