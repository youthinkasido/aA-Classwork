class TakeAwayAge < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.remove :age
    end

  end
end
