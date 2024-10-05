import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import history from 'connect-history-api-fallback';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 获取环境变量中的端口，如果没有则使用 3000
const PORT = process.env.PORT || 3000;

// 使用 connect-history-api-fallback 中间件
// 这对于处理 Vue Router 的 history 模式很重要
app.use(history());

// 检查 dist 目录是否存在
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  console.error('Error: dist directory not found. Please build your Vue app first.');
  process.exit(1);
}

// 在设置静态文件目录之前添加这个中间件
app.use((req, res, next) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', '0');
  next();
});

// 将 dist 目录设置为静态文件目录
app.use(express.static(path.join(__dirname, 'dist')));

// 添加额外的静态文件目录
app.use('/img', express.static(path.join(__dirname, 'dist', 'img')));
app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets')));

// 所有的请求都返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 添加错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});

// 添加 CORS 头
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});