const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const app = express();

// 获取环境变量中的端口，如果没有则使用 3000
const PORT = process.env.PORT || 3000;

// 使用 connect-history-api-fallback 中间件
// 这对于处理 Vue Router 的 history 模式很重要
app.use(history());

// 将 dist 目录设置为静态文件目录
app.use(express.static(path.join(__dirname, 'dist')));

// 所有的请求都返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});