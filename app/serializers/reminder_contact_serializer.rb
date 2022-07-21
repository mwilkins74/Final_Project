class ReminderContactSerializer < ActiveModel::Serializer
  attributes :id, :reminder_id, :contact_id
end
