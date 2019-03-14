<template>
	<div class="row mt-3">
		<div class="col-md-12 col-lg-12">
			<div class="card">
				<div class="card-body">
					<img class='mx-auto d-block' src="../assets/icon.png" alt="">
					<form @submit.prevent='onSubmit'>
						<div class="form-group">
							<label for="username">用户名</label>
							<input type="text" class="form-control" v-model='username'>
						</div>
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="email" class="form-control" v-model='email'>
						</div>
						<div class="form-group">
							<label for="password">密码</label>
							<input type="password" class="form-control" v-model='password'>
						</div>
						<div class="form-group">
							<label for="confirm-password">确认密码</label>
							<input type="password" class="form-control" v-model='confirmPassword'>
						</div>
						<button type="submit" class="btn btn-block btn-success">注册</button>


					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				username: '',
				email: '',
				password: '',
				confirmPassword: ''
			}
		},
		methods: {
			onSubmit() {
				if (this.password === this.confirmPassword) {

					let params = {
						username: this.username,
						password: this.password,
						email: this.email,
					}
					Bmob.User.register(params).then(res => {
						this.$router.push({
							name: 'homeLink'
						})
					}).catch(err => {
						if (err.code === 203 ) {
							alert('邮箱已被注册,请直接登录')
						}
						console.log(err)

					});
				} else {
					alert('两次密码不一致!')
				}
			}
		}
	}
</script>

<style>
</style>
