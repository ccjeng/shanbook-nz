module.exports = {
    title: '紐西蘭',
    description: '善善的第四本書：紐西蘭',
    base: '/',
    repo: 'https://github.com/ccjeng/shanbook-nz',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        sidebarDepth: 0,
        sidebar: [
          ['/','前言'],
          ['01','紐西蘭的美，美在天寬地闊']
        ],
        nav: [
          { text: '首頁', link: '/' },
          { text: '其他電子書', items: [
            { text: '我環遊世界的故事和勵志書', link: 'https://shanbook.carissalove.com/' },
            { text: '英國是個高度尊重禮遇身心障礙人士的先進國家', link: 'https://shanuk.carissalove.com/' },
            { text: '杜拜是瞥見阿拉伯世界的一扇窗', link: 'https://shanuae.carissalove.com/' }
          ]
          }          
        ]
      },
    plugins: [
        ['@vuepress/google-analytics', {'ga': ''} ],
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated'],
        ['img-lazy']
    ]
}
