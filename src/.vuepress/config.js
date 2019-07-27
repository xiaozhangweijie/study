module.exports = {
  dest: './docs/',
  base: '/study/',
  markdown: {
    toc: { includeLevel: [2, 3] }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端知识点总结',
      description: '任何不能够给你快乐的编程都是耍流氓'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'jasonandjay/study',

    docsDir: 'src',
    editLinks: true,
   
    locales: {
      '/': {
        label: '简体中文',
        repo: 'jasonandjay/study',
      
        selectText: '选择语言',
        editLinkText: '帮助我们改进内容',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '快速搭建开发环境',
            link: '/zh/standard/End.md'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('指南'),
          '/zh/ali/': [{title:'阿里面试题'}],
          '/zh/vue/': [{title: 'Vue知识点', children: [
            '', 'Es6', 'Es6方法扩展', 'Webpack', 'Babel', 'Promise', 'Vue 各种方法之间的区别', 'Vue组件', 'Vue路由', 'Vue动画', 'vue钩子函数', 'vuex'
          ]}],
          '/zh/react/': [{title: 'React知识点', children: [
            '', 'JSX', 'MVVM', 'Props', 'React生命周期', 'React组件', 'React路由', 'redux', 'redux中间件', '组件通信', '高阶组件'
          ]}],
          '/zh/miniapp/': [{title: '小程序知识点', children: [
            '', 'WXS', 'wepy组件通信', '小程序事件', '小程序路由', '小程序组件', '小程序组件化'
          ]}]
        }
      }
    },
    
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
