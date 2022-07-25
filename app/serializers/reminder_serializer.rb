class ReminderSerializer < ActiveModel::Serializer
  attributes :id, :title, :address, :date, :time, :incomplete
  belongs_to :user
end
