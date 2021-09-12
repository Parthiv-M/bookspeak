import connectDb from "../../../utils/connectDb";
import Submission from "../../../models/Submission";

export default async function hander(req, res) {
    await connectDb();
    const { method, body } = req;
    
    if( method === "POST" ) {
        try {
            if(req.headers.bookspeak_auth === "bookisbest"){
                let submission = new Submission({
                    name: body.name,
                    date: new Date(),
                    book: body.book,
                    author: body.author,
                    quote: body.quote,
                    character: body.character
                });
                await submission.save()
                res.status(200).json({ success: true, message: "I have received your suggestion. Stay on the lookout!" })
            } else {
                res.status(401).json({ success: false, message: "Authentication error" })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false })
        }
    } else {
        res.status(500).json({ success: false })
    }
}