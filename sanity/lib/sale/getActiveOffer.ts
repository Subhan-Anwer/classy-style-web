import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getActiveOffer = async () => {
    const GET_ACTIVE_OFFER_QUERY = defineQuery(`
            *[_type == "offer" && isActive == true][0]
        `)

    try {
        const offer = await sanityFetch({
            query: GET_ACTIVE_OFFER_QUERY,
        })

        return offer ? offer.data : null;
    } catch (error) {
        console.log("Error fetching Active Offer: ", error);
        return null;
    }
}