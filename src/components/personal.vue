<template>
	<div class="latest_articles">
		<el-card class="box-card">
			<div class="card-widget card-info">
				<div class="card-info-avatar is-center"><img class="avatar-img"
						src="https://ypcdnsave.cunzher.cn/img/logo.png!/format/webp"
						onerror="this.onerror=null;this.src='/img/friend_404.gif'" alt="avatar">
					<div class="author-info_name">cunzher</div>
					<div class="author-info_description">Viewing life with medical ethics</div>
				</div>
				<div class="card-info-data">
					<div class="card-info-data-item  is-center"><a href="/archives/">
							<div class="headline">文章</div>
							<div class="length-num">74</div>
						</a></div>
					<div class="card-info-data-item   is-center"><a href="/tags/">
							<div class="headline">标签</div>
							<div class="length-num">69</div>
						</a></div>
					<div class="card-info-data-item is-center"><a href="/categories/">
							<div class="headline">分类</div>
							<div class="length-num">16</div>
						</a></div>
				</div>
				<div class="call_me">
					<a class="button--animated" id="card-info-btn" target="_blank" rel="noopener"
						href="https://github.com/cunzher"><i class="el-blog-icon-github"
							style="display: inline-block;padding-right: 8px;"></i><span>Follow Me</span></a>
				</div>
				<!-- <div class="card-info-social-icons is-center"><a class="social-icon" href="https://github.com/cunzher"
						target="_blank" title="Github"><i class="el-blog-icon-github"></i></a><a class="social-icon"
						href="mailto:cunzher@163.com" target="_blank" title="Email"><i
							class="el-blog-icon-envelope"></i></a>
				</div> -->
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		name: 'friend'
	}
</script>

<style scoped>
	.avatar-img {
		display: inline-block;
		border-radius: 100px;
		width: 50%;
	}

	.card-info-avatar {
		text-align: center;
	}

	.author-info_name {
		font-weight: bold;
		padding: 10px 0px;
		font-size: 20px;
	}

	.author-info_description {
		font-size: 14px;
	}
	
	.card-info-data-item{
		text-align: center;
		display: inline-block;
		width: 33%;
		
	}

	.card-info-data {
		margin-top: 22px;
	}

	.length-num {
		margin-top: 6px;
	}

	.call_me {
		text-align: center;
		margin: 22px 0px 0px 31px;
		background-color: #49b1f5;
		height: 32px;
		line-height: 32px;
		width: 82%;
	}
	
	.box-card .call_me a {
		color: white;
	}

	.box-card a {
		text-decoration: none;
		color: #4c4948;
		font-size: 14px;
	}

	.card-info-social-icons {
		text-align: center;
		height: 30px;
		line-height: 50px;
	}
	
	.card-info-social-icons a{
		margin: 0px 10px;
	}
</style>
