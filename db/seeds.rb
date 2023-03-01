puts "🌱 Seeding data..."

# Seed your database here
    Book.create(
        title: "A Glass of Blessings",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/AGlassOfBlessings.jpg/220px-AGlassOfBlessings.jpg",
        author: "Barbara Pym",
        price: 800
    )

    Book.create(
        title: "His Dark Materials",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/HisDarkMaterials1stEdition.jpg/220px-HisDarkMaterials1stEdition.jpg",
        author: "Phillip Pullman",
        price: 1000
    )

    Book.create(
        title: "Down to a Sunless Sea",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b4/DownToASunlessSea.jpg",
        author: "David Graham",
        price: 500
    )

    Book.create(
        title: "The Book of Dust",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0e/La_Belle_Sauvage.jpg",
        author: "Phillip Pullman",
        price: 750
    )

5.times do
    Review.create(
        star_rating: rand(0..5),
        comment: Faker::Lorem.sentence,
        book_id: rand(1..4)
    )
end

puts "✅ Done seeding!"