import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '14c3d61dc6b9469b8092ac2b317c9780',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'circle.institute',
  domain: 'circle.institute',
  author: 'Alex Soldatkin',

  // open graph metadata (optional)
  description: 'circle: a well-rounded education',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'alex-soldatkin',
  linkedin: 'alexsoldatkin',
  // mastodon: 'circl.institute', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: 'circle.institute', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  instagram: 'circle.institute', // optional instagram username

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: './public/favicon.ico',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '14c3d61dc6b9469b8092ac2b317c9780?pvs=4#33cf69c4f62445209cf7a1a545cb9569'
    },
    {
      title: 'Courses',
      pageId: '6a6f44d67e0240c69ac0adfa6c483120'
    },

    {
      title: 'Curriculum',
      pageId: '9f3e402932a344eeaafc660eeeff4711'
    },
    {
      title: 'FAQ',
      pageId: '94cb462d8f874103ab629d9255600465'
    },

    {
      title: 'Schedule',
      pageId: '4f5a9b8c059243c7a259bea893918a5a'
    }
  ]
})
