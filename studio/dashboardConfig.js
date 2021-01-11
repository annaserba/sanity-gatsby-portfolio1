export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffba036eb91b7d6e628df02',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-1-studio-9te9ymjv',
                  apiId: 'd7cd5aa8-a4de-40a4-a4b2-250041c65bce'
                },
                {
                  buildHookId: '5ffba0361e18091bea40ebdf',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-1-web-7p96zpe4',
                  apiId: '5a929cd8-ac47-46a1-95ea-43571b051b88'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/annaserba/sanity-gatsby-portfolio1',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-1-web-7p96zpe4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
