<template>
	<div>
		<el-row type="flex" justify="center">
			<el-col :span="13" class="container">
				<div class="textarea" id="gogo">

					<div shadow="hover" v-for="(item,index) in message_array" :key="index" class="card">

						<transition name="el-fade-in-linear">
							<el-row type="flex" justify="start" v-show="!item.isUser" class="robotframe">
								<i class="irobot"></i>
								<div class="robotmsg">{{item.text}}</div>
							</el-row>
						</transition>
						<transition name="el-fade-in-linear">
							<el-row type="flex" justify="end" v-show="item.isUser">
								<div class="usermsg">{{item.text}}</div>
								<i class="iuser"></i>
							</el-row>
						</transition>
					</div>
				</div>

				<el-row type="flex" :gutter="20" justify="center" class="inputframe">
					<el-col :span="20">
						<el-input v-model="input" placeholder="输入内容开始聊天"></el-input>
					</el-col>
					<el-col :span="4">
						<el-button type="primary" class="send" @click="sendMessage" @keyup.enter.native="sendMessage">发送</el-button>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import axios from "axios";
	Date.prototype.format = function(fmt) {
		var o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			S: this.getMilliseconds() //毫秒
		};

		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(
				RegExp.$1,
				(this.getFullYear() + "").substr(4 - RegExp.$1.length)
			);
		}

		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(
					RegExp.$1,
					RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
				);
			}
		}

		return fmt;
	};
	export default {
		data() {
			return {
				message_array: [],
				input: "",
				nowtime: ""
			};
		},


		created: function() {
			var _this = this;
			document.onkeydown = function() {
				let key = window.event.keyCode;
				if (key == 13) {
					_this.sendMessage();
				}
			};
		},

		methods: {
			sendMessage: function() {
				this.nowtime = new Date();
				this.nowtime = this.nowtime.format("yyyy-MM-dd hh:mm:ss");
				let msg = {
					time: this.nowtime,
					text: this.input,
					isUser: true
				};
				this.message_array.push(msg);
				let test = document.getElementById("gogo").scrollHeight;
				console.log("用户发送：" + test);
				axios
					.post("https://api.ri-co.cn/gaokaov1.0/robot", {
						text: this.input
					})
					.then(res => {
						let msgre = {
							time: this.nowtime,
							text: res.data,
							isUser: false
						};
						this.message_array.push(msgre);
						setTimeout(function() {
							document.getElementById("gogo").scrollTop = document.getElementById("gogo").scrollHeight;
						}, 50);
					});
				this.input = "";

			}
		}
	};
</script>

<style>
	.container {
		border: 1px solid #c5c5c562;
		margin-bottom: 3rem;
		border-radius: 10px;
		height: 650px;
		box-shadow: 0px 3px 7px #c2c2c2;
	}

	.textarea {
		height: 90%;
		background-color: rgb(255, 255, 255);
		overflow: auto;
		overflow-y: scroll;
	}

	.inputframe {
		width: 100%;
		padding-left: 10px;
		padding-right: 10px;
		padding-bottom: 5px;
		padding-top: 2%;
		border-top-style: 1px solid #c0c0c0;
	}

	.send {
		width: 100%;
	}

	.robotframe {
		margin: 10px 0;
	}

	.iuser {
		/* border: 4px solid #999999; */
		/* border-radius: 50%; */
		padding: 1rem;
		margin-right: 0.5rem;
		background: url(../assets/user.png);
		background-repeat: no-repeat;

	}

	.irobot {
		margin-left: 0.5rem;
		/* 	border: 4px solid #b3d2ff;
		border-radius: 50%; */
		padding: 1rem;
		background: url(../assets/robot.png);
		background-repeat: no-repeat;
	}

	.robotmsg {
		margin-left: 0.5rem;
		padding: 0.5rem;
		box-shadow: 0px 1px 5px #b8b8b8;
		border-radius: 10px;
		max-width: 60%;
		width: auto;
	}

	.usermsg {
		max-width: 60%;
		margin-right: 0.5rem;
		padding: 0.5rem;
		text-align: left;
		box-shadow: 0px 1px 5px #b8b8b8;
		border-radius: 10px;
		background-color: #3385ff;
		color: #ffffff;
	}

	/*滚动条样式*/
	.textarea::-webkit-scrollbar {
		width: 4px;
		/*height: 4px;*/
	}

	.textarea::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 5px rgba(85, 170, 255, 0.8);
		background: rgba(0, 0, 0, 0.2);
	}

	.textarea::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 5px rgba(85, 170, 255, 0.8);
		border-radius: 0;
		background: rgba(0, 0, 0, 0.1);

	}
</style>
