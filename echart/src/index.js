console.log('114r4rr')
// var echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('canvas'));

let option2 = {
  backgroundColor: '#000',
  globe: {
    baseTexture: "/assets/get/s/data-1491837049070-rJZtl7Y6x.jpg",
    heightTexture: "/assets/get/s/data-1491837049070-rJZtl7Y6x.jpg",
    displacementScale: 0.04,
    shading: 'realistic',
    environment: '/assets/get/s/data-1491837999815-H1_44Qtal.jpg',
    realisticMaterial: {
      roughness: 0.9
    },
    postEffect: {
      enable: true
    },
    light: {
      main: {
        intensity: 5,
        shadow: true
      },
      ambientCubemap: {
        texture: '/assets/get/s/data-1491838644249-ry33I7YTe.hdr',
        diffuseIntensity: 0.2
      }
    }
  },
  // series : [
  //   {
  //     type: 'map',
  //     map: 'world',
  //     // 绘制完整尺寸的 echarts 实例
  //     // top: 0, left: 0,
  //     // right: 0, bottom: 0,
  //     // boundingCoords: [[-180, 90], [180, -90]]
  //   }
  // ]
};


var locations = [{
  name: '上海',
  coord: [121.472644, 31.231706]
}, {
  name: '北京',
  coord: [116.405285, 39.904989]
}, {
  name: '广东',
  coord: [113.280637, 23.839463714285714]
}];
var option1 = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },
  series: [
    {
      name: '中国',
      type: 'map',
      mapType: 'china',
      selectedMode : 'multiple',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      }
    }
  ]
};

// var currentLoc = 0;
// setInterval(function () {
//   myChart.setOption({
//     series: [{
//       center: locations[currentLoc].coord,
//       zoom: 4,
//       data:[
//         {name: locations[currentLoc].name, selected: true}
//       ],
//       animationDurationUpdate: 1000,
//       animationEasingUpdate: 'cubicInOut'
//     }]
//   });
//   currentLoc = (currentLoc + 1) % locations.length;
// }, 2000);

let option4 = {
  backgroundColor: '#fff',
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },

  series: [
    {
      name: '中国',
      type: 'map',
      mapType: 'china',
      selectedMode : 'multiple',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          // areaColor: '#323c48',
          borderColor: 'rgba(0,0,0,0)'
        },
        emphasis: {
          // areaColor: '#2a333d'
        }
      },
      data:[
        // {name:'广东', selected:true}
      ]
    }
  ]
};

// 绘制图表
myChart.setOption(option4);



if (module.hot) {
  module.hot.accept();
}