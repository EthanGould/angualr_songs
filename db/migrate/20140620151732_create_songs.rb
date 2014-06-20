class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.decimal :price
      t.integer :duration

      t.timestamps
    end
  end
end
