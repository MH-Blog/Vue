<template>
	<form>
		<h3 class="text-muted my-5">
			添加新的Pizza
		</h3>
		<div class="form-group row">
			<label class="col-sm-1">品种</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.name">
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-1">描述</label>
			<div class="col-sm-11">
				<textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
			</div>
		</div>
		<p><strong>选项</strong></p>
		<div class="form-group row">
			<label for="" class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.size">
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.price">
			</div>
		</div>

		<div class="form-group row">
			<button @click="addMenuItem" type="button" class="btn btn-success btn-block col-sm-12">添加</button>
		</div>
	</form>
</template>


<script>
	export default {
		data() {
			return {
				newPizza: {}
			}
		},
		methods: {
			addMenuItem() {
				const query = Bmob.Query('menu');
				query.set("name",this.newPizza.name)
				query.set("description",this.newPizza.description)
				query.set("size",this.newPizza.size)
				query.set("price",this.newPizza.price)
				query.save().then(res => {
					alert('添加成功!')
					this.$router.push({
						name: 'menuLink'
					})
					
				}).catch(err => {
					alert('添加失败,请重新添加!')
				})

			}
		}
	}
</script>
