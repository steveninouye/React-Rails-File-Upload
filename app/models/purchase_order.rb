class PurchaseOrder < ApplicationRecord
  has_many_attached :documents
end
