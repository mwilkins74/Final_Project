class CreateReminders < ActiveRecord::Migration[7.0]
  def change
    create_table :reminders do |t|
      t.string :title
      t.string :address
      t.string :date
      t.timestamps
    end
  end
end
