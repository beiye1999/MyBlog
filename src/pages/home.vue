<template>
	<div class="home">
		<el-row id="artList" type="flex" justify="space-around">
			<el-col :span="16">
				<el-row class="art-item">
					<el-card shadow="hover">
						<h5><router-link to="/article" tag="span" class="art-title">鼠标悬浮时显示</router-link></h5>
						<el-row class="art-info d-flex align-items-center justify-content-start">
							<div class="art-time"><i class="el-icon-time"></i>：2019-03-24</div>
							<div class="d-flex align-items-center"><img class="tag" src="../assets/tag.png" />：
								<el-tag size="mini">swagger2</el-tag>
							</div>
						</el-row>
						<el-row class="art-body">
							<div class="side-img hidden-sm-and-down"><img class="art-banner" src="../assets/vue.jpg"></div>
							<div class="side-abstract">
								<div class="art-abstract">
									Iconfont-国内功能很强大且图标内容很丰富的矢量图标库, 提供矢量图标下载、在快照 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客
								</div>
								<div class="art-more">
									<router-link to="/article" tag="span">
										<el-button plain>{{$t('home.readMore')}}</el-button>
									</router-link>
									<div class="view"><i class="el-icon-view"></i>12414</div>
								</div>
							</div>
						</el-row>
					</el-card>
					<img class="star" src="../assets/star.png" />
				</el-row>
				<el-row class="art-item">
					<el-card shadow="hover">
						<h5><router-link to="/article" tag="span" class="art-title">鼠标悬浮时显示</router-link></h5>
						<el-row class="art-info d-flex align-items-center justify-content-start">
							<div class="art-time"><i class="el-icon-time"></i>：2019-03-24</div>
							<div class="d-flex align-items-center"><img class="tag" src="../assets/tag.png" />：
								<el-tag size="mini">swagger2</el-tag>
							</div>
						</el-row>
						<el-row class="art-body">
							<div class="side-img hidden-sm-and-down"><img class="art-banner" src="../assets/vue.jpg"></div>
							<div class="side-abstract">
								<div class="art-abstract">
									Iconfont-国内功能很强大且图标内容很丰富的矢量图标库, 提供矢量图标下载、在快照 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客
								</div>
								<div class="art-more">
									<router-link to="/article" tag="span">
										<el-button plain>{{$t('home.readMore')}}</el-button>
									</router-link>
									<div class="view"><i class="el-icon-view"></i>12414</div>
								</div>
							</div>
						</el-row>
					</el-card>
					<img class="star" src="../assets/star.png" />
				</el-row>
				<el-row class="art-item">
					<el-card shadow="hover">
						<h5><router-link to="/article" tag="span" class="art-title">鼠标悬浮时显示</router-link></h5>
						<el-row class="art-info d-flex align-items-center justify-content-start">
							<div class="art-time"><i class="el-icon-time"></i>：2019-03-24</div>
							<div class="d-flex align-items-center"><img class="tag" src="../assets/tag.png" />：
								<el-tag size="mini">swagger2</el-tag>
							</div>
						</el-row>
						<el-row class="art-body">
							<div class="side-img hidden-sm-and-down"><img class="art-banner" src="../assets/vue.jpg"></div>
							<div class="side-abstract">
								<div class="art-abstract">
									Iconfont-国内功能很强大且图标内容很丰富的矢量图标库, 提供矢量图标下载、在快照 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客
								</div>
								<div class="art-more">
									<router-link to="/article" tag="span">
										<el-button plain>{{$t('home.readMore')}}</el-button>
									</router-link>
									<div class="view"><i class="el-icon-view"></i>12414</div>
								</div>
							</div>
						</el-row>
					</el-card>
					<img class="star" src="../assets/star.png" />
				</el-row>
				<el-row class="art-item">
					<el-card shadow="hover">
						<h5><router-link to="/article" tag="span" class="art-title">鼠标悬浮时显示</router-link></h5>
						<el-row class="art-info d-flex align-items-center justify-content-start">
							<div class="art-time"><i class="el-icon-time"></i>：2019-03-24</div>
							<div class="d-flex align-items-center"><img class="tag" src="../assets/tag.png" />：
								<el-tag size="mini">swagger2</el-tag>
							</div>
						</el-row>
						<el-row class="art-body">
							<div class="side-img hidden-sm-and-down"><img class="art-banner" src="../assets/vue.jpg"></div>
							<div class="side-abstract">
								<div class="art-abstract">
									Iconfont-国内功能很强大且图标内容很丰富的矢量图标库, 提供矢量图标下载、在快照 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客
								</div>
								<div class="art-more">
									<router-link to="/article" tag="span">
										<el-button plain>{{$t('home.readMore')}}</el-button>
									</router-link>
									<div class="view"><i class="el-icon-view"></i>12414</div>
								</div>
							</div>
						</el-row>
					</el-card>
					<img class="star" src="../assets/star.png" />
				</el-row>
				<div class="block pagination">
					<el-pagination background="#f9f9f9" layout="prev, pager, next" :total="50">
					</el-pagination>
				</div>
			</el-col>
			<el-col :span="6" class="hidden-sm-and-down" id="side" style="width: 24%;">
				<div class="item">
					<friend></friend>
				</div>
				<div class="item">
					<latest_articles></latest_articles>
				</div>
				<div class="item">
					<classification></classification>
				</div>
				<div class="item">
					<tag></tag>
				</div>
				<div class="item">
					<file></file>
				</div>
				<div class="item">
					<website_information></website_information>
				</div>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	import tag from '../components/tag'//标签
	import file from '../components/file'//归档
	import friend from '../components/friend'
	import classification from '../components/classification'
	import latest_articles from '../components/latest_articles'//最新文章
	import website_information from '../components/website_information'//网站资讯
	export default {
		name: 'home',
		components: {
			friend,
			tag,
			latest_articles,
			classification,
			file,
			website_information
		}
	}
</script>

<style scoped>
	#side .item {
		margin-bottom: 30px;
	}
	
	.art-item {
		margin-bottom: 30px;
		position: relative;
	}
	
	.art-item .star {
		width: 60px;
		height: 60px;
		position: absolute;
		top: 0;
		right: 0;
	}
	
	img.tag {
		width: 16px;
		height: 16px;
	}
	
	.art-title {
		border-left: 3px solid #F56C6C;
		padding-left: 5px;
		cursor: pointer;
	}
	
	.art-title:hover {
		padding-left: 10px;
		color: #409EFF;
	}
	
	.art-time {
		margin-right: 20px;
	}
	
	.art-body {
		display: flex;
		padding: 10px 0;
	}
	
	.side-img {
		height: 150px;
		width: 270px;
		overflow: hidden;
		margin-right: 10px;
	}
	
	img.art-banner {
		width: 100%;
		height: 100%;
		transition: all 0.6s;
	}
	
	img.art-banner:hover {
		transform: scale(1.4);
	}
	
	.side-abstract {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.art-abstract {
		flex: 1;
		color: #aaa;
	}
	
	.art-more {
		height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	.art-more .view {
		color: #aaa;
	}
	h5{
		font-size: 18px;
	}
	.pagination {
		background-color: #F9F9F9;
	}
</style>