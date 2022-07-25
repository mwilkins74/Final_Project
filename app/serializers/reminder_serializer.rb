class ReminderSerializer < ActiveModel::Serializer
  attributes :id, :title, :address, :date, :time
  belongs_to :user
end
