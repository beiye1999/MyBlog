<template>
	<div class="about">
		<el-row :gutter="20">
			<el-col :span="4">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="16" class="body" style="padding: 0px;">
				<el-card class="box-card">
					<div class="grid-content bg-purple-dark">
						<div class="ui raised teal segment">
							<div class="ui vertical stackable grid container">
								<div class="row">
									<h2 class="ui header aboutMeTitle">关于我</h2>
								</div>
								<div class="row introduction">
									<div class="aboutMe">
										<div class="item">
											<span class="span header">个人介绍</span>
										</div>
										<div class="item">
											<span class="itemHeader">个人简介:</span>
											<div class="itemContent">
												<p>
													大三学生，前端写着玩玩，目前主要做后端开发。
												</p>
											</div>
										</div>
										<div class="item"><span class="itemHeader">擅长技术:</span>
											<div class="itemContent">
												<p>掌握javase，javaEE</p>
												<p>基本掌握spring，springMVC，mybatis，springboot</p>
												<p>熟练redis，mysql，linux基本命令</p>
												<p>基本会使用nginx，git，maven</p>
												<p>熟练使用 html5，css3，jquery，bootstrap，semantic UI开发页面原型</p>
												<p>熟练使用 ajax，vue.js，shiro，quartz</p>
											</div>
										</div>
									</div>
									<div class="blog">
										<div class="item"><span class="span header">博客介绍</span></div>
										<div class="item"><span class="itemHeader">博客名字:</span> <span
												class="spanContent">
												XI溪 </span></div>
										<div class="item"><span class="itemHeader">博客网址:</span> <span
												class="spanContent">
												www.xiaoxuya.top</span></div>
										<div class="item"><span class="itemHeader">创建时间:</span> <span
												class="spanContent">
												2020-11-15</span></div>
										<div class="item"><span class="itemHeader">博客使用的技术:</span>
											<div class="itemContent">
												<p>1、页面原型：html5，css3，js，jQuery，semantic UI，axios，vue.js，还有一些插件</p>
												<p>2、后端：springboot，mybatis，mysql，redis，shiro，quartz，thymeleaf </p>
												<p>该个人网站前后端都是我一个人写的，难免有些bug和考虑不周的情况，请见谅。</p>
											</div>
										</div>
									</div>
									<div class="futurePlan">
										<div class="item"><span class="span header">我的规划</span></div>
										<div class="item"><span class="itemHeader">近期规划:</span>
											<div class="itemContent">
												<p>1、巩固以前学的技术</p>
												<p>2、复习数据结构，计算机网络，mysql</p>
												<p>3、养成定期学习总结的习惯</p>
												<p>4、将之前定的未完成规划的尽量补上</p>
												<p>5、多做项目，了解前沿技术</p>
												<p>6、最近正在学习vue移动端+微信小程序+springboot后台+pc vue前端</p>
											</div>
										</div>
										<div class="item"><span class="itemHeader">长远规划:</span>
											<div class="itemContent">
												<p>1、后端开发，持久性学习</p>
												<p>2、unity游戏开发</p>
											</div>
										</div>
									</div>
									<div class="logUpdate">
										<div class="item"><span class="span header">更新日志</span></div>
										<div class="item">
											<div class="itemContent">
												<p>1、页面优化，解决vue表达式闪现问题</p>
												<p>2、解决mybatis分页拦截器模块，多线程操作共享变量未加锁，数据不一致问题</p>
												<p>3、优化全局异常统一返回json（mybatis动态代理获取数据异常暂未处理）</p>
												<p>4、优化统一的json响应接口</p>
												<p>5、优化redis单注解开发转 注解+手动获取redis数据，统一的redis前缀</p>
												<p>6、优化redis缓存文章点赞取消点赞功能，由于未开启用户注册功能，取消点赞功能搁置</p>
												<p>7、优化访问日志，AOP监控全局controller访问</p>
												<p>8、优化定时任务，统计数据</p>
											</div>
										</div>
									</div>
								</div>
								<div class="row end">
									<h4>我也是有底线的哦!</h4>
								</div>
							</div>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'about',
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>

<style scoped>
	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.container h2 {
		text-align: center;
		padding-left: 0px;
	}

	.introduction {
		padding-left: 20px;
	}

	.header {
		font-size: 22px;
		font-weight: 600;
		color: #00B5AD;
	}

	.aboutMe .itemHeader {
		font-size: 18px;
		font-weight: 600;
	}

	.item {
		padding-bottom: 12px;
	}

	.end {
		text-align: center;
		color: #999999;
	}

	.body {
		border-top: 2px solid #00b5ad !important;
	}
</style>
