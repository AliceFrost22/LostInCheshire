import sql from "/utils/postgres";

export default async function handler(req, res) {
 
    const location = await sql`
      select location_name from locations
    `;


  res.json(location);
}
 
