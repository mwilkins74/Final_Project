class Reminder < ApplicationRecord
    belongs_to :user
    
    # has_many :reminder_contacts
    # has_many :contacts, through: :reminder_contacts

    
end
