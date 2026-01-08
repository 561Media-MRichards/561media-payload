import type { RequiredDataFromCollectionSlug } from 'payload'

// Marketing Automation Page
export const marketingAutomation: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    slug: 'marketing-automation',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Marketing Automation',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h1',
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'We provide you with the best marketing tools and tactics to deliver a real benefit to your bottom line. Helping your business grow is our number one priority.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    layout: [
      {
        blockName: 'Introduction',
        blockType: 'content',
        columns: [
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Your Expert Marketing Automation Partner',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h2',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "561 Media's Marketing Automation services feature a set of powerful tools and services to help your business grow. Using the latest technology in marketing automation as well as our expertise in inbound marketing, lead generation, and PPC, you will benefit from highly optimized marketing campaigns and increased revenue streams.",
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'We help companies, marketing and sales managers develop more sales-ready leads for their businesses every day.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'full',
          },
        ],
      },
      {
        blockName: 'Automation Tools',
        blockType: 'content',
        columns: [
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Automation Tools We Supply',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h2',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'full',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [{ type: 'text', text: 'Email Automation', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [{ type: 'text', text: 'Send follow-up emails automatically at the right time and notify your sales staff when your prospects are ready to buy.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [{ type: 'text', text: 'Website Visitor ID', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [{ type: 'text', text: "Identify people that come to your site and proactively reach out to them. Receive a list of the day's hottest leads right to your inbox.", version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [{ type: 'text', text: 'Full CRM System', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [{ type: 'text', text: "Track opportunities from creation to close with a bird's eye view of your pipeline. Create custom deal stages, fields, filters, and more.", version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [{ type: 'text', text: 'Landing Pages', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [{ type: 'text', text: 'Create high-converting landing pages that capture leads and drive conversions. No coding required.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [{ type: 'text', text: 'Social Media Integration', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [{ type: 'text', text: "Explore a lead's social links directly from the Contact Manager to gain a 360° understanding of their interests.", version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [{ type: 'text', text: 'Intuitive Email Editor', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [{ type: 'text', text: 'Create professional-looking emails with our drag and drop editor. Track your emails from start to finish.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
        ],
      },
      {
        blockName: 'CTA',
        blockType: 'cta',
        links: [
          {
            link: {
              type: 'custom',
              appearance: 'default',
              label: 'Get a Free Demo',
              url: '/contact',
            },
          },
        ],
        richText: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Ready to Automate Your Marketing?', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h2',
                version: 1,
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Get a personalized demo and see how marketing automation can transform your business.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    ],
    meta: {
      description: 'Transform your marketing with powerful automation tools. Email automation, CRM integration, lead scoring, and more. Get a personalized demo from 561 Media.',
      title: 'Marketing Automation Services | 561 Media',
    },
    title: 'Marketing Automation',
  }
}

// SEO Page
export const seoPage: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    slug: 'seo',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [{ type: 'text', text: 'Search Engine Optimization', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h1',
              version: 1,
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Get found online with proven SEO strategies. We help you climb Google rankings and drive organic traffic to your site.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    layout: [
      {
        blockName: 'SEO Services',
        blockType: 'content',
        columns: [
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [{ type: 'text', text: 'Comprehensive SEO Services', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h2',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [{ type: 'text', text: 'Our SEO experts use data-driven strategies to improve your search engine rankings and drive qualified organic traffic to your website.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'full',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  { type: 'heading', children: [{ type: 'text', text: 'Technical SEO', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1 },
                  { type: 'paragraph', children: [{ type: 'text', text: 'We optimize your website\'s technical foundation for better crawling, indexing, and overall search performance.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  { type: 'heading', children: [{ type: 'text', text: 'On-Page SEO', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1 },
                  { type: 'paragraph', children: [{ type: 'text', text: 'Content optimization, meta tags, internal linking, and keyword strategy to help your pages rank higher.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  { type: 'heading', children: [{ type: 'text', text: 'Link Building', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1 },
                  { type: 'paragraph', children: [{ type: 'text', text: 'Build high-quality backlinks that boost your domain authority and improve your search rankings.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
        ],
      },
      {
        blockName: 'CTA',
        blockType: 'cta',
        links: [{ link: { type: 'custom', appearance: 'default', label: 'Get a Free SEO Audit', url: '/contact' } }],
        richText: {
          root: {
            type: 'root',
            children: [
              { type: 'heading', children: [{ type: 'text', text: 'Ready to Rank Higher?', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1 },
              { type: 'paragraph', children: [{ type: 'text', text: 'Get a free SEO audit and discover opportunities to improve your search rankings.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    ],
    meta: {
      description: 'Professional SEO services to help your business rank higher on Google. Technical SEO, on-page optimization, and link building strategies from 561 Media.',
      title: 'SEO Services | Search Engine Optimization | 561 Media',
    },
    title: 'Search Engine Optimization',
  }
}

// Web Design Page
export const webDesignPage: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    slug: 'web-design',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      richText: {
        root: {
          type: 'root',
          children: [
            { type: 'heading', children: [{ type: 'text', text: 'Website Design & Development', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h1', version: 1 },
            { type: 'paragraph', children: [{ type: 'text', text: 'Beautiful, functional websites that convert visitors into customers. Responsive design built for performance.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    layout: [
      {
        blockName: 'Web Services',
        blockType: 'content',
        columns: [
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  { type: 'heading', children: [{ type: 'text', text: 'Web Design That Converts', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1 },
                  { type: 'paragraph', children: [{ type: 'text', text: 'We create stunning websites that not only look great but are optimized for conversions and user experience.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'full',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  { type: 'heading', children: [{ type: 'text', text: 'Custom Design', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1 },
                  { type: 'paragraph', children: [{ type: 'text', text: 'Every website we build is custom designed to match your brand and business goals.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  { type: 'heading', children: [{ type: 'text', text: 'Mobile Responsive', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1 },
                  { type: 'paragraph', children: [{ type: 'text', text: 'Your website will look and work perfectly on all devices, from desktop to mobile.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  { type: 'heading', children: [{ type: 'text', text: 'Fast Performance', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1 },
                  { type: 'paragraph', children: [{ type: 'text', text: 'Speed-optimized websites that load fast and keep visitors engaged.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
        ],
      },
      {
        blockName: 'CTA',
        blockType: 'cta',
        links: [{ link: { type: 'custom', appearance: 'default', label: 'Start Your Project', url: '/contact' } }],
        richText: {
          root: {
            type: 'root',
            children: [
              { type: 'heading', children: [{ type: 'text', text: 'Ready for a New Website?', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1 },
              { type: 'paragraph', children: [{ type: 'text', text: 'Let\'s discuss your project and create a website that grows your business.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    ],
    meta: {
      description: 'Professional website design and development services. Custom, responsive websites built for performance and conversions. Get started with 561 Media.',
      title: 'Website Design & Development | 561 Media',
    },
    title: 'Website Design & Development',
  }
}

// Small Business Marketing Page
export const smallBusinessPage: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    slug: 'small-business',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      richText: {
        root: {
          type: 'root',
          children: [
            { type: 'heading', children: [{ type: 'text', text: 'Small Business Marketing', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h1', version: 1 },
            { type: 'paragraph', children: [{ type: 'text', text: 'Tailored marketing solutions designed specifically for startups and SMEs. Get online and start growing fast.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    layout: [
      {
        blockName: 'Small Business Services',
        blockType: 'content',
        columns: [
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  { type: 'heading', children: [{ type: 'text', text: 'Marketing Solutions for Growing Businesses', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1 },
                  { type: 'paragraph', children: [{ type: 'text', text: 'We understand the unique challenges small businesses face. Our affordable marketing packages are designed to deliver maximum impact within your budget.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'full',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  { type: 'heading', children: [{ type: 'text', text: 'Local SEO', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1 },
                  { type: 'paragraph', children: [{ type: 'text', text: 'Get found by customers in your area with local search optimization.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  { type: 'heading', children: [{ type: 'text', text: 'Social Media', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1 },
                  { type: 'paragraph', children: [{ type: 'text', text: 'Build your brand presence and engage with customers on social platforms.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  { type: 'heading', children: [{ type: 'text', text: 'Google Ads', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1 },
                  { type: 'paragraph', children: [{ type: 'text', text: 'Targeted advertising to reach customers actively searching for your services.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
        ],
      },
      {
        blockName: 'CTA',
        blockType: 'cta',
        links: [{ link: { type: 'custom', appearance: 'default', label: 'Get Started Today', url: '/contact' } }],
        richText: {
          root: {
            type: 'root',
            children: [
              { type: 'heading', children: [{ type: 'text', text: 'Ready to Grow Your Business?', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1 },
              { type: 'paragraph', children: [{ type: 'text', text: 'Schedule a free consultation and discover how we can help your business grow.', version: 1, detail: 0, format: 0, mode: 'normal', style: '' }], direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1 },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    ],
    meta: {
      description: 'Affordable digital marketing solutions for small businesses and startups. Local SEO, social media, and Google Ads packages from 561 Media.',
      title: 'Small Business Marketing | 561 Media',
    },
    title: 'Small Business Marketing',
  }
}
