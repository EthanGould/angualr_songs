Song.delete_all

20.times do |i|
  Song.create(title: "Song #{i}", artist: "This is song #{i}", price: (rand(1).to_f + (rand(100)/100.00)) )
end
