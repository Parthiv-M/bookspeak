import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="flex items-center justify-center w-full h-64" style={{ backgroundColor: "#121212" }}>
          <div className="w-full h-full grid lg:grid-cols-1 grid-cols-1 items-center p-5">
            <div className="flex flex-col justify-center items-center text-md">
              <div className="flex jusitfy-center items-center text-xl text-gray-light">
                <a href="" target="_blank" rel="noreferrer"><i className="lni lni-github-original mx-2 hover:text-yellow cursor-pointer"></i></a>
                <a href="" target="_blank" rel="noreferrer"><i className="lni lni-linkedin-original mx-2 hover:text-purple cursor-pointer"></i></a>
                <a href="" target="_blank" rel="noreferrer"><i className="lni lni-instagram-original mx-2 hover:text-red cursor-pointer"></i></a>
              </div>
              <p className="text-gray-light text-lg mt-1">Developed by <span><a href="https://parthivmenon.com" className="rounded-lg text-gray hover:underline">Parthiv Menon</a></span></p>
              <p className="text-gray-light">with <span><a href="https://nextjs.org/" className="text-orange hover:underline">NextJS</a></span></p>
              <p className="text-gray-dark text-center my-3">The website is self developed and maintained. All rights reserved.</p>
              <div className="flex">
                <Link href="/">
                  <a className="text-gray-darkest hover:underline mx-1">
                    Home 
                  </a>
                </Link>
                <p className="text-gray-darkest">|</p>
                <Link href="/quotes">
                  <a className="text-gray-darkest hover:underline mx-1">
                    Quotes
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </footer>
    );
}

export default Footer;