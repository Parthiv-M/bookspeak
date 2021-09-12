import connectDb from "../../../utils/connectDb"
import axios from "axios";

export default async function hander(req, res) {
    await connectDb();
    const { method, body } = req;
    
    const searchAuthor = body.author;

    if( method === "POST" ) {
        try {
            let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchAuthor}&utf8=&format=json`
            let response = await axios.get(url)
            res.status(200).json({ 
                success: true, 
                snippet: response.data.query.search[0].snippet.replace( /(<([^>]+)>)/ig, '').toString(), 
                url: `https://en.wikipedia.org/?curid=${response.data.query.search[0].pageid}` 
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false })
        }
    } else {
        res.status(500).json({ success: false })
    }
}