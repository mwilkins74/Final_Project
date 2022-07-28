class UserWithRemindersSerializer < ActiveModel::Serializer
  attributes :id, :email, :password
  has_many :reminders
  
end
