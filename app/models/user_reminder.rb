class UserReminder < ApplicationRecord

    belongs_to :reminder
    belongs_to :user
end
