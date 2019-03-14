export default {
	map: {
		center: [512621.78, 306055.08],
		zoom: 7,
		minZoom:4,
		maxZoom:7,
		pitch: 45,
		centerCross: true,
		spatialReference: {
			projection: "identity",
			resolutions: [
				140.00000000000003,
				70.00000000000001,
				28.0,
				14.0,
				7.0,
				2.8000000000000003,
				1.4000000000000001,
				0.5600000000000002
			],
			fullExtent: {
				top: 328267.01403450756,
				left: 498274.8324539737,
				bottom: 292043.1403319263,
				right: 542368.7214544317
			}
		},
		attribution: false
	},
	baseLayer: {
		urlTemplate: "http://192.168.46.30:8090/iserver/services/map-Map/wmts100/朝阳区矢量地图/default/Custom_朝阳区矢量地图/{z}/{y}/{x}.png",
		tileSystem: [1, -1, 498274.8324539737, 328267.01403450756]
	}
};
