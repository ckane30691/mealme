class Eater < ApplicationRecord
  validates :phone_number, :loc_X, :loc_y, presence: true
end
