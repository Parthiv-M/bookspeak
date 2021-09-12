import connectDb from "../../../utils/connectDb";
import Quote from "../../../models/Quote";

export default async function hander(req, res) {
    await connectDb();
    const { method, body } = req;
    
    if( method === "POST" ) {
        try {
            if(req.headers.bookspeak_auth === "bookisbest"){
                let quote = new Quote({
                    suggested: body.suggested,
                    date: new Date(body.date),
                    book: body.book,
                    author: body.author,
                    image: body.image
                });
                await quote.save()
                res.status(200).json({ success: true, message: "Quote added" })
            } else {
                res.status(401).json({ success: false, message: "Authentication error" })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false })
        }
    } else if(method === "GET") {
        try {
            const quotes = await Quote.find({}).sort("-date")
            if(!quotes) return res.status(409).json({ success: false, message: "No quotes here" })
            res.status(200).json({ success: true, data: quotes }) 
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false })
        }
    } else {
        res.status(500).json({ success: false })
    }
}