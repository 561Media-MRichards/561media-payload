import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'

import { contactForm as contactFormData } from './contact-form'
import { home561 } from './561-home'
import { marketingAutomation, seoPage, webDesignPage, smallBusinessPage } from './561-services'
import { aboutPage } from './561-about'
import { contact561 } from './561-contact'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
]

const globals: GlobalSlug[] = ['header', 'footer']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database with 561 Media content...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {
          navItems: [],
        },
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding pages...`)

  // Create all pages
  const [homePage, aboutPageDoc, contactPageDoc, marketingPage, seoPageDoc, webDesignPageDoc, smallBusinessPageDoc] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 0,
      context: {
        disableRevalidate: true,
      },
      data: home561(),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      context: {
        disableRevalidate: true,
      },
      data: aboutPage(),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      context: {
        disableRevalidate: true,
      },
      data: contact561({ contactForm }),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      context: {
        disableRevalidate: true,
      },
      data: marketingAutomation(),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      context: {
        disableRevalidate: true,
      },
      data: seoPage(),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      context: {
        disableRevalidate: true,
      },
      data: webDesignPage(),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      context: {
        disableRevalidate: true,
      },
      data: smallBusinessPage(),
    }),
  ])

  payload.logger.info(`— Seeding globals (header & footer)...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'reference',
              label: 'Home',
              reference: {
                relationTo: 'pages',
                value: homePage.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Marketing Automation',
              reference: {
                relationTo: 'pages',
                value: marketingPage.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'SEO',
              reference: {
                relationTo: 'pages',
                value: seoPageDoc.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Web Design',
              reference: {
                relationTo: 'pages',
                value: webDesignPageDoc.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'About',
              reference: {
                relationTo: 'pages',
                value: aboutPageDoc.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Contact',
              reference: {
                relationTo: 'pages',
                value: contactPageDoc.id,
              },
            },
          },
        ],
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          {
            link: {
              type: 'reference',
              label: 'Home',
              reference: {
                relationTo: 'pages',
                value: homePage.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'About',
              reference: {
                relationTo: 'pages',
                value: aboutPageDoc.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Contact',
              reference: {
                relationTo: 'pages',
                value: contactPageDoc.id,
              },
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Admin',
              url: '/admin',
            },
          },
        ],
      },
    }),
  ])

  payload.logger.info('Seeded 561 Media database successfully!')
}
