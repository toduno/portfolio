// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity"
import { Project } from "../../typings";

//query by groq method document of type project and expand the technologies reference (to include more details)
//and get the info. '->' reps expand
const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]-> 
    }
`


type Data = {
    projects: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const projects: Project[] = await sanityClient.fetch(query)

    res.status(200).json({ projects })
}


