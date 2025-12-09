# 部署指南

## 方式一：Vercel 部署（推荐，最简单）

### 步骤：

1. **准备代码仓库**
   - 如果还没有 Git 仓库，先初始化：
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```
   - 在 GitHub/GitLab/Bitbucket 创建一个新仓库
   - 将代码推送到远程仓库：
     ```bash
     git remote add origin <你的仓库地址>
     git push -u origin main
     ```

2. **部署到 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub/GitLab/Bitbucket 账号登录
   - 点击 "Add New Project"
   - 导入你的仓库
   - Vercel 会自动检测 Next.js 项目
   - 点击 "Deploy" 即可

3. **自动部署**
   - 之后每次推送到主分支，Vercel 会自动重新部署
   - 会获得一个免费的域名（如：`your-project.vercel.app`）

### 使用 Vercel CLI（可选）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目目录运行
vercel

# 按照提示操作即可
```

---

## 方式二：Netlify 部署

1. 访问 [netlify.com](https://www.netlify.com)
2. 使用 GitHub 账号登录
3. 点击 "Add new site" → "Import an existing project"
4. 选择你的仓库
5. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `.next`
6. 点击 "Deploy site"

---

## 方式三：其他平台

### Railway
- 访问 [railway.app](https://railway.app)
- 连接 GitHub 仓库
- 自动检测 Next.js 并部署

### Render
- 访问 [render.com](https://render.com)
- 创建 Web Service
- 连接 GitHub 仓库
- Build Command: `npm run build`
- Start Command: `npm start`

---

## 部署前检查清单

- ✅ 项目构建成功（`npm run build`）
- ✅ 所有图片和资源文件在 `public/` 目录
- ✅ 没有硬编码的本地路径
- ✅ 环境变量（如有）已配置

---

## 注意事项

1. **图片优化**：Vercel 会自动优化 Next.js Image 组件
2. **环境变量**：如有 `.env` 文件，需要在 Vercel 后台设置
3. **自定义域名**：可以在 Vercel 设置中添加自己的域名

