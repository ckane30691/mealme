class Eaters < ActiveRecord::Migration[5.1]
  def change
    create_table :eaters do |t|
      t.integer :phone_number, null: false
      t.float :loc_x, null: false
      t.float :loc_y, null: false

      t.timestamps
    end
  end
end
