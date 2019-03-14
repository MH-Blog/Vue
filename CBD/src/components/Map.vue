<template>
	<div :class="$style.root"></div>
</template>

<script>
	import {
		Map,
		TileLayer
	} from "maptalks";
	import {
		ExtrudePolygonLayer
	} from "maptalks.biglayer";

	export default {
		props: {
			option: Object,
			baseLayer: Object
		},
		data() {
			return {
				map: {}
			};
		},
		created() {
			this.loadData();
		},
		methods: {
			loadData() {
				let _this = this;

				this.$axios.get('http://localhost:8080/buildings.json')
					.then(function(response) {
						let buildings = response.data;
						console.log(buildings)

						var symbol = {
							'polygonOpacity': 1, //不透明度   这个有什么作用
							'polygonFill': 'rgba(0, 255, 0, 1)'
						};

						buildings.features.forEach(function(f) {
							var height = 20;
							var type = f.properties.Z;
							f.properties.height = height;
						});

						var buildingLayer = new ExtrudePolygonLayer('buildings', buildings.features, {
								'forceRenderOnMoving': true, //这个有什么作用
								'ambientLight': [0, 0, 0]
							})
							.setStyle([

								{
									filter: true,
									symbol: {
										'polygonFill': '#bbb'
									}
								}
							])
							.addTo(_this.map); //这个方法是什么作用  添加到地图上吗?
					})
					.catch(function(error) {
						console.log(error);
					});


			},



		},
		mounted() {
			let baseLayer = new TileLayer("baseLayer", this.baseLayer);
			this.option.baseLayer = baseLayer;
			this.map = new Map(this.$el, this.option);
			
			
		
		}
	};
</script>

<style lang="scss" module>
	.root {
		width: 100%;
		height: 100%;
	}
</style>
