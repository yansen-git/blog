module.exports = {
	// 网站 Title
	title: '',
	// 网站描述
	description: '个人博客',
	// 网站 favicon 图标设置等
	head: [
		['link', {
			rel: 'icon',
			href: '/favicon.ico'
		}],
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}]
	],
	// 使用的主题
	theme: 'melodydl',
	// 主题配置
	themeConfig: {
		title: 'yansen Blog',
		// 个人信息（没有或不想设置的，删掉对应字段即可）
		personalInfo: {
			// 名称
			name: 'yansen',
			// 头像 public文件夹下
			avatar: '/avatar.jpeg',
			// 头部背景图
			headerBackgroundImg: '/avatar-bg.jpeg',
			// 个人简介 (支持 HTML)
			description: 'In me the tiger sniffs the rose<br/>心有猛虎，细嗅蔷薇222',
			// 电子邮箱
			email: '120699334@qq.com',
			// 所在地
			location: 'Shanxi, China'
		},
		// 顶部导航栏内容
		nav: [{
				text: 'HOME',
				link: '/'
			},
			{
				text: 'ABOUT',
				link: '/about/'
			},
			{
				text: 'TAGS',
				link: '/tags/'
			}
		],
		// 首页头部标题背景图设置，图片直接放在 public 文件夹下
		header: {
			home: {
				title: 'yansen Blog',
				subtitle: '好好生活，慢慢相遇',
				headerImage: '/home-bg.jpeg'
			},
			// tag页面头部标题背景图设置，图片直接放在 public 文件夹下
			tags: {
				title: 'Tags',
				subtitle: '遇见你花光了我所有的运气',
				headerImage: '/tags-bg.jpg'
			},
			// 文章详情头部背景图
			postHeaderImg: '/post-bg.jpeg',
		},
		// 社交平台帐号信息 
		sns: {
			// csdn: {
			// 	account: 'csdn',
			// 	link: 'https://blog.csdn.net/weixin_44002432',
			// },
			// weibo: {
			// 	account: 'weibo',
			// 	link: 'https://weibo.com/u/5656925978',
			// },
			// juejin: {
			// 	account: 'juejin',
			// 	link: 'https://juejin.im/user/3843548382238791'
			// },
			// zhihu: {
			// 	account: 'zhihu',
			// 	link: 'https://www.zhihu.com/people/sheng-tang-de-xing-kong'
			// },
			// github: {
			// 	account: 'github',
			// 	link: 'https://github.com/yansen-git'
			// }
		},
		// 底部 footer 的相关设置 
		footer: {
			// gitbutton  配置
			// gitbtn: {
			// 	// 仓库地址
			// 	repository: "https://github.com/yansen-git",
			// 	frameborder: 0,
			// 	scrolling: 0,
			// 	width: "80px",
			// 	height: "20px"
			// },
			// 添加自定义 footer
			// | <a href="https://beian.miit.gov.cn/" target="_blank">京公网安备11000002000001号</a>
			custom: `
				© 2022 yansen Blog<br />
				<a target="_blank" href="https://beian.miit.gov.cn/" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
					<p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">陕ICP备2021015037号</p>
				</a>
				<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61011102000321" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
					<p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">陕公网安备 61011102000321号</p>
				</a>
			</div>
		`
		},
		// 分页配置
		pagination: {
			// 每页文章数量
			perPage: 5,
		},
		// vssue 评论配置, 如果不需要，可以设置 comments: false
		comments: false
	}
}