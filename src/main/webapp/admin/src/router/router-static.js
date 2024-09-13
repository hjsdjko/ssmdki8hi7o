import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import jiankangrizhi from '@/views/modules/jiankangrizhi/list'
    import yinshijianyi from '@/views/modules/yinshijianyi/list'
    import guahaoleixing from '@/views/modules/guahaoleixing/list'
    import yaopinxinxi from '@/views/modules/yaopinxinxi/list'
    import yaopinfenlei from '@/views/modules/yaopinfenlei/list'
    import yuyueguahao from '@/views/modules/yuyueguahao/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discussnews from '@/views/modules/discussnews/list'
    import binglixinxi from '@/views/modules/binglixinxi/list'
    import yisheng from '@/views/modules/yisheng/list'
    import config from '@/views/modules/config/list'
    import chufangkaiju from '@/views/modules/chufangkaiju/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/jiankangrizhi',
        name: '健康日志',
        component: jiankangrizhi
      }
      ,{
	path: '/yinshijianyi',
        name: '饮食建议',
        component: yinshijianyi
      }
      ,{
	path: '/guahaoleixing',
        name: '挂号类型',
        component: guahaoleixing
      }
      ,{
	path: '/yaopinxinxi',
        name: '药品信息',
        component: yaopinxinxi
      }
      ,{
	path: '/yaopinfenlei',
        name: '药品分类',
        component: yaopinfenlei
      }
      ,{
	path: '/yuyueguahao',
        name: '预约挂号',
        component: yuyueguahao
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/discussnews',
        name: '公告信息',
        component: discussnews
      }
      ,{
	path: '/binglixinxi',
        name: '病例信息',
        component: binglixinxi
      }
      ,{
	path: '/yisheng',
        name: '医生',
        component: yisheng
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/chufangkaiju',
        name: '处方开具',
        component: chufangkaiju
      }
      ,{
	path: '/newstype',
        name: '公告信息分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
