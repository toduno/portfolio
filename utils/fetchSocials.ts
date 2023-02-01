//helpful utility functions for the backend api created that will be used on the frontend to make life easier 
//and pull from the backend code and finally link to the frontend

import { Social } from "../typings";

export const fetchSocials = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    )

    const data = await res.json()
    const socials: Social[] = data.socials 

    //console.log("fetching", socials)

    return socials
}