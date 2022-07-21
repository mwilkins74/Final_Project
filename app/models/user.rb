class User < ApplicationRecord
    has_secure_password

    has_many :user_contacts
    has_many :contacts, through: :user_contacts

  #   validates :username, presence: true, uniqueness: true, exclusion:{
  #   in: %w(login settings search),
  #   message: "'%{value} is a reserved username."
  # }
  
    validates :email, presence: true, uniqueness: true
end
