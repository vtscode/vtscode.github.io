const title = 'VTSCODE'
const description = 'VTSCODE, Web Developer, javascript enthusiast and Internet Systems student'

const SEO = {
    title,
    description,
    canonical: 'https://vtscode.github.io',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        site_name: 'VTSCODE - Portfolio',
        url: 'https://vtscode.github.io',
        title,
        description,
        images: [
            {
                url: "/images/vintagepc.png",
              width: 800,
              height: 420,
                alt: title
            }
        ]
    },
    instagram: {
        handle: '@rhivent',
        site: '@rhivent',
        cardType: 'summary_large_image'
    }
}

export default SEO