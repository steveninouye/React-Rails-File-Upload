class Document < ApplicationRecord
  belongs_to :purchase_order
  has_one_attached :file
end
