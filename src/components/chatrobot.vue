<template>
	<div>
		<keep-alive>
			<el-container>
				<el-header>智能问答机器人</el-header>
				<el-main>
					<ul>
						<li v-for="(item,index) in message_array" v-bind:key="index" class="msg-box">
							<div class="user-msg">
								<div class="user-msg-time">
									{{item.time}}
								</div>
								<div v-if="item.isUser">
									<div class="user-msg-content">{{item.text}}</div>
									<div class="user-msg-avatar">
										<img src="../assets/user.png">
									</div>
								</div>
								<div v-else>
									<div class="bot-msg-avatar">
										<img src="../assets/robot.png">
									</div>
									<div class="bot-msg-content">{{item.text}}</div>
								</div>
							</div>
						</li>
					</ul>
				</el-main>
				<el-footer>
					<el-input v-model="input" placeholder="向智能机器人提问就能获得回答哦"></el-input>
					<el-button type="success" round v-on:click="sendMessage">发送</el-button>
				</el-footer>
			</el-container>
		</keep-alive>
	</div>
</template>


<script>
import axios from 'axios';
	Date.prototype.format = function(fmt) {
		var o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			"S": this.getMilliseconds() //毫秒
		};

		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}

		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(
					RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}

		return fmt;
	}
	export default {
		data() {
			return {
				message_array: [],
				input: '',
				nowtime: '',
			}
		},
		methods: {
			sendMessage: function() {
				this.nowtime = new Date();
				this.nowtime = this.nowtime.format("yyyy-MM-dd hh:mm:ss");
				let msg = {
					time: this.nowtime,
					text: this.input,
					isUser: true,
        };
        this.message_array.push(msg);
        axios.post('http://localhost:8090/robot',{"text":this.input})
          .then(res=>{
            let msgre = {
              time: this.nowtime,
              text: res.data,
              isUser: false,
            };
            this.message_array.push(msgre);
          })
        this.input = "";
			},
			
		}
	}
</script>

<style>
	.el-header,
	.el-footer {
		background-color: #2196f3;
		text-align: center;
		line-height: 60px;
	}

	.el-header {
		color: white;
		font-size: 1.8rem;
		font-weight: lighter;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		height: 70vh;
		overflow: scroll;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.el-input {
		width: 85% !important;
		margin-right: 3%;
	}

	.msg-box {
		list-style: none;
	}

	.user-msg-time {
		text-align: center;
		margin: 0;
		padding: 0;
		color: #b0b4b7;
		margin-bottom: 1px;
	}

	.user-msg-content, .bot-msg-content {
		border: 0px solid #d7dae2;
		background: white;
		border-radius: 5px;
		min-height: 2rem;
		line-height: 2rem;
		display: inline-block;
		width: 26rem;
		vertical-align: top;
		padding-right: 10px;
		padding-left: 10px;
		text-align: justify;
		text-justify: newspaper;
		word-break: break-all;
	}
	
	.user-msg-content {
		text-align: right;
		position: relative;
		left: 29%;
	}
	
	.bot-msg-content {
		text-align: left;
		position: relative;
		left: -33%;
	}
	
	.user-msg-avatar {
		display: inline-block;
		position: relative;
		left: 30%;
	}
	
	.bot-msg-avatar {
		display: inline-block;
		position: relative;
		left: -34%;
	}
	
	.user-msg-avatar img {
		width: 100%;
	}
</style>
