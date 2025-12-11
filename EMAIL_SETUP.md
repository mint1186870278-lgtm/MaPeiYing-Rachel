# 邮件功能配置说明

## 本地开发环境

`.env.local` 文件已经配置好了，包含：
```
RESEND_API_KEY=re_LEKPn4tV_7aPjKcwaUBTPLi28v5MWxr8A
```

## Vercel 部署环境变量配置

为了让邮件功能在生产环境正常工作，你需要在 Vercel 上配置环境变量：

### 步骤：

1. **登录 Vercel Dashboard**
   - 访问 [vercel.com](https://vercel.com)
   - 登录你的账号

2. **进入项目设置**
   - 选择你的项目（nextjs-portfolio）
   - 点击 "Settings"（设置）
   - 在左侧菜单选择 "Environment Variables"（环境变量）

3. **添加环境变量**
   - 点击 "Add New"（添加新变量）
   - **Key（键）**: `RESEND_API_KEY`
   - **Value（值）**: `re_LEKPn4tV_7aPjKcwaUBTPLi28v5MWxr8A`
   - **Environment（环境）**: 选择所有环境（Production, Preview, Development）
   - 点击 "Save"（保存）

4. **重新部署**
   - 配置环境变量后，Vercel 会自动触发新的部署
   - 或者你可以手动点击 "Deployments" → "Redeploy"

## 测试邮件功能

配置完成后，你可以：
1. 访问你的网站
2. 滚动到 "Let's Connect" 部分
3. 填写表单并发送测试邮件
4. 检查你的邮箱 `mint1186870278@gmail.com` 是否收到邮件

## 注意事项

- `.env.local` 文件不会被推送到 GitHub（已在 .gitignore 中）
- 环境变量在 Vercel 上是加密存储的，很安全
- 如果邮件发送失败，检查 Vercel 的 Function Logs 查看错误信息

## 故障排查

如果邮件功能不工作：

1. **检查环境变量**
   - 确认 Vercel 上的 `RESEND_API_KEY` 已正确配置
   - 确认没有多余的空格

2. **检查 Resend API Key**
   - 访问 [resend.com](https://resend.com)
   - 确认 API key 仍然有效
   - 如果过期，需要生成新的 key 并更新

3. **查看日志**
   - 在 Vercel Dashboard → Deployments → 选择最新部署 → Functions
   - 查看 `/api/send` 的日志，查看具体错误信息

4. **验证域名**
   - Resend 可能需要验证发送域名
   - 检查 Resend dashboard 中的域名设置

