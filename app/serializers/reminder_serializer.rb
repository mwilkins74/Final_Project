class ReminderSerializer < ActiveModel::Serializer
  attributes :id, :title, :address, :date, :time
  belongs_to :user

  # def time
  #   self.object.time.strftime("%I:%M %P")
  # end

end
