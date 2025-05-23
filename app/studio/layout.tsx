export const metadata = {
    title: "Classy Style | Jewelry and Accessories",
    description: "Developed by Subhan Anwer"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}