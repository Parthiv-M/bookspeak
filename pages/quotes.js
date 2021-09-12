import Head from 'next/head'
import Footer from '../components/Footer'
import QuoteCard from './../components/QuoteCard'
import AuthorCard from './../components/AuthorCard'
import { useEffect, useState } from 'react'

export default function Quotes({ quotes }) {

  const [open, setOpen] = useState(false)
  const [searchAuthor, setSearchAuthor] = useState()
  const [searchResult, setSearchResult] = useState()

  useEffect(() => {
    if(searchAuthor != undefined){
      findAuthor()
    }
  }, [searchAuthor])

  const findAuthor = async() => {
    if(searchAuthor !== undefined){
      const response = await fetch("/api/author/", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify({author: searchAuthor}),
      })
      const responseAwaited = await response.json()
      setSearchResult(responseAwaited)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Quotes | Book Speak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center w-full flex-1 md:px-20 px-5 text-center">
        <div className="h-96 z-0 top-0 absolute w-full flex lg:justify-start justify-center">
          <svg className="h-full block" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#51A1FF" fillOpacity="0.1" d="M38.5,-41.1C50.1,-27,59.6,-13.5,60.3,0.7C61,14.9,52.9,29.9,41.4,43.4C29.9,56.9,14.9,69,-3.1,72.1C-21.2,75.2,-42.3,69.4,-58.7,55.9C-75.1,42.3,-86.8,21.2,-83.1,3.7C-79.4,-13.8,-60.3,-27.6,-44,-41.7C-27.6,-55.8,-13.8,-70.2,-0.1,-70.1C13.5,-69.9,27,-55.2,38.5,-41.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="w-full z-20 h-80 flex items-center my-5">
          <div className="flex flex-col md:items-start items-center justify-center h-full w-full">
            <p className="bold-text lg:text-9xl text-6xl">Quotes<span className="lg:text-9xl text-5xl text-orange">.</span></p>
            <p className="light-text lg:text-5xl text-3xl text-gray-dark">Find your favourites here</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-8 m-5 w-full lg:p-32 p-5" style={{ height: 'fit-content' }}>
        {
          quotes.map((quote) => {
            return (
              <QuoteCard 
                key={quote._id} 
                setOpen={setOpen} 
                data={quote} 
                setSearchAuthor={setSearchAuthor} 
                findAuthor={findAuthor}
              />
            )
          })
        }
      </div>
      <AuthorCard open={open} setOpen={setOpen} author={searchAuthor} data={searchResult}/>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const resQuotes = await fetch(`${process.env.SERVER_URL}/api/quotes/`);
  const quotes = await resQuotes.json();
  return {
    props: {
      quotes: quotes.data
    },
    revalidate: 60,
  };
};
