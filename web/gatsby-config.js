// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "production"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "development";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: `tni5svlg`,
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true, // watchMode only in dev mode
      overlayDrafts: true || previewEnabled, // drafts in dev & Gatsby Cloud Preview
      },
    },
  ],
};
