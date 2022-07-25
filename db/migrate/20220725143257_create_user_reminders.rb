class CreateUserReminders < ActiveRecord::Migration[7.0]
  def change
    create_table :user_reminders do |t|
      t.integer :user_id
      t.integer :reminder_id

      t.timestamps
    end
  end
end
