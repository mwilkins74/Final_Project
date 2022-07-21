class CreateReminderContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :reminder_contacts do |t|
      t.integer :reminder_id
      t.integer :contact_id

      t.timestamps
    end
  end
end
