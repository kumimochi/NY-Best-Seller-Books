import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=x32SgZMGtyG07rEkpc2jCZQHASiFgPah`;

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(apiUrl);
      setBooks(response.data.results.books);
      console.log(response.data.results);
    };
    fetchBooks();
  }, []);
  return (
    <div>
      <h1 className='justify-center text-center text-4xl px-10 my-10 font-bold'>
        New York Times Best Selling Books
      </h1>
      <section className='flex flex-wrap justify-evenly mx-10'>
        {books.map((book) => {
          const {
            book_image,
            title,
            author,
            rank,
            description,
            amazon_product_url,
            publisher,
          } = book;

          return (
            <div className=''>
              <div className='h-1/4 w-60 my-3 p-2 h-8 md:h-full'>
                <h2 className='rounded-full h-10 w-10 flex items-center justify-center bg-blue-100 mt-10 mb-3'>
                  {rank}
                </h2>
                <img
                  className='max-h-80 rounded-md'
                  src={book_image}
                  alt={title}
                ></img>
                <h2 className='text-l font-bold text-center mt-5 mb-3'>
                  {title}
                </h2>
                <h3 className='font-semibold text-center mb-5'>
                  Author: {author}
                </h3>
                <p className='text-center mb-1'>{description}</p>
                <p className='text-center mt-3 font-medium'>
                  Publisher: {publisher}
                </p>
                <form className='text-center' action={amazon_product_url}>
                  <button className='rounded-full py-1 px-5 mt-4 bg-blue-200'>
                    BUY
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Books;
