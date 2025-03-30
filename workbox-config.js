
module.exports = {
  globDirectory: './',  // Define the directory where the files are located
  globPatterns: [
    '**/*.{html,json,js,css,mpga,mp3,jpeg,jpg,png,svg,gif}'  // Add all necessary file extensions
  ],
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10 MB limit for file size
  swDest: 'service-worker.js',  // The destination for the generated service worker
  clientsClaim: true,  // Enable clients claim
  skipWaiting: true  // Skip the waiting phase to take control of the page immediately
};
