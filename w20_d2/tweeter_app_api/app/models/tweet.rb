class Tweet < ApplicationRecord
    validates :author, presence: true
    validates :title, uniqueness: true
end