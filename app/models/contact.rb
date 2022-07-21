class Contact < ApplicationRecord\
    
   has_many :reminders, through: :reminder_contacts
   has_many :users, through: :reminder_users
    
end
