<template>
	<view class="content">
		注册用户
		<view class="uni-form-item uni-column">
			<input class="uni-input" v-model="value" placeholder="用户名" />
		</view>
		<view class="uni-form-item uni-column">
			<input class="uni-input" v-model="email" placeholder="邮箱" />
		</view>
		<button @click="getCode" type="primary">发送验证码</button>

		<view class="uni-form-item uni-column">
			<input class="uni-input" v-model="password" placeholder="密码" />
		</view>
		<button @click="registerFun" type="primary">注册</button>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		登录用户
		<view class="uni-form-item uni-column">
			<input class="uni-input" v-model="value_" placeholder="用户名" />
		</view>
		<view class="uni-form-item uni-column">
			<input class="uni-input" v-model="password_" placeholder="密码" />
		</view>
		<button @click="loading" type="primary">登录</button>
	</view>
</template>

<script>
import { 
	href,add
} from '../../common/whole.js';

import {
	land,
	register,
	register_mail,
} from '../../api/index.js';

import {
	setStorage,
	getStorage,
} from '../../common/storage.js';
import { setTimeout } from 'timers';

	export default {
		data() {
			return {
				value: '',
				email: '',
				password:"",
				value_:"",
				password_:"",
			}
		},
		onLoad() {
			console.log(href);
			console.log(add(2,3));
			console.log(this.baseUrl);
		},
		methods: {
			//发送验证码
			getCode(){
				register_mail({
					name:"testtt",
					phone:"1617768751@qq.com",
				}).then(res => {
					console.log(res);
				});
			},
			//注册
			registerFun(){
				register({
					name:"testtt",
					phone:"1617768751@qq.com",
					code:"D6980Z",
					password:"123456654321",
				}).then(res => {
					console.log(res);
				});
			},
			//登录
			loading(){
				land({
					name:"testtt",
					phone:"1617768751@qq.com",
					password:"123456654321",
				}).then(res => {
					console.log(res);
				});
			},
		}
	}
</script>

<style>
	/* .content{ */
	.title{
		font-size: 36upx;
		color: #8f8f94;
	}
	/* } */
</style>
