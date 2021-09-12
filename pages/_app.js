import { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css'
import "../styles/global.css"
import { useRouter } from "next/router";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };
    
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return <div>
    {
      loading ? (
        <div className="min-h-screen m-auto text-4xl text-blue flex flex-col justify-center text-center">
          <Loader/>
          <p className="text-xl bold-text text-gray-darkest">LOADING</p>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
}

export default MyApp
