import React, { Fragment } from 'react'
import { Page } from '@/payload-types'
import HomePage from '@/app/templates/homepage'
import WorkExperiencePage from '@/app/templates/work-experience'
import ResourcesPage from '@/app/templates/resources'
import ProjectsPage from '@/app/templates/projects'
import { toKebabCase } from '@/utilities/to-kebab-case'

const blockComponents = {
    homePage: HomePage,
    workExperiencePage: WorkExperiencePage,
    resourcesPage: ResourcesPage,
    projectsPage: ProjectsPage
}

type Props = {
    blocks: Page['template']
}

export const RenderBlocks: React.FC<Props> = props => {
    const { blocks } = props
    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

    if (hasBlocks) {
        return (
            <Fragment>
                {
                    blocks.map((block, index) => {
                        const { blockName, blockType } = block
                        if (blockType && blockType in blockComponents) {
                            const Block = blockComponents[blockType]
                            if (Block) {
                                return (
                                    <Block key={index} id={toKebabCase(blockName)} {...block} />
                                )
                            }
                        }
                        return null
                    })
                }
            </Fragment>
        )
    }
}