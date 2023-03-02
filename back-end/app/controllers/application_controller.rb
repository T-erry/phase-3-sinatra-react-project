class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/books" do
   books = Book.all
   books.to_json
  end

    post "/books" do
      book = Book.create(
        image: params[:image],
        title: params[:title],
        author: params[:author],
        price: params[:price]
      )
      book.to_json
  end
  get "/books/:id" do 
    book = Book.find(params[:id])
    book.to_json
  end
  patch "/books/updatebook/:id" do 
    book = Book.find(params[:id])
    book.update(
      image: params[:image],
      title: params[:title],
      author: params[:author],
      price: params[:price]
    )
    book.to_json
  end
  
end
