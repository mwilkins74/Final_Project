class ReminderSerializer < ActiveModel::Serializer
  attributes :id,:title, :address, :date
end
