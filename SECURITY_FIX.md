# 🚨 紧急安全修复指南

## 问题
GitGuardian 检测到你的 Resend API Key 已泄露到 GitHub 仓库中。

## 立即行动步骤

### 1. 撤销泄露的 API Key（最重要！）

1. **登录 Resend Dashboard**
   - 访问 [resend.com](https://resend.com)
   - 登录你的账号

2. **撤销泄露的 API Key**
   - 进入 "API Keys" 页面
   - 找到 API Key: `re_LEKPn4tV_7aPjKcwaUBTPLi28v5MWxr8A`
   - 点击 "Revoke"（撤销）或删除它

3. **生成新的 API Key**
   - 点击 "Create API Key"
   - 给新 key 起个名字（如：portfolio-production）
   - 复制新的 API Key（只显示一次，请保存好）

### 2. 更新本地环境变量

更新 `.env.local` 文件：
```
RESEND_API_KEY=你的新API_Key
```

### 3. 更新 Vercel 环境变量

1. 访问 [vercel.com](https://vercel.com)
2. 进入项目 → Settings → Environment Variables
3. 找到 `RESEND_API_KEY`
4. 点击编辑，更新为新的 API Key
5. 保存后会自动重新部署

### 4. 清理 Git 历史（可选但推荐）

虽然我们已经从当前代码中移除了 API Key，但 Git 历史中仍然存在。要完全清理：

**选项 A：使用 GitGuardian 的修复功能**
- GitGuardian 通常提供自动修复工具
- 按照他们的指示操作

**选项 B：手动清理（高级）**
- 使用 `git filter-branch` 或 `git filter-repo` 工具
- 这会重写 Git 历史，需要强制推送
- ⚠️ 如果其他人也在使用这个仓库，需要协调

**选项 C：接受风险（如果 key 已撤销）**
- 如果已经撤销了 API Key，风险已经降低
- 但 Git 历史中仍然有记录

## 预防措施

✅ **已完成**：
- 从 `EMAIL_SETUP.md` 中移除了真实的 API Key
- 使用占位符替代

✅ **最佳实践**：
- 永远不要在代码文件中硬编码 API Key
- 使用环境变量存储敏感信息
- `.env.local` 已在 `.gitignore` 中，不会被提交

## 验证修复

1. 确认 Resend 上的旧 API Key 已撤销
2. 确认新的 API Key 已配置到本地和 Vercel
3. 测试邮件发送功能是否正常工作

## 需要帮助？

如果遇到问题：
- 查看 Resend 文档：https://resend.com/docs
- 查看 Vercel 环境变量文档：https://vercel.com/docs/concepts/projects/environment-variables

