<template>
	<div class="latest_articles">
		<el-card class="box-card">
			<div slot="header" class="d-flex align-items-center">
				<i class="el-blog-icon-history"></i>&nbsp;
				<span>最新文章</span>
			</div>
			
			<!-- 循环内容 -->
			<div class="article-list-item">
				<a class="thumbnail" href="/posts/ebaf5fe4.html" title="西医综合手写笔记">
					<img src="https://ypcdnsave.cunzher.cn/picgo/20210216130509.png!/format/webp"
						onerror="this.onerror=null;this.src='/img/404.jpg'" alt="西医综合手写笔记">
				</a>
				<div class="content">
					<a class="title" href="/posts/ebaf5fe4.html" title="西医综合手写笔记">西医综合手写笔记西医综合手写笔记西医综合手写笔记西医综合手写笔记</a>
					<time datetime="2021-02-17T08:39:18.000Z" title="发表于 2021-02-17 16:39:18">2021-02-17</time>
				</div>
			</div>
			<div class="article-list-item">
				<a class="thumbnail" href="/posts/ebaf5fe4.html" title="西医综合手写笔记">
					<img src="https://ypcdnsave.cunzher.cn/picgo/20210216130509.png!/format/webp"
						onerror="this.onerror=null;this.src='/img/404.jpg'" alt="西医综合手写笔记">
				</a>
				<div class="content">
					<a class="title" href="/posts/ebaf5fe4.html" title="西医综合手写笔记">西医综合手写笔记西医综合手写笔记西医综合手写笔记西医综合手写笔记</a>
					<time datetime="2021-02-17T08:39:18.000Z" title="发表于 2021-02-17 16:39:18">2021-02-17</time>
				</div>
			</div>
			<div class="article-list-item">
				<a class="thumbnail" href="/posts/ebaf5fe4.html" title="西医综合手写笔记">
					<img src="https://ypcdnsave.cunzher.cn/picgo/20210216130509.png!/format/webp"
						onerror="this.onerror=null;this.src='/img/404.jpg'" alt="西医综合手写笔记">
				</a>
				<div class="content">
					<a class="title" href="/posts/ebaf5fe4.html" title="西医综合手写笔记">西医综合手写笔记西医综合手写笔记西医综合手写笔记西医综合手写笔记</a>
					<time datetime="2021-02-17T08:39:18.000Z" title="发表于 2021-02-17 16:39:18">2021-02-17</time>
				</div>
			</div>
			<div class="article-list-item">
				<a class="thumbnail" href="/posts/ebaf5fe4.html" title="西医综合手写笔记">
					<img src="https://ypcdnsave.cunzher.cn/picgo/20210216130509.png!/format/webp"
						onerror="this.onerror=null;this.src='/img/404.jpg'" alt="西医综合手写笔记">
				</a>
				<div class="content">
					<a class="title" href="/posts/ebaf5fe4.html" title="西医综合手写笔记">西医综合手写笔记西医综合手写笔记西医综合手写笔记西医综合手写笔记</a>
					<time datetime="2021-02-17T08:39:18.000Z" title="发表于 2021-02-17 16:39:18">2021-02-17</time>
				</div>
			</div>
			<div class="article-list-item">
				<a class="thumbnail" href="/posts/ebaf5fe4.html" title="西医综合手写笔记">
					<img src="https://ypcdnsave.cunzher.cn/picgo/20210216130509.png!/format/webp"
						onerror="this.onerror=null;this.src='/img/404.jpg'" alt="西医综合手写笔记">
				</a>
				<div class="content">
					<a class="title" href="/posts/ebaf5fe4.html" title="西医综合手写笔记">西医综合手写笔记西医综合手写笔记西医综合手写笔记西医综合手写笔记</a>
					<time datetime="2021-02-17T08:39:18.000Z" title="发表于 2021-02-17 16:39:18">2021-02-17</time>
				</div>
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
	.align-items-center i {
		font-size: 23px;
	}
	.article-list-item{
		padding: 5px 0px;
		border-bottom: 1px #cccccc solid;
	}
	.article-list-item .thumbnail img{
		overflow: hidden;
		width: 80px;
	}
	.article-list-item .content{
		vertical-align: middle;
		display: inline-grid;
		width: 65%;
		padding-left: 10px;
	} 
	.article-list-item .content a{
		letter-spacing: 0;
		overflow: hidden;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	} 
	.article-list-item a{
		text-decoration: none;
		display: inline-block;
		vertical-align: middle;
		color: #858585;
		font-size: 85%;
	}
</style>
