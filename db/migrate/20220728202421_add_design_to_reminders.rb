class AddDesignToReminders < ActiveRecord::Migration[7.0]
  def change
    add_column :reminders, :design, :string
  end
end
