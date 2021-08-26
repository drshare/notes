module.exports = {
    base: '/notes',
    title: '笔记本',
    description: '描述',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        logo: '/logo.png',
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
                    { text: 'Webpack', link: '/guide/FrontEnd/Webpack/' },
                    { text: 'QianKun', link: '/guide/FrontEnd/QianKun/' },
                ]
            },
            { 
                text: 'NODEJS', 
                link: '/guide/NodeJS/',
                items: [
                    { text: '包管理', link: '/guide/NodeJS/package/' },
                    { text: 'CLI', link: '/guide/NodeJS/CLI/' },
                    { text: 'Nuxt', link: '/guide/NodeJS/Nuxt/' },
                    { text: 'QianKun', link: '/guide/NodeJS/QianKun/' },
                ]
            },
            { text: '后端', link: '/guide/BackEnd/' },
            { text: 'Git', link: '/guide/Git/' },
            { text: '编程方式', link: '/guide/Programming Paradigm/' },
            { text: '关于', link: '/guide/about/' },
        ],
        sidebar: [
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
