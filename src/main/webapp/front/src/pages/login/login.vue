<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231026/ba2b6fee01214824bf4a72f3853b4ffc.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"minHeight":"90vh","padding":"100px 100px 100px 50%","margin":"0px auto","borderRadius":"0px","alignItems":"center","flexWrap":"wrap","background":"none","display":"flex","width":"86%","position":"relative","height":"auto","zIndex":"2"}' :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 20px","lineHeight":"1.5","fontSize":"24px","color":"#fff","textAlign":"center"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"margin":"0 0 20px","color":"#fff","textAlign":"center","width":"100%","letterSpacing":"2px","lineHeight":"1.5","fontSize":"24px","fontWeight":"500"}'>慢性病患者跟踪治疗信息管理系统登录</div>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 auto 20px"}' prop="username">
				<div v-if="true" :style='{"color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"auto","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}'>账号：</div>
				<input :style='{"padding":"0 10px","borderColor":"#c7c7c7","color":"#666","borderRadius":"0px","borderWidth":"0 0 2px","background":"none","width":"100%","fontSize":"14px","borderStyle":"solid","height":"40px"}' v-model="loginForm.username" placeholder="请输入账户">
			</el-form-item>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 auto 20px"}' prop="password">
				<div v-if="true" :style='{"color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"auto","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}'>密码：</div>
				<input :style='{"padding":"0 10px","borderColor":"#c7c7c7","color":"#666","borderRadius":"0px","borderWidth":"0 0 2px","background":"none","width":"100%","fontSize":"14px","borderStyle":"solid","height":"40px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>

			<el-form-item v-if="roles.length>1" class="list-type" :style='{"width":"98%","margin":"40px auto 0"}' prop="role">
				<el-radio v-model="loginForm.tableName" :label="item.tableName" v-for="(item, index) in roles" :key="index" @change.native="getCurrentRow(item)">{{item.roleName}}</el-radio>
			</el-form-item>

			
			<el-form-item class="list-btn" :style='{"width":"auto","margin":"40px 0 0 84px","display":"inline-block"}'>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 20px","margin":"0 10px 0 0","color":"#fff","display":"inline-block","letterSpacing":"2px","outline":"none","borderRadius":"4px","background":"#7c3ef3","width":"120px","fontSize":"20px","fontWeight":"600","height":"60px"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 5px","color":"#666","textAlign":"right","display":"none","outline":"none","borderRadius":"4px","background":"none","width":"300px","fontSize":"14px","height":"44px","order":"10"}' @click="resetForm('loginForm')">重置</el-button>
			</el-form-item>
			<div :style='{"padding":"40px 0 0","display":"inline-block"}'>
			<router-link :style='{"cursor":"pointer","margin":"0 5px","fontSize":"14px","textDecoration":"none","color":"#ccc","background":"none"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
			<div class="idea1" :style='{"top":"0","left":"0","background":"url(http://codegen.caihongy.cn/20231026/e27f5cab1b6a400a88a1dc7a3693864c.jpg) no-repeat  center top / cover","display":"block","width":"100%","position":"absolute","height":"100%","zIndex":"-2"}'></div>
			<div class="idea2" :style='{"top":"0","background":"rgba(0,0,0,.75)","display":"block","width":"45%","position":"absolute","right":"0","height":"100%","zIndex":"-1"}'></div>
		</el-form>
    </div>
</div>
</template>

<script>
import menu from '@/config/menu'
export default {
	//数据集合
	data() {
		return {
            baseUrl: this.$config.baseUrl,
            loginType: 1,
			roleMenus: [],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账户', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}],
			flag: false,
			verifyCheck2: false,
		}
	},
  components: {
  },
	created() {
		this.roleMenus = menu.list()
		for(let item in this.roleMenus) {
		    if(this.roleMenus[item].hasFrontLogin=='是') {
		        this.roles.push(this.roleMenus[item]);
		    }
		}
		
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
      getCurrentRow(row) {
        this.role = row.roleName;
      },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }

		this.loginPost(formName)
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
	  loginPost(formName) {
		this.$refs[formName].validate((valid) => {
		  if (valid) {
		    this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
		      if (res.data.code === 0) {
		        localStorage.setItem('frontToken', res.data.token);
		        localStorage.setItem('UserTableName', this.loginForm.tableName);
		        localStorage.setItem('username', this.loginForm.username);
		        localStorage.setItem('adminName', this.loginForm.username);
		        localStorage.setItem('frontSessionTable', this.loginForm.tableName);
		        localStorage.setItem('frontRole', this.role);
		        localStorage.setItem('keyPath', 0);
		        this.$router.push('/');
		        this.$message({
		          message: '登录成功',
		          type: 'success',
		          duration: 1500,
		        });
		      } else {
		        this.$message.error(res.data.msg);
		      }
		    });
		  } else {
		    return false;
		  }
		});
	  },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20231026/ba2b6fee01214824bf4a72f3853b4ffc.jpg);
		
		.el-form-item {
		  & /deep/ .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item /deep/ .el-form-item__content {
			display: flex;
		}

		.list-code /deep/ .el-form-item__content {
			display: block;
		}

		.list-type /deep/ .el-form-item__content {
			padding: 0 0 0 80px;
			margin: 0px 0 0;
			display: flex;
		}

		.list-btn /deep/ .el-form-item__content {
			display: inline-block;
		}
		
		.list-item /deep/ .el-input .el-input__inner {
			border-radius: 0px;
			padding: 0 10px;
			color: #666;
			background: none;
			width: 100%;
			font-size: 14px;
			border-color: #c7c7c7;
			border-width: 0 0 2px;
			border-style: solid;
			height: 40px;
		}
		
		.list-code /deep/ .el-input .el-input__inner {
			padding: 0 10px;
			color: #666;
			display: inline-block;
			vertical-align: middle;
			font-size: 14px;
			border-color: #c7c7c7;
			border-radius: 0px;
			outline: none;
			background: none;
			width: calc(100% - 170px);
			border-width: 0 0 2px;
			border-style: solid;
			height: 40px;
		}

		.list-type /deep/ .el-radio__input .el-radio__inner {
			border-radius: 0;
			background: rgba(53, 53, 53, 0);
			border-color: #ccc;
		}
		.list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
			border-radius: 0;
			background: #7c3ef3;
			border-color: #7c3ef3;
		}
		.list-type /deep/ .el-radio__label {
			color: #ccc;
			font-size: 14px;
		}
		.list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
			color: #7c3ef3;
			font-size: 14px;
		}
	}

</style>
