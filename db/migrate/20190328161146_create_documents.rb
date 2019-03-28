class CreateDocuments < ActiveRecord::Migration[5.2]
  def change
    create_table :documents do |t|
      t.string :document_type
      t.timestamps
    end
    add_reference :documents, :purchase_order, foreign_key: true
  end
end
