class Team < ApplicationRecord
  validates :name, :image_url, presence: true, uniqueness: true
end
