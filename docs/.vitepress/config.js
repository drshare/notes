module.exports = {
    title: '笔记本',
    description: '描述',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    host: '0.0.0.0',
    port: 9527,
    head: [
        ['link', { rel: 'icon', href: '/img/icon.png'}]
    ],
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        logo: '/public/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '前端', link: '/guide/FrontEnd/' },
            { text: '后端', link: '/guide/BackEnd/' },
            { text: 'Git', link: '/guide/Git/' },
            { text: '编程方式', link: '/guide/Programming Paradigm/' },
            { text: '关于', link: '/guide/about/' },
        ],
        sidebar: [
            { text: 'mine', link: '/mine' },
            { text: 'mine', link: '/mine' },
            { text: 'mine', link: '/mine' },
            { text: 'mine', link: '/mine' },
            { text: 'mine', link: '/mine' },
            { text: 'mine', link: '/mine' },
            { text: 'mine', link: '/mine' },
            { text: 'mine', link: '/mine' },
            { text: 'mine', link: '/mine' },
        ]
    },
    plugins: [
        ['@vuepress/search', { searchMaxSuggestions: 10 }]
    ],
    markdow: {
        toc: {
            includeLevel: [2, 3]
        }
    }
}
