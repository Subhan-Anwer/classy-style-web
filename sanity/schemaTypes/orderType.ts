import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const orderType = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    icon: BasketIcon,
    fields: [
        defineField({
            name: 'orderId',
            title: 'Order Id',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'firebaseUserId',
            title: 'Store User ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'customerName',
            title: 'Customer Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Customer Email',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'phone',
            title: 'Customer Phone No',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'address',
            title: 'Customer Address',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'city',
            title: 'Customer City',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'postalCode',
            title: 'Customer Postal Code',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'engravingName',
            title: 'Name To Engrave on Jewelry',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'note',
            title: 'Special Note by Customer',
            type: 'string',
        }),
        defineField({
            name: 'products',
            title: 'Products',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'product',
                            title: 'Product Bought',
                            type: 'reference',
                            to: [{ type: 'product' }],
                        }),
                        defineField({
                            name: 'quantity',
                            title: 'Quantity Purchased',
                            type: 'number',
                        }),
                    ],
                    preview: {
                        select: {
                            product: 'product.name',
                            quantity: 'quantity',
                            image: 'product.image',
                            price: 'product.price',
                            currency: 'product.currency',
                        },
                        prepare(select) {
                            return {
                                title: `${select.product} x ${select.quantity}`,
                                subtitle: `${select.price} * ${select.quantity}`,
                                media: select.image,
                            };
                        },
                    },
                }),
            ],
        }),
        defineField({
            name: 'totalPrice',
            title: 'Total Price',
            type: 'string',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'currency',
            title: 'Currency',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list:[
                    {title: "Cash on Delivery", value: "cash-on-delivery"},
                    {title: "Paid", value: "paid"},
                    {title: "Shipped", value: "shipped"},
                    {title: "Delivered", value: "delivered"},
                    {title: "Cancelled", value: "cancelled"},
                ],
            },
        }),
        defineField({
            name: 'offerApplied',
            title: 'Offer Applied',
            type: 'boolean',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'orderDate',
            title: 'Order Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        select: {
            name: 'customerName',
            amount: 'totalPrice',
            currency: 'currency',
            orderId: 'orderId',
            email: 'email',
        },
        prepare(select) {
            const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
            return {
                title: `${select.name} (${orderIdSnippet})`,
                subtitle: `${select.currency} ${select.amount}, ${select.email}`,
                media: BasketIcon,
            }
        }
    }
});