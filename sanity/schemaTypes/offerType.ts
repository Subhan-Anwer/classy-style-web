import { ConfettiIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
    name: 'offer',
    title: 'Offer',
    type: 'document',
    icon: ConfettiIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Offer Title',
            type: 'string',
            validation: Rule => Rule.required().min(0)
        }),
        defineField({
            name: 'description',
            title: 'Offer Description',
            type: 'text',
        }),
        defineField({
            name: 'validFrom',
            title: 'Valid From',
            type: 'datetime',
        }),
        defineField({
            name: 'validUntil',
            title: 'Valid Until',
            type: 'datetime',
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            description: 'toggle to activate/deactivate the sale',
            initialValue: true,
            validation: Rule => Rule.required()
        }),
    ],
    preview: {
        select: {
            title: 'title',
            isActive: 'isActive',
        },
        prepare(selection) {
            const { title, isActive } = selection;
            const status = isActive ? "Active" : "Inactive";
            return {
                title,
                subtitle: `Status - ${status}`
            }
        },
    },
});