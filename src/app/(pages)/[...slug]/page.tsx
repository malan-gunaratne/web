import React from 'react'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/app/components/RenderBlocks'

import { fetchPage, fetchPages } from '@/app/graphql'

const Page = async ({ params: { slug } }: { params: { slug: string[] } }) => {
    const page = await fetchPage(slug)
    if (!page) return notFound()
    return (
        <React.Fragment>
            <RenderBlocks blocks={page.template} />
        </React.Fragment>
    )
}

export default Page

export async function generateStaticParams() {
    const pages = await fetchPages()
    return pages.map((page) => ({
        slug: page.slug?.replace(/^\/|\/$/g, '').split('/'),
        revalidate: 1,
    }))
}