class Reminder < ApplicationRecord
    
    has_many :reminder_contacts
    has_many :contacts, through: :reminder_contacts
end
