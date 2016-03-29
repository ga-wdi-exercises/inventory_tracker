class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string  :name
      t.string  :image_url
      t.decimal :cost
      t.string  :url
      t.integer :quantity
      t.string  :country
      t.text    :notes
    end
  end
end
