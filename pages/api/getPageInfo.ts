// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity"
import { PageInfo } from "../../typings";

//query by groq method document of type pageInfo and get only the first info 
const query = groq`
    *[_type == "pageInfo"][0]
`


type Data = {
    pageInfo: PageInfo   
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const pageInfo: PageInfo = await sanityClient.fetch(query)

    res.status(200).json({ pageInfo })
}