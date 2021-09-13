import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {

  const [name, setName] = useState();
  const [quote, setQuote] = useState();
  const [book, setBook] = useState();
  const [character, setCharacter] = useState();
  const [author, setAuthor] = useState();

  const resetInput = () => {
    document.getElementById("name").value = null;
    document.getElementById("quote").value = null;
    document.getElementById("author").value = null;
    document.getElementById("character").value = null;
    document.getElementById("book").value = null;
  }

  const handleEmpty = (type) => {
    document.getElementById(`no-${type}`).classList.remove("hidden")
    document.getElementById(`no-${type}`).classList.add("block")
    setTimeout(() => {
      document.getElementById(`no-${type}`).classList.remove("block")
      document.getElementById(`no-${type}`).classList.add("hidden")
    }, 2500)
  }

  const validateInput = () => {
    if(document.getElementById("name").value === "") {
      handleEmpty("name")
      return false
    } else if(document.getElementById("quote").value === "") {
      handleEmpty("quote")
      return false
    } else if(document.getElementById("book").value === "") {
      handleEmpty("book")
      return false
    } else if(document.getElementById("character").value === "") {
      handleEmpty("character")
      return false
    } else if(document.getElementById("author").value === "") {
      handleEmpty("author")
      return false
    } else {
      return true
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(validateInput()) {
      resetInput()
      const response = await fetch("/api/quotes/submit", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "bookspeak_auth": "bookisbest"
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify({name, quote, book, character, author}),
      })
      const responseAwaited = await response.json()
      
      document.getElementById("popper").classList.remove("invisible")
      document.getElementById("popper").classList.add("visible")
      
      setTimeout(() => {
        document.getElementById("popper").classList.remove("visible")
        document.getElementById("popper").classList.add("invisible")
      }, 2500)
    }
  }

  const handleLongQuote = () => {
    let quote = document.getElementById("quote").value;
    
    if(quote.split(" ").length >= 30) {
      document.getElementById("long-quote").classList.remove("hidden")
      document.getElementById("long-quote").classList.add("block")
    } else {
      document.getElementById("long-quote").classList.remove("block")
      document.getElementById("long-quote").classList.add("hidden")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Book Speak</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        />
        <meta
          name="description"
          content="BookSpeak is your place to find powerful quotes, contribute towards getting your favourite quote on the website and explore new authors."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Parthiv Menon, parthivmenon01@gmail.com" />
        <meta
          name="keywords"
          content="parthiv menon, bookspeak, books, quotes, authors, quote, reading, library"
        />
        <meta name="url" content="https://bookspeak.parthivmenon.com" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bookspeak.parthivmenon.com" />
        <meta name="reply-to" content="parthivmenon01@gmail.com" />
        {/* OG meta tags */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Book Speak | Let the Words Reveal"
        />
        <meta
          property="og:description"
          content="BookSpeak is your place to find powerful quotes, contribute towards getting your favourite quote on the website and explore new authors."
        />
        <meta property="og:image" content="/images/BookSpeakLight.png" />
        <meta property="og:url" content="https://bookspeak.parthivmenon.com/" />
        <meta
          property="og:site_name"
          content="Book Speak | Let the Words Reveal"
        />
        <meta
          name="twitter:title"
          content="Book Speak | Let the Words Reveal"
        />
        <meta
          name="twitter:description"
          content="BookSpeak is your place to find powerful quotes, contribute towards getting your favourite quote on the website and explore new authors."
        />
        <meta name="twitter:image" content="/images/mist_og.png" />
      </Head>
      <div className="flex min-h-screen flex-col items-center w-full flex-1 md:px-20 px-5 text-center z-50">
        <div className="h-48 fixed flex">
          <div className="p-5">
            <div className="w-96 bg-gray-lightest invisible rounded-lg p-3 shadow-xl" id="popper">
              <div className="flex flex-row justify-center">
                <div className="px-2">
                  <svg width="24" height="24" viewBox="0 0 1792 1792" fill="#51A1FF" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                  </svg>
                </div>
                <div className="ml-2 mr-6">
                  <span className="font-semibold bold-text">I GOT THAT!</span>
                  <span className="block text-blue">Keep visiting to see your quote here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 z-0 top-0 absolute w-full flex lg:justify-start justify-center">
          <svg className="h-full block" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#51A1FF" fillOpacity="0.1" d="M38.5,-41.1C50.1,-27,59.6,-13.5,60.3,0.7C61,14.9,52.9,29.9,41.4,43.4C29.9,56.9,14.9,69,-3.1,72.1C-21.2,75.2,-42.3,69.4,-58.7,55.9C-75.1,42.3,-86.8,21.2,-83.1,3.7C-79.4,-13.8,-60.3,-27.6,-44,-41.7C-27.6,-55.8,-13.8,-70.2,-0.1,-70.1C13.5,-69.9,27,-55.2,38.5,-41.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="w-full z-20 h-80 flex items-center my-5">
          <div className="flex flex-col lg:items-start items-center justify-center h-full w-full">
            <p className="bold-text lg:text-9xl text-6xl">Book Speak<span className="lg:text-9xl text-5xl text-blue">.</span></p>
            <p className="light-text lg:text-5xl text-3xl text-gray-dark">Let the words reveal</p>
          </div>
        </div>
        <div className="w-full h-2/4 flex items-center">
          <div className="flex flex-col md:items-start items-center justify-center h-full w-full">
            <p className="light-text md:w-1/2 md:px-0 px-5 md:text-left text-center md:text-3xl text-2xl text-gray-dark">
              Words are <span className="regular-text">powerful</span>. Sentences can change perspectives. 
              And some quotes can change you. Book Speak has a list of the best and most impactful quotes 
              from books, for book lovers.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center h-24 md:justify-start justify-center mb-5">
          <Link href="/quotes">
            <button className="p-3 bg-orange rounded-lg w-52 text-xl bold-text text-gray-darkest translate-button hover:ring-4 hover:ring-offset-2 ring-orange">
              READ NOW <span><i className="lni lni-chevron-right text-2xl font-bold"></i></span> 
            </button>
          </Link>
        </div>
        <div className="w-full p-10 md:h-58 border-t border-b border-gray-light grid lg:grid-cols-4 grid-cols-1 gap-2 items-center">
          <div className="header-logo w-48 h-48 mx-auto lg:mx-0"></div>
          <div className="lg:col-span-3 h-full flex lg:flex-row md:flex-row flex-col items-center justify-end">
            <div className="mx-5 w-96 px-2 text-gray-dark text-3xl lg:text-right text-center light-text my-3">
              <p>Do you want to see your favourite quote here?</p>
            </div>
            <a href="#submit">
            <button className="md:h-24 lg:w-24 min-w-1/2 px-3 h-16 bg-blue rounded-lg lg:rounded-full flex items-center justify-center text-gray-lightest bold-text translate-button hover:ring-4 hover:ring-offset-2">
              <p className="text-2xl">YESSS</p>
              <span><i className="lni lni-checkmark font-bold text-2xl mx-2 lg:hidden inline"></i></span>
            </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center w-3/4 flex-1 text-center my-5 lg:h-72 h-96">
        <div className="h-full flex flex-col justify-center bg-gray-lightest rounded-lg lg:w-2/4 md:w-1/2 w-full mx-10 hover:shadow-md hover:-translate-y-2 my-3 p-3">
          <p className="bold-text lg:text-9xl text-8xl text-gray-darkest">4</p>
          <p className="text-3xl light-text text-gray-dark">QUOTES THAT YOU WILL LOVE TO READ</p>
        </div>
        <div className="h-full flex flex-col justify-center bg-gray-lightest rounded-lg lg:w-2/4 md:w-1/2 w-full mx-10 hover:shadow-md hover:-translate-y-2 my-3 p-3">
          <p className="bold-text lg:text-9xl text-8xl text-gray-darkest">3</p>
          <p className="text-3xl light-text text-gray-dark">ENTHUSIASTIC CONTRIBUTORS</p>
        </div>
        <div className="h-full flex flex-col justify-center bg-gray-lightest rounded-lg lg:w-2/4 md:w-1/2 w-full mx-10 hover:shadow-md hover:-translate-y-2 my-3 p-3">
          <p className="bold-text lg:text-9xl text-8xl text-gray-darkest">4</p>
          <p className="text-3xl light-text text-gray-dark">BESTSELLING AUTHORS QUOTED</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full flex-1 text-center h-48">
        <div className="h-full w-full flex items-center justify-center">
          <Link href="/quotes">
            <button className="text-orange translate-button hover:text-gray-lightest regular-text text-2xl hover:bg-orange hover:ring-2 hover:ring-orange hover:ring-offset-2 px-5 py-3 rounded-lg">Check the collection now<span className="mx-3"><i className="lni lni-arrow-right-circle text-3xl"></i></span></button>
          </Link>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center w-full flex-1 text-center my-5" id="submit">
        <div className="min-h-screen w-full grid lg:grid-cols-2 grid-cols-1">
          <div className="h-full w-full">
            <div className="h-full lg:w-3/5 md:w-3/4 mx-auto p-5 flex flex-col items-start justify-center">
              <div className="text-5xl bold-text text-left">
                <p>Your Quote</p>
              </div>
              <div className="text-gray my-1 text-left">
                <span className="text-gray-dark">Send me your favourite quote and I'll put it on Book Speak!</span> 
                <br/>Your personal information, if any, will be entirely secure
              </div>
              <form className="my-5 w-full text-left">
                <div className="my-1">
                  <label htmlFor="name" className="block regular-text text-2xl text-gray-dark">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      required
                      name="name"
                      id="name"
                      className="mt-1 block sm:text-sm p-2 w-full border border-gray"
                      placeholder="How do I know you?"
                      defaultValue={''}
                      autoComplete="off"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <p className="text-sm text-blue hidden" id="no-name">
                    Oops, your name cannot be empty!
                  </p>
                </div>
                <div className="my-1">
                  <label htmlFor="name" className="block regular-text text-2xl text-gray-dark">
                    Quote
                  </label>
                  <div className="mt-1">
                    <textarea
                      required
                      rows={3}
                      name="quote"
                      id="quote"
                      className="mt-1 block sm:text-sm p-2 w-full border border-gray"
                      placeholder="What's your favourite quote?"
                      defaultValue={''}
                      autoComplete="off"
                      onChange={(e) => {
                        setQuote(e.target.value) 
                        handleLongQuote()
                        }
                      }
                    />
                  </div>
                  <p className="text-sm text-blue hidden" id="long-quote">
                    Oops, the quote is a bit too long. Try your second favourite one!
                  </p>
                  <p className="text-sm text-blue hidden" id="no-quote">
                    Oops, the quote cannot be empty!
                  </p>
                </div>
                <div className="my-1">
                  <label htmlFor="name" className="block regular-text text-2xl text-gray-dark">
                    Book
                  </label>
                  <div className="mt-1">
                    <input
                      required
                      name="book"
                      id="book"
                      className="mt-1 block w-full sm:text-sm p-2 w-full border border-gray"
                      placeholder="Which book is it from?"
                      defaultValue={''}
                      autoComplete="off"
                      onChange={(e) => setBook(e.target.value)}
                    />
                  </div>
                  <p className="text-sm text-blue hidden" id="no-book">
                    Oops, book name cannot be empty!
                  </p>
                </div>
                <div className="my-1">
                  <label htmlFor="name" className="block regular-text text-2xl text-gray-dark">
                    Character
                  </label>
                  <div className="mt-1">
                    <input
                      required
                      name="character"
                      id="character"
                      className="mt-1 block w-full sm:text-sm p-2 w-full border border-gray"
                      placeholder="Who said it in the book?"
                      defaultValue={''}
                      autoComplete="off"
                      onChange={(e) => setCharacter(e.target.value)}
                    />
                  </div>
                  <p className="text-sm text-blue hidden" id="no-character">
                    Oops, character name cannot be empty!
                  </p>
                </div>
                <div className="my-1">
                  <label htmlFor="name" className="block regular-text text-2xl text-gray-dark">
                    Author
                  </label>
                  <div className="mt-1">
                    <input
                      required
                      name="author"
                      id="author"
                      className="mt-1 block w-full sm:text-sm p-2 w-full border border-gray"
                      placeholder="Who wrote the book?"
                      defaultValue={''}
                      autoComplete="off"
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                  <p className="text-sm text-blue hidden" id="no-author">
                    Oops, author name cannot be empty!
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <button type="submit" className="px-5 py-2 bg-blue my-2 w-32 rounded-lg hover:ring-2 hover:ring-offset-2 text-gray-lightest" onClick={handleSubmit}>Send Now</button>
                </div>
              </form>
            </div>
          </div>
          <div className="min-h-screen w-full lg:block hidden">
            <div className="form-image h-full" style={{ backdropFilter: "blur(30px)" }}>
              <div className="h-full grid grid-cols-3 grid-rows-2 gap-2">
                <div className="h-full w-full bg-gray-lightest book-one"></div>
                <div className="h-full w-full bg-gray-lightest col-span-2 book-two"></div>
                <div className="h-full w-full bg-gray-lightest col-span-2 book-two"></div>
                <div className="h-full w-full bg-gray-lightest book-one"></div>
              </div>
            </div>
          </div>  
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .header-logo{
          background-image: url("/images/bookSpeakLogo.png");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
        .translate-button:hover {
          transform: translateY(-10px);
          transition-duration: 700ms;
        }
        .form-image {
          background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmM5VDfhYqwBHinYBAZOpl3-cKcqWHJsCww&usqp=CAU);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .book-one{
          background-image: url("/images/booksTwo.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
        .book-two{
          background-image: url("/images/booksOne.jpeg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
        textarea {
          resize: vertical;
          min-height: 100px;
          max-height: 200px;
        }
      `}  
      </style>
    </div>
  )
}
