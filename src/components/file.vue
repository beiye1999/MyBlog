<template>
	<div class="latest_articles">
		<el-card class="box-card">
			<div slot="header" class="d-flex align-items-center">
				<i class="el-blog-icon-archive"></i>&nbsp;
				<span>归档</span>
			</div>

			<!-- 循环内容 -->
			<div class="article-list-item">
				<ul class="card-archive-list">
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2021/02/"><span class="card-archive-list-date">二月 2021</span><span
								class="card-archive-list-count">1</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2021/01/"><span class="card-archive-list-date">一月 2021</span><span
								class="card-archive-list-count">7</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/09/"><span class="card-archive-list-date">九月 2020</span><span
								class="card-archive-list-count">2</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/08/"><span class="card-archive-list-date">八月 2020</span><span
								class="card-archive-list-count">7</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/07/"><span class="card-archive-list-date">七月 2020</span><span
								class="card-archive-list-count">7</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/06/"><span class="card-archive-list-date">六月 2020</span><span
								class="card-archive-list-count">5</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/05/"><span class="card-archive-list-date">五月 2020</span><span
								class="card-archive-list-count">12</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/04/"><span class="card-archive-list-date">四月 2020</span><span
								class="card-archive-list-count">8</span></a></li>
					<li class="card-archive-list-item more is-center"><a class="card-archive-list-link-more"
							href="/archives/">
							<span>查看更多</span><i class="fas fa-angle-right"></i></a></li>
				</ul>
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
		font-size: 19px;
	}

	.card-tag-cloud a {
		padding: 10px;
	}
</style>
