<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<!-- new pizza -->
			<app-new-pizza></app-new-pizza>
		</div>
		<div class="col-sm-12 col-md-4">
			<!-- 品种展示 -->
			<h3 class="text-muted my-5">菜单栏</h3>
			<table class="table">
				<thead class="table table-default">
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
				<tbody v-for="item in getMenuItems" :key="item.id">
					<tr>
						<td>{{item.name}}</td>
						<td>
							<button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	import NewPizza from './NewPizza';
	export default {
		data() {
			return {
				getMenuItems: []
			}
		},
		components: {
			appNewPizza: NewPizza,
		},
		created() {

			const query = Bmob.Query("menu");
			query.find().then(res => {
				let menuArray = []
				let data = {}
				for (let i in res) {
					menuArray.push(res[i])
				}
				this.getMenuItems = menuArray
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			deleteData(item) {
				const query = Bmob.Query('menu');
				query.destroy(item.objectId).then(res => {
					this.$router.push({
						name: 'menuLink'
					})
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>
