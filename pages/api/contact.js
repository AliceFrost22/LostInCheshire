import sql from "@/utils/postgres";

export default async function handle(req, res) {
    // const { name, email, message } = req.query; THIS GOES WITH FETCH REQUEST

    const { name_first, name_last, email, message } = req.body; //this is through a body with a POST request
    

    if (name_first === undefined) {
        res.status(400).json({message: "First name is required"});
        return;
    }
    if (name_last === undefined) {
        res.status(400).json({message: "Last name is required"});
        return;
    }
    if (email === undefined) {
        res.status(400).json({message: "Email is required"});
        return;
    }
    if (message === undefined) {
        res.status(400).json({message: "Message is required"});
        return;
    }

    const response = await sql`
        insert into contact_messages
            (name_first, name_last, message, email)
        values
            (${name_first},${name_last}, ${message}, ${email})
    `;

    res.json({ message: "Success" });
}