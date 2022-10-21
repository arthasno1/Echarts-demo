;(function () {
  var myChart = echarts.init(document.querySelector('.bar .chart'))
  var option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['旅游', '教育', '游戏', '医疗', '电商', '社交', '金融'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12'
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }
    ],
    series: [
      {
        name: '今日访问',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  }

  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})()

// 技能掌握
;(function () {
  var myCharts = echarts.init(document.querySelector('.column .bar2 .chart'))
  var option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%'
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: '#fff'
        }
      },
      {
        data: [702, 350, 610, 793, 664],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: '#fff'
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
            return myColor[params.dataIndex]
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: '{c}%'
        }
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  }
  myCharts.setOption(option)
  window.addEventListener('resize', function () {
    myCharts.resize()
  })
})()

// 折线图
;(function () {
  var myCharts = echarts.init(document.querySelector('.line1  .chart'))
  var yearData = [
    {
      year: '2020', // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: '2021', // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ]
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    color: ['#00f2f1', '#ed3f35'],
    legend: {
      data: ['新增粉丝', '新增游客'],
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: 10
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, // 显示边框
      borderColor: '#012f4a', // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      boundaryGap: false // 去除轴内间距
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        data: yearData[0].data[0],
        type: 'line',
        smooth: true
      },
      {
        name: '新增游客',
        data: yearData[0].data[1],
        type: 'line',
        smooth: true
      }
    ]
  }

  myCharts.setOption(option)
  window.addEventListener('resize', function () {
    myCharts.resize()
  })
  $('.line1 h2').on('click', 'a', function () {
    var obj = yearData[$(this).index()]
    console.log(obj)
    option.series[0].data = obj.data[0]
    option.series[1].data = obj.data[1]
    myCharts.setOption(option)
  })
})()
