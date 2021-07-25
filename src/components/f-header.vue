<template>
	<div>
		<el-menu :default-active="activeIndex" class="d-flex" mode="horizontal" router="true" type="flex">
			<el-menu-item class="mr-auto">
				<router-link :to="'home'">贝爷</router-link>
			</el-menu-item>
			<el-menu-item ><i class="el-blog-icon-search"></i>&nbsp;搜索</el-menu-item>
			<el-menu-item ><i class="el-blog-icon-home"></i>&nbsp;主页</el-menu-item>
			<el-menu-item ><i class="el-blog-icon-archive"></i>&nbsp;时间轴</el-menu-item>
			<el-menu-item ><i class="el-blog-icon-tags-o"></i>&nbsp;标签</el-menu-item>
			<el-menu-item ><i class="el-blog-icon-FolderOpen"></i>&nbsp;分类</el-menu-item>
			<el-menu-item >
				<router-link :to="'friendChain'"><i class="el-blog-icon-Link"></i>&nbsp;友链</router-link>
			</el-menu-item>
			<el-menu-item >
				<router-link :to="'about'"><i class="el-blog-icon-heart"></i>&nbsp;关于</router-link>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			
		}
	}
</script>

<style scoped>
el-menu el-menu-item{
	font-size: 18px;
}
.mr-auto{
	padding-left: 50px; 
}
a{
	text-decoration: none;
}
</style>