class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :email
      t.integer :user_id
      t.integer :reminder_id

      t.timestamps
    end
  end
end
