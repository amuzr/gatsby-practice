module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Let's break it down", // Site title.
  siteTitleAlt: "Amusing Developer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://amuzr.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Amuzr's Blog", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "467011703341569", // FB Application ID for using app insights
  googleAnalyticsID: "UA-88805675-1", // GA tracking ID.
  disqusShortname: "amuzr", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "amuzr", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Seoul, Korea", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/dev.amuzr@gmail.com.png", // User avatar to display in the author segment.
  userDescription: "개발이 즐거운 개발자입니다.",
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/amuzr/amuzr-github-io",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/devamuzr",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:dev.amuzr@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Amuzr", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
