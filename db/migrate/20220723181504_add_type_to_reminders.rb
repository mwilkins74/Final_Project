class AddTypeToReminders < ActiveRecord::Migration[7.0]
  def change
    add_column :reminders, :type, :string
  end
end
