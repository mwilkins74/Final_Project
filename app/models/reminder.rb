class Reminder < ApplicationRecord
    belongs_to :user

    validates :time, presence: true 
    
end
