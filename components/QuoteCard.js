import { CalcDiff } from "../utils/calcDiff"

const QuoteCard = (props) => {

    const handleAuthorClick = (props) => {
        props.setOpen(true) 
        props.setSearchAuthor(props.data.author) 
        props.findAuthor()
    }

    return (
        <div className="text-center quote-card my-2">
            <div className="quote-image lg:h-3/4 h-96 w-full"></div>
            <div className="lg:h-48 flex flex-col mt-3">
                <div className="px-5 w-full lg:h-1/4 h-20 flex items-center justify-between">
                    <div className="text-left">
                        <p className="text-sm regular-text text-gray-dark">Suggested by</p>
                        <p className="text-xl bold-text text-gray-dark">{props.data.suggested}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm regular-text text-gray-dark">BookSpoken</p>
                        <p className="text-xl bold-text text-gray-dark">
                            <CalcDiff date={props.data.date}/>
                        </p>
                    </div>
                </div>
                <div className="w-full lg:h-2/4 grid lg:grid-cols-2 grid-cols-1 items-center px-5">
                    <div className="lg:text-left text-left lg:my-0 mb-2">
                        <p className="text-sm regular-text text-gray-dark">Book</p>
                        <p className="text-xl bold-text text-gray-dark">{props.data.book}</p>
                    </div>
                    <div className="lg:text-right text-left">
                        <p className="text-sm regular-text text-gray-dark">Author</p>
                        <a className="underline cursor-pointer text-gray-dark hover:no-underline" onClick={ () => handleAuthorClick(props)}>
                            <p className="text-xl bold-text">{props.data.author}</p>
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .quote-card {
                    height: 44rem;
                }
                .quote-image{
                    background-image: url("${props.data.image}");
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    border-radius: 5px;
                } 
                @media only screen and (max-width: 800px) {
                    .quote-card {
                        height: 38rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default QuoteCard;