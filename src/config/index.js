//系统标题
export const title = "图书借阅管理系统"
//侧边栏配置
export const sidebar = [
    {
        title: "主页",
        icon: 'el-icon-s-custom',
        path: "/home"
    },
    {
        title: "图书管理",
        children: [
            {
                title: "书库数据",
                path: "/books",
            },
        ],
        icon: "el-icon-video-camera-solid"
    },
    {
        title: "借阅管理",
        icon: "el-icon-s-promotion",
        children: [
            {
                title: "借阅情况",
                path: "/status",
            },
            {
                title: "借阅分析",
                path: "/check",
            },
        ],
    },

]
//侧边栏样式配置
export const sidebarStyles = {
    //背景色
    bgc: "#2e323a",
    //文字颜色
    textColor: "#838790",
    // 活跃文字颜色
    'active-text-color': "#fff"
}
//右侧背景色配置
export const rightStyles = {
    headerBgc: "#fff",
    mainBgc : "rgba(24, 28, 33, 0.06)",
    footerBgc: "#fff"
}
//登录信息配置
export const loginInfo = {
    username: '陆庆',
    password: '123456',
    info: "18软件2班"
}