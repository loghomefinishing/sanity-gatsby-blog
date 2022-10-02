export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63390b4bbf4c250376a33f00",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-3s1n1fte",
                  apiId: "6c1f7970-313d-4737-a945-acdc31331275",
                },
                {
                  buildHookId: "63390b4bbf4c25040aa33ee1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7w48zvhx",
                  apiId: "43663fd8-4fee-4d97-b5bc-f8258b93ba25",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/loghomefinishing/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7w48zvhx.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
