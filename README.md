# Echarts-Demo

一个基于 ECharts 的数据可视化大屏展示项目，展示前端就业市场数据分析和可视化效果。

## 🌟 项目特性

- 📊 多种图表类型：柱状图、折线图、饼图、地图等
- 📱 响应式设计，支持PC和移动端
- 🎨 现代化UI设计，深色主题风格
- ⏰ 实时时间显示
- 🗺️ 中国地图数据可视化
- 📈 就业行业、技能掌握、地区分布等数据分析

## 🚀 在线预览

**展示地址：** https://arthasno1.github.io/Echarts-demo/

![项目预览](https://z4a.net/images/2020/06/29/echarts.png)

## 🛠️ 技术栈

- **前端框架**: 原生 HTML5 + CSS3 + JavaScript
- **图表库**: ECharts 5.x
- **样式预处理**: Less
- **布局方式**: Flexbox + Rem 适配
- **工具库**: jQuery
- **字体**: DS-DIGIT 数字字体
- **适配方案**: flexible.js (移动端适配)

## 📁 项目结构

```
Echarts-demo/
├── css/                 # 样式文件
│   ├── index.css       # 主样式文件
│   └── index.less      # Less源文件
├── js/                  # JavaScript文件
│   ├── echarts.min.js  # ECharts核心库
│   ├── index.js        # 主要业务逻辑
│   ├── china.js        # 中国地图数据
│   ├── flexible.js     # 移动端适配
│   └── jquery.js       # jQuery库
├── images/              # 图片资源
│   ├── bg.jpg          # 背景图
│   ├── map.png         # 地图图片
│   └── ...             # 其他图片资源
├── font/                # 字体文件
│   └── DS-DIGIT.TTF    # 数字字体
└── index.html           # 主页面
```

## 📊 图表功能

### 左侧面板
- **柱状图**: 就业行业分布分析
- **折线图**: 人员变化趋势
- **饼图**: 年龄分布统计

### 中间面板
- **数据展示**: 前端需求人数 vs 市场供应人数
- **地图可视化**: 中国地图数据展示

### 右侧面板
- **柱状图**: 技能掌握程度
- **折线图**: 播放量统计
- **饼图**: 地区分布情况

## 🚀 快速开始

### 环境要求
- 现代浏览器 (Chrome, Firefox, Safari, Edge)
- 支持 ES5+ 的JavaScript环境

### 安装运行

1. **克隆项目**
```bash
git clone https://github.com/arthasno1/Echarts-demo.git
cd Echarts-demo
```

2. **直接运行**
```bash
# 使用任意HTTP服务器
python -m http.server 8000
# 或使用Node.js
npx serve .
# 或直接双击 index.html 文件
```

3. **访问项目**
打开浏览器访问 `http://localhost:8000`

## 📚 ECharts 介绍

> ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari 等），底层依赖矢量图形库 [ZRender](https://github.com/ecomfe/zrender)，提供直观，交互丰富，可高度个性化定制的数据可视化图表。

### 核心特性
- 🚀 高性能，流畅运行PC与移动设备
- 🌐 兼容主流浏览器
- 📈 丰富的图表类型：折线图、柱状图、散点图、饼图、K线图等
- 🎨 高度可定制化

**官网地址：** https://echarts.apache.org/zh/index.html

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进项目！

## 📄 许可证

本项目采用 MIT 许可证。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 项目地址：https://github.com/arthasno1/Echarts-demo
- 在线演示：https://arthasno1.github.io/Echarts-demo/
