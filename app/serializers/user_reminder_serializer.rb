class UserReminderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :reminder_id
  belongs_to :user
  belongs_to :reminder
  
end
