import React from 'react'

import HeroSection from '../../sections/HeroSection/HeroSection'
import TechnologySection from '../../sections/TechnologySection/TechnologySection'

export const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }, index) => {
    switch (__typename) {
      case 'SanityHeroSections':
        return <HeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityTechnolgySection':
        return (
          <TechnologySection key={__typename} {...sectionData} {...props} />
        )
      default:
        return null
    }
  })
}

export default EntryRenderer
