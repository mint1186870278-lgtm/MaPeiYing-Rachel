# 修复预览页面无法打开的问题

## 问题原因
`node_modules` 目录没有正确安装，导致 `next` 命令找不到。

## 手动修复步骤

### 步骤 1: 清理旧文件
在 PowerShell 中执行：
```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
```

### 步骤 2: 重新安装依赖
```powershell
npm install --legacy-peer-deps
```

**注意：** 这个命令可能需要 5-10 分钟，请耐心等待，不要中断。

### 步骤 3: 验证安装
```powershell
Test-Path node_modules\.bin\next.cmd
```
如果返回 `True`，说明安装成功。

### 步骤 4: 启动开发服务器
```powershell
npm run dev
```

如果看到类似这样的输出：
```
▲ Next.js 14.2.18
- Local:        http://localhost:3000
```
说明服务器启动成功，可以在浏览器打开 `http://localhost:3000` 预览。

## 如果步骤 2 安装失败

如果 `npm install` 报错，可以尝试：

1. **清理 npm 缓存：**
   ```powershell
   npm cache clean --force
   ```

2. **使用国内镜像（如果网络慢）：**
   ```powershell
   npm config set registry https://registry.npmmirror.com
   npm install --legacy-peer-deps
   ```

3. **检查 Node.js 版本：**
   ```powershell
   node --version
   ```
   确保是 Node.js 18 或更高版本。

## 常见错误处理

### 错误：`ETIMEDOUT` 或网络超时
- 检查网络连接
- 使用国内镜像（见上方）
- 重试安装命令

### 错误：`EACCES` 或权限错误
- 以管理员身份运行 PowerShell
- 或使用 `npm install --legacy-peer-deps --no-optional`

### 错误：磁盘空间不足
- 清理磁盘空间
- 删除 `node_modules` 后重新安装



