export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '60be63ea6699730f1e62e51e',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-jw3j2cus',
                  apiId: '5870cad0-2504-46da-adc1-873760b96028'
                },
                {
                  buildHookId: '60be63eb80fddf0c93cfbb97',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-vzh2evwx',
                  apiId: '6e5440d6-c27d-48da-9a7d-c4f2bed28029'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/steve904/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-vzh2evwx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
