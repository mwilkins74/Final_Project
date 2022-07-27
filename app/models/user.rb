class User < ApplicationRecord
    has_secure_password

    has_many :reminders

    has_many :user_contacts
    has_many :contacts, through: :user_contacts

    validates :email, 
    presence: true, 
    uniqueness: {message: 'Email is already is use.'}

end
