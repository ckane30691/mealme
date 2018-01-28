class Eater < ApplicationRecord
  validates :phone_number, :loc_x, :loc_y, presence: true
end
