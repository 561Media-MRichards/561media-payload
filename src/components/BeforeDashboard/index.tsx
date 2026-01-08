import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import { SeedButton } from './SeedButton'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to 561 Media CMS</h4>
      </Banner>
      Getting started:
      <ul className={`${baseClass}__instructions`}>
        <li>
          <SeedButton />
          {' with sample pages and posts, then '}
          <a href="/" target="_blank">
            visit your website
          </a>
          {' to see the results.'}
        </li>
        <li>
          {'Use the navigation on the left to manage '}
          <strong>Pages</strong>, <strong>Posts</strong>, and <strong>Media</strong>.
        </li>
        <li>
          {'Configure your site\'s '}
          <strong>Header</strong> and <strong>Footer</strong> from the Globals menu.
        </li>
      </ul>
    </div>
  )
}

export default BeforeDashboard
