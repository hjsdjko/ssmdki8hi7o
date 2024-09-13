import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import yishengList from '../pages/yisheng/list'
import yishengDetail from '../pages/yisheng/detail'
import yishengAdd from '../pages/yisheng/add'
import guahaoleixingList from '../pages/guahaoleixing/list'
import guahaoleixingDetail from '../pages/guahaoleixing/detail'
import guahaoleixingAdd from '../pages/guahaoleixing/add'
import yuyueguahaoList from '../pages/yuyueguahao/list'
import yuyueguahaoDetail from '../pages/yuyueguahao/detail'
import yuyueguahaoAdd from '../pages/yuyueguahao/add'
import binglixinxiList from '../pages/binglixinxi/list'
import binglixinxiDetail from '../pages/binglixinxi/detail'
import binglixinxiAdd from '../pages/binglixinxi/add'
import yaopinfenleiList from '../pages/yaopinfenlei/list'
import yaopinfenleiDetail from '../pages/yaopinfenlei/detail'
import yaopinfenleiAdd from '../pages/yaopinfenlei/add'
import yaopinxinxiList from '../pages/yaopinxinxi/list'
import yaopinxinxiDetail from '../pages/yaopinxinxi/detail'
import yaopinxinxiAdd from '../pages/yaopinxinxi/add'
import yinshijianyiList from '../pages/yinshijianyi/list'
import yinshijianyiDetail from '../pages/yinshijianyi/detail'
import yinshijianyiAdd from '../pages/yinshijianyi/add'
import jiankangrizhiList from '../pages/jiankangrizhi/list'
import jiankangrizhiDetail from '../pages/jiankangrizhi/detail'
import jiankangrizhiAdd from '../pages/jiankangrizhi/add'
import chufangkaijuList from '../pages/chufangkaiju/list'
import chufangkaijuDetail from '../pages/chufangkaiju/detail'
import chufangkaijuAdd from '../pages/chufangkaiju/add'
import chatmessageList from '../pages/chatmessage/list'
import chatmessageDetail from '../pages/chatmessage/detail'
import chatmessageAdd from '../pages/chatmessage/add'
import friendList from '../pages/friend/list'
import friendDetail from '../pages/friend/detail'
import friendAdd from '../pages/friend/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import discussnewsList from '../pages/discussnews/list'
import discussnewsDetail from '../pages/discussnews/detail'
import discussnewsAdd from '../pages/discussnews/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'yisheng',
					component: yishengList
				},
				{
					path: 'yishengDetail',
					component: yishengDetail
				},
				{
					path: 'yishengAdd',
					component: yishengAdd
				},
				{
					path: 'guahaoleixing',
					component: guahaoleixingList
				},
				{
					path: 'guahaoleixingDetail',
					component: guahaoleixingDetail
				},
				{
					path: 'guahaoleixingAdd',
					component: guahaoleixingAdd
				},
				{
					path: 'yuyueguahao',
					component: yuyueguahaoList
				},
				{
					path: 'yuyueguahaoDetail',
					component: yuyueguahaoDetail
				},
				{
					path: 'yuyueguahaoAdd',
					component: yuyueguahaoAdd
				},
				{
					path: 'binglixinxi',
					component: binglixinxiList
				},
				{
					path: 'binglixinxiDetail',
					component: binglixinxiDetail
				},
				{
					path: 'binglixinxiAdd',
					component: binglixinxiAdd
				},
				{
					path: 'yaopinfenlei',
					component: yaopinfenleiList
				},
				{
					path: 'yaopinfenleiDetail',
					component: yaopinfenleiDetail
				},
				{
					path: 'yaopinfenleiAdd',
					component: yaopinfenleiAdd
				},
				{
					path: 'yaopinxinxi',
					component: yaopinxinxiList
				},
				{
					path: 'yaopinxinxiDetail',
					component: yaopinxinxiDetail
				},
				{
					path: 'yaopinxinxiAdd',
					component: yaopinxinxiAdd
				},
				{
					path: 'yinshijianyi',
					component: yinshijianyiList
				},
				{
					path: 'yinshijianyiDetail',
					component: yinshijianyiDetail
				},
				{
					path: 'yinshijianyiAdd',
					component: yinshijianyiAdd
				},
				{
					path: 'jiankangrizhi',
					component: jiankangrizhiList
				},
				{
					path: 'jiankangrizhiDetail',
					component: jiankangrizhiDetail
				},
				{
					path: 'jiankangrizhiAdd',
					component: jiankangrizhiAdd
				},
				{
					path: 'chufangkaiju',
					component: chufangkaijuList
				},
				{
					path: 'chufangkaijuDetail',
					component: chufangkaijuDetail
				},
				{
					path: 'chufangkaijuAdd',
					component: chufangkaijuAdd
				},
				{
					path: 'chatmessage',
					component: chatmessageList
				},
				{
					path: 'chatmessageDetail',
					component: chatmessageDetail
				},
				{
					path: 'chatmessageAdd',
					component: chatmessageAdd
				},
				{
					path: 'friend',
					component: friendList
				},
				{
					path: 'friendDetail',
					component: friendDetail
				},
				{
					path: 'friendAdd',
					component: friendAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'discussnews',
					component: discussnewsList
				},
				{
					path: 'discussnewsDetail',
					component: discussnewsDetail
				},
				{
					path: 'discussnewsAdd',
					component: discussnewsAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
