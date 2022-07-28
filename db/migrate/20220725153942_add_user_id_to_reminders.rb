class AddUserIdToReminders < ActiveRecord::Migration[7.0]
  def change
    add_column :reminders, :user_id, :integer
  end
end
