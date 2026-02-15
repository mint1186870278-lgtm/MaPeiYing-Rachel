# 更新 Resend API Key 步骤

## 步骤 1：更新本地环境变量

### 方法 A：手动编辑（推荐）

1. 打开项目根目录下的 `.env.local` 文件
2. 找到这一行：
   ```
   RESEND_API_KEY=re_LEKPn4tV_7aPjKcwaUBTPLi28v5MWxr8A
   ```
3. 替换为你的新 API Key：
   ```
   RESEND_API_KEY=你的新API_Key
   ```
4. 保存文件

### 方法 B：使用命令行（Windows PowerShell）

在项目根目录运行：
```powershell
# 替换 YOUR_NEW_API_KEY 为你的新 API Key
echo "RESEND_API_KEY=YOUR_NEW_API_KEY" > .env.local
```

## 步骤 2：更新 Vercel 环境变量

1. **访问 Vercel Dashboard**
   - 打开 [vercel.com](https://vercel.com)
   - 登录你的账号

2. **进入项目设置**
   - 选择你的项目（nextjs-portfolio 或 MaPeiYing-Rachel）
   - 点击 "Settings"（设置）

3. **找到环境变量**
   - 在左侧菜单点击 "Environment Variables"（环境变量）
   - 找到 `RESEND_API_KEY`

4. **更新 API Key**
   - 点击 `RESEND_API_KEY` 旁边的编辑按钮（铅笔图标）
   - 将 Value 更新为你的新 API Key
   - 确保所有环境都已选中（Production, Preview, Development）
   - 点击 "Save"（保存）

5. **重新部署**
   - Vercel 会自动触发新的部署
   - 或者手动：Deployments → 选择最新部署 → "Redeploy"

## 步骤 3：测试邮件功能

### 本地测试

1. 重启开发服务器（如果正在运行）：
   ```bash
   # 停止当前服务器（Ctrl+C），然后重新启动
   npm run dev
   ```

2. 打开浏览器访问 `http://localhost:3000`

3. 滚动到 "Let's Connect" 部分

4. 填写表单：
   - Your email: 你的测试邮箱
   - Subject: 测试主题
   - Message: 测试消息

5. 点击 "Send Message"

6. 检查你的邮箱 `mint1186870278@gmail.com` 是否收到邮件

### 生产环境测试

1. 等待 Vercel 部署完成（通常 1-2 分钟）

2. 访问你的网站

3. 在 "Let's Connect" 部分发送测试邮件

4. 检查邮箱是否收到邮件

## 故障排查

如果邮件发送失败：

1. **检查环境变量是否正确**
   - 本地：确认 `.env.local` 文件中的 API Key 正确
   - Vercel：在 Settings → Environment Variables 中确认

2. **检查 API Key 是否有效**
   - 登录 [resend.com](https://resend.com)
   - 确认 API Key 状态为 "Active"
   - 确认没有过期或被撤销

3. **查看错误日志**
   - **本地**：查看终端中的错误信息
   - **Vercel**：Dashboard → Deployments → 选择最新部署 → Functions → `/api/send` → 查看日志

4. **验证域名设置**
   - 在 Resend Dashboard 中检查域名验证状态
   - 如果使用自定义域名，确保已正确配置

## 完成！

更新完成后，邮件功能应该可以正常工作了。如果遇到任何问题，请检查上面的故障排查步骤。

