<template>
	<div class="latest_articles">
		<el-card class="box-card">
			<div slot="header" class="d-flex align-items-center">
				<i class="el-blog-icon-FolderOpen"></i>&nbsp;
				<span>分类</span>
			</div>

			<!-- 循环内容 -->
			<div class="article-list-item">
				<ul class="card-category-list" id="aside-cat-list">
					<li class="card-category-list-item "><a class="card-category-list-link"
							href="/categories/English/"><span class="card-category-list-name">English</span><span
								class="card-category-list-count">4</span></a>
						<ul class="card-category-list child">
							<li class="card-category-list-item "><a class="card-category-list-link"
									href="/categories/English/Bilingual-Reading/"><span
										class="card-category-list-name">Bilingual Reading</span><span
										class="card-category-list-count">3</span></a></li>
						</ul>
					</li>
					<li class="card-category-list-item "><a class="card-category-list-link"
							href="/categories/%E5%8C%BB%E5%AD%A6/"><span class="card-category-list-name">医学</span><span
								class="card-category-list-count"> 51</span></a>
						<ul class="card-category-list child">
							<li class="card-category-list-item "><a class="card-category-list-link"
									href="/categories/%E5%8C%BB%E5%AD%A6/%E4%B8%B4%E5%BA%8A%E5%88%86%E5%AD%90%E7%94%9F%E7%89%A9%E5%AD%A6%E6%A3%80%E9%AA%8C%E6%8A%80%E6%9C%AF/"><span
										class="card-category-list-name">临床分子生物学检验技术</span><span
										class="card-category-list-count"> 3</span></a></li>
							<li class="card-category-list-item "><a class="card-category-list-link"
									href="/categories/%E5%8C%BB%E5%AD%A6/%E4%B8%B4%E5%BA%8A%E5%9F%BA%E7%A1%80%E6%A3%80%E9%AA%8C%E5%AD%A6%E6%8A%80%E6%9C%AF/"><span
										class="card-category-list-name">临床基础检验学技术</span><span
										class="card-category-list-count"> 5</span></a></li>
							<li class="card-category-list-item "><a class="card-category-list-link"
									href="/categories/%E5%8C%BB%E5%AD%A6/%E4%B8%B4%E5%BA%8A%E6%A3%80%E9%AA%8C%E4%BB%AA%E5%99%A8%E5%AD%A6/"><span
										class="card-category-list-name">临床检验仪器学</span><span
										class="card-category-list-count"> 2</span></a></li>
							<li class="card-category-list-item "><a class="card-category-list-link"
									href="/categories/%E5%8C%BB%E5%AD%A6/%E5%8C%BB%E5%AD%A6%E5%BE%AE%E7%94%9F%E7%89%A9%E5%AD%A6/"><span
										class="card-category-list-name">医学微生物学</span><span
										class="card-category-list-count"> 1</span></a></li>
							<li class="card-category-list-item "><a class="card-category-list-link"
									href="/categories/%E5%8C%BB%E5%AD%A6/%E7%97%85%E4%BE%8B/"><span
										class="card-category-list-name">病例</span><span class="card-category-list-count">
										1</span></a></li>
						</ul>
					</li>
					<li class="card-category-list-item more is-center"><a class="card-category-list-link-more"
							href="/categories/">
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
		font-size: 23px;
	}
</style>
