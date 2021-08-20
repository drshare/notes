module.exports = {
    base: '/notes',
    title: '笔记本',
    description: '描述',
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
            { 
                text: '前端', 
                link: '/guide/FrontEnd/',
                items: [
                    { text: 'HTML', link: '/guide/FrontEnd/HTML/' },
                    { text: 'CSS', link: '/guide/FrontEnd/CSS/' },
                    { text: 'JS', link: '/guide/FrontEnd/JavaScript/' },
                    { text: 'TS', link: '/guide/FrontEnd/TypeScript/' },
                ]
            },
            { 
                text: '前端框架', 
                link: '/guide/FrontEnd/',
                items: [
                    { text: 'Vue', link: '/guide/FrontEnd/Vue/' },
                    { text: 'React', link: '/guide/FrontEnd/React/' },
                    { text: 'Nuxt', link: '/guide/FrontEnd/Nuxt/' },
                    { text: 'QianKun', link: '/guide/FrontEnd/QianKun/' },
                ]
            },
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
