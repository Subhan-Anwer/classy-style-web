import { FeedbackIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contactType = defineType({
    name: 'contactQuery',
    title: 'Contact Query',
    type: 'document',
    icon: FeedbackIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'phone',
            title: 'Phone No',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'msg',
            title: 'Message',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date of Query',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        select: {
            name: 'name',
            date: 'date',
            msg: 'msg',
        },
        prepare(select) {
            const formattedDate = select.date?.slice(0, 10); // gets "YYYY-MM-DD"
            return {
                title: `${select.name} (${formattedDate})`,
                subtitle: `${select.msg}`,
                media: FeedbackIcon,
            }
        }
    }
});