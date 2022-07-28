class CreateCompleteds < ActiveRecord::Migration[7.0]
  def change
    create_table :completeds do |t|

      t.timestamps
    end
  end
end
