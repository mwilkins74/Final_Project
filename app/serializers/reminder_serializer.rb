class ReminderSerializer < ActiveModel::Serializer
  attributes :title, :address, :date
end
