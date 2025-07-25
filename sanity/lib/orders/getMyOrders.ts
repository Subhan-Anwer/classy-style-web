import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getMyOrders(userId: string) {
    if (!userId) {
        throw new Error("User Id is required");
    }

    // Define the query to get my orders based on Firebase UID, sorted by order date descending
    const MY_ORDERS_QUERY = defineQuery(`
            *[_type == "order" && firebaseUserId == $userId
            ] | order(orderDate desc) {
                ...,
                products[]{
                    ...,
                    product->
                }
            }
        `);


    try {
        // use sanityFetch to send the query
        const orders = await sanityFetch({
            query: MY_ORDERS_QUERY,
            params: { userId },
        });

        // return the list of orders or an empty array if no orders found
        return orders.data || [];
    } catch (error) {
        console.error("Error fetching orders:" ,error);
        throw new Error("Error fetching orders");
    }
}