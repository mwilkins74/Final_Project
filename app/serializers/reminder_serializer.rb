class ReminderSerializer < ActiveModel::Serializer
  attributes :id, :title, :address, :date, :time, :design
  belongs_to :user


end
