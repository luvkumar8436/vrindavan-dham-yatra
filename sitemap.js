require('babel-register')
const router = require('./src/App').default;
const sitemap = require('../').default;
const hostname = "https://vrindavandhamyatra.com";

(
  new sitemap(router)
      .build(hostname)
      .save('./sitemap.xml')
);


// const { SitemapStream, streamToPromise } = require( 'sitemap' )
// const { Readable } = require( 'stream' )
// const sitemap = require('sitemap')
// const locations = [
//   "Banglore",
//   "Hyderabad",
//   "Chandigarh",
//   "Pune",
//   "Gurgaon",
//   "Chennai",
//   "Kolkata"
// ]
// // const locations = require('./src/components/toursFromData.js')
// const urls = [
//   { url: '/', changefreq: 'daily', priority: 1 },
//   { url: '/about', changefreq: 'monthly', priority: 0.8 },
//   { url: '/contact', changefreq: 'monthly', priority: 0.8 },
//   // Add additional pages here
// ];

// locations.map(
//   (location) => {
//       urls.push({url: `/tour-packages-from-${location.toLowerCase()}` , changefreq: 'weekly', priority: '0.8' })
//       urls.push({url: `/tour-packages-from-${location.toLowerCase()}/:packageName` , changefreq: 'weekly', priority: '0.8' } )
//       return {};
//   }
// )

// const sitemapInstance = sitemap.createSitemap({
//   hostname, urls,
// });

// console.log(sitemapInstance.toString())