<template>
	<div class="latest_articles">
		<el-card class="box-card">
			<div slot="header" class="d-flex align-items-center">
				<i class="el-blog-icon-archive"></i>&nbsp;
				<span>归档</span>
			</div>

			<!-- 循环内容 -->
			<div class="article-list-item">
				<ul class="card-archive-list" style="padding-left: 10px; margin: 0px;">
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2021/02/"><span class="card-archive-list-date">2021 二月</span><span
								class="card-archive-list-count">1</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2021/01/"><span class="card-archive-list-date">2021 一月</span><span
								class="card-archive-list-count">7</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/09/"><span class="card-archive-list-date">2020 九月</span><span
								class="card-archive-list-count">2</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/08/"><span class="card-archive-list-date">2020 八月</span><span
								class="card-archive-list-count">7</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/07/"><span class="card-archive-list-date">2020 七月</span><span
								class="card-archive-list-count">7</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/06/"><span class="card-archive-list-date">2020 六月</span><span
								class="card-archive-list-count">5</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/05/"><span class="card-archive-list-date">2020 五月</span><span
								class="card-archive-list-count">12</span></a></li>
					<li class="card-archive-list-item"><a class="card-archive-list-link"
							href="/archives/2020/04/"><span class="card-archive-list-date">2020 四月</span><span
								class="card-archive-list-count">8</span></a></li>
					<li class="card-archive-list-item more is-center" style="text-align: center;"><a class="card-archive-list-link-more"
							href="/archives/">
							<span>查看更多</span><i class="el-blog-icon-angle-right"></i></a></li>
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
	.card-archive-list-item{
		list-style-type: none;
		height: 34px;
		line-height: 34px;
	}
	.card-archive-list-item a{
		width: 100%;
		display: inline-block;
		text-decoration: none;
	}
	.card-archive-list-item .card-archive-list-count{
		display: inline-block;
		float: right;
	}
	.card-archive-list-link,.card-archive-list-link-more{
		color: #280404;
	}
	.card-archive-list-link:hover,.card-archive-list-link-more:hover{
		background-color: #49b1f5;
		animation:mymove 3s infinite;
		-webkit-animation:mymove 3s infinite;
	}
	 @keyframes mymove
		{
			0%{
			transform: scale(1.1);  /*开始为原始大小*/
			}
			50%{
				transform: scale(1.1);
			}
			100%{
				transform: scale(1.1);
			}
			50%{
				transform: scale(1.1);
			}
			0%{
			transform: scale(1.1);  /*开始为原始大小*/
			}

		}
</style>
