<template>
	<div class="latest_articles">
		<el-card class="box-card">
			<div slot="header" class="d-flex align-items-center">
				<i class="el-blog-icon-chart-line"></i>&nbsp;
				<span>网站资讯</span>
			</div>

			<!-- 循环内容 -->
			<div class="article-list-item">
				<div class="card-widget card-webinfo">
					<div class="webinfo">
						<div class="webinfo-item">
							<div class="item-name">文章数目 :</div>
							<div class="item-count">74</div>
						</div>
						<div class="webinfo-item">
							<div class="item-name">本站总字数 :</div>
							<div class="item-count">202.7k</div>
						</div>
						<div class="webinfo-item">
							<div class="item-name">本站访客数 :</div>
							<div class="item-count" id="busuanzi_value_site_uv"></div>
						</div>
						<div class="webinfo-item">
							<div class="item-name">本站总访问量 :</div>
							<div class="item-count" id="busuanzi_value_site_pv"></div>
						</div>
						<div class="webinfo-item">
							<div class="item-name">最后更新时间 :</div>
							<div class="item-count" id="last-push-date" data-lastpushdate="2021-06-09T14:50:55.661Z">11
								天前</div>
						</div>
					</div>
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
		font-size: 19px;
	}

	.card-tag-cloud a {
		padding: 10px;
	}
	.webinfo-item{
		height: 38px;
		line-height: 38px;
	}
	.webinfo-item div{
		display: inline-block;
	}
	.webinfo-item .item-count{
		float: right;
	}
</style>
