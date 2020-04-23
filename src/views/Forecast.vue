<template>
	<div>
		<el-row :gutter="20">

			<el-col :span="5">
				<el-select v-model="province" filterable>
					<el-option v-for="(item,index) in provinces" :key="index" :label="item" :value="item">
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="5">
				<el-select v-model="type" filterable placeholder="科目类别">
					<el-option v-for="(item,index) in types" :key="index" :label="item" :value="item">
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="5">
				<el-input v-model="score" placeholder="高考分数(可选)"></el-input>
			</el-col>
			<el-col :span="5">
				<el-input v-model="rank" placeholder="排名(必填)"></el-input>
			</el-col>
			<el-col :span='4'>
				<el-button type="primary" @click="lookfor">查询</el-button>
			</el-col>

		</el-row>

		<el-divider></el-divider>



		<el-table :data="suitMajorsNow" style="width:100%">
			<el-table-column prop="profession" label="专业名称" width="200">
			</el-table-column>
			<el-table-column prop="max" label="最高分数/名次"></el-table-column>
			<el-table-column prop="ave" label="平均分数/名次"></el-table-column>
			<el-table-column prop="min" label="最低分数/名次"></el-table-column>
			<el-table-column prop="idea" label="建议">
				<template slot-scope="scope">
					<el-tag :type="panduan(scope.row.idea )" disable-transitions>{{scope.row.idea}}</el-tag>
				</template>
			</el-table-column>

			<!--
        <el-table-column
          label="操作"
          >
          
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="normal" plain>查看</el-button>
          </template>
         
        </el-table-column>
           -->
		</el-table>





	</div>

</template>

<script>
	import axios from 'axios';
	import store from '@/store/index'
	export default {
		name: 'forecast',
		data() {
			return {
				loading: false,
				province: '山东',
				score: '',
				rank: '',
				type: '理工',
				provinces: [
					"山东", "河北", "山西", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "河南", "湖北", "湖南", "广东", "海南", "四川", "贵州", "云南",
					"陕西", "甘肃", "青海", "台湾", "北京市", "天津市", "上海市", "重庆市", "内蒙古自治区", "广西壮族自治区", "宁夏回族自治区", "新疆维吾尔自治区", "西藏自治区",
					"香港特别行政区", "澳门特别行政区"
				],
				types: [
					'理工', '文史', '艺术文', '艺术理', '200'
				],

				//每个元素有 profession minScore maxScore minRank averageRank maxRange average idea 
				suitMajorsNow: [],


			}
		},
		watch: {
			
		},
		methods: {
			errmsg() {
				this.$message( {
					showClose: true,
					message: "你还未填写你的排名！",
					type: "error",
					center: true,
					duration: 1000,
				})
			},
			panduan(idea) {
				if (idea == "稳健") {
					return "success"
				}
				if (idea == "冲刺") {
					return "danger"
				}
				if (idea == "保底") {
					return "info"
				}
			},
			clearzero(words) {
				//把0替代成暂无数据
				for (const key in words) {
					if (words[key] == 0) {
						words[key] = '暂无数据'
					}
				}

				return words
			},

			lookfor() {
				if (this.rank == "") {
					this.errmsg();
				} else {
					var sendData = {
						"score": parseInt(this.score),
						"province": this.province,
						"rank": parseInt(this.rank),
						"type": this.type
					}
					this.loading = true
					this.suitMajorsNow = []
					axios.post('https://api.ri-co.cn/go/recommend', sendData)
						.then(res => {
							if (res.status == 200) {								
								res.data.forEach(element => {
									element = this.clearzero(element)
									element.max = element.maxscore + '/' + element.maxrank
									element.ave = element.avescore + '/' + element.averank
									element.min = element.minscore + '/' + element.minrank
									this.suitMajorsNow.push(element)
								});
							} else {
								this.$notify.info({
									title: '提示',
									message: '找不到合适的专业哟亲~'
								});
							}
						});
					this.loading = false
				}

			},

			//这个跳转暂时用不了，以后想办法解决
			handleClick(item) {
				console.log(item.profession, '准备-执行跳转操作');
				var majorPkg = {
					profession: item.profession,
					type: this.type,
					province: this.province
				}
				var result = store.getters.search(majorPkg)
				if (result) {
					store.state.majorNow = store.state.majors[result - 1];
				} else {
					//本地没有数据，向后端请求
					axios
						.post("http://localhost:8090/subjectQuery", majorPkg)
						.then(res => {
							console.log("从后端接收到单个专业的数据", res.data.year2019);
							if (res.data == []) {
								this.$notify.info({
									title: '消息',
									message: '没有合适的专业哦~'
								});
								console.log("注意，找不到这个专业");
								return;
							} else {
								//把已有和后端返回的信息写入vuex
								store.commit("firstchange", majorPkg);
								store.commit("wirtein", res.data);
							}
						})
						.catch(error => {
							console.log(error);
						});
				}


				this.$router.push({
					"name": 'Browse'
				})



			},
			
		}
	}
</script>

<style>

</style>
