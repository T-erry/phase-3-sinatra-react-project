class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title 
      t.binary :image
      t.string :author
      t.integer :price
    end
  end
end
