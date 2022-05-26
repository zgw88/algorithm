前端性能优化

为啥要优化： 提升用户体验 防止用户流失
怎么看网站是否需要优化：监控工具
性能优化做什么： 提升打卡速度、减少请求、加快渲染、减少等待

1: 开发时性能优化
	编译优化(多线程的支持 cache-loader、模块缓存、外链引入) 性能优化持久化（最佳实践 cli）

2: 资源加载优化
	静态资源优化：
		CDN的运用
		图片优化
		文件合并压缩 按需加载
	网络传输优化
		DNS prefetch
		http2: 多路复用、server push(服务器推送)、header压缩“HAPCK”算法			压缩
	其他：
		避免重定向、避免空链接 <img src=“”> inraam link script 不要空链接
	
	缓存优化
		http缓存：强缓存（expires、cache-control）协商缓存（last-				modify、Etag）
		本地缓存: cookie localStorage、app离线包
		service-worker
		
3: 代码运行时优化
	首屏打开优化(ssr 预渲染 骨架屏 懒加载 preload prefetch defer async)
	动态渲染优化 （动态import 避免重绘 防抖截流）
	交互优化：(tap替换click、keep-alive、转场动效 加载loading)




