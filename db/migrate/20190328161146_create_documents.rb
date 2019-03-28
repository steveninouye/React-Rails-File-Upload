class CreateDocuments < ActiveRecord::Migration[5.2]
  def change
    create_table :documents do |t|
      t.string :type
      t.timestamps
    end
    add_reference :documents, :purchase_order, foreign_key: true
  end
end
