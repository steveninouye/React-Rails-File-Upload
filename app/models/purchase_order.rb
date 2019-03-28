class PurchaseOrder < ApplicationRecord
  has_many_attached :documents
  has_many :files,
    through: :documents,
    source: :files
end
