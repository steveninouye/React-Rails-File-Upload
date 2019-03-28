class Document < ApplicationRecord
  belongs_to: :purchase_order
  has_many_attached: :files
end
