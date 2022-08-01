class AddLinkToReminders < ActiveRecord::Migration[7.0]
  def change
    add_column :reminders, :link, :string
  end
end
