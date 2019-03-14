<template>
	<div class="row mt-3">
		<div class="col-md-12 col-lg-12">
			<div class="card">
				<div class="card-body">
					<img class='mx-auto d-block' src="../assets/icon.png" alt="">
					<form @submit.prevent='onSubmit'>
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="email" class="form-control" v-model='email'>
						</div>
						<div class="form-group">
							<label for="password">密码</label>
							<input type="password" class="form-control" v-model='password'>
						</div>

						<button type="submit" class="btn btn-block btn-success">登录</button>
				


					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				email: '',
				password: '',
			}
		},
		methods: {
			onSubmit() {
				Bmob.User.login(this.email, this.password).then(res => {
					alert('登录成功,欢迎您:'+res.username)
					this.$router.push({
						name: 'homeLink'
					})
				}).catch(err => {
					alert('账号或密码错误,请重新输入')
				});
			},
			queryBtn(){
				const query = Bmob.Query('_User');
				query.get('b70599f983').then(res => {
					console.log(res)
				}).catch(err => {
					console.log(err)
				})
			}
		},
	}
</script>

<style>
</style>
