# 阿里云部署指南

本指南将帮助你在 **阿里云轻量应用服务器** 上部署 Next.js 作品集网站的镜像站点。

## 前置要求

1. **阿里云账号**
2. **轻量应用服务器 2核2G**：
   - 配置：2核 CPU、2GB 内存、40GB 云盘、200M 峰值带宽
   - 价格：约 **68元/年**（活动价，[阿里云活动中心](https://www.aliyun.com/activity) 购买）
   - 系统镜像：Ubuntu 20.04/22.04 或选择「Docker 基础镜像」快速开始
3. **域名**（可选，如果需要使用自己的域名）
4. **已备案的域名**（如果使用国内地域，必须备案；香港地域无需备案）

## 方案一：使用 Docker 部署（推荐）

### 步骤 0: 购买轻量应用服务器

1. 登录 [阿里云控制台](https://www.aliyun.com) → 轻量应用服务器
2. 选择 **2核2G** 套餐，地域按需选择（国内需备案，香港无需备案）
3. 系统镜像选 **Ubuntu 22.04** 或 **Docker 基础镜像**
4. 购买后在控制台获取公网 IP 和 root 密码

### 步骤 1: 准备服务器

#### 1.1 开放防火墙端口（轻量应用服务器）

轻量应用服务器需在 **控制台 → 防火墙** 中开放以下端口：
- **22**（SSH）
- **80**（HTTP）
- **443**（HTTPS）

#### 1.2 连接到服务器

```bash
ssh root@your-server-ip
```

#### 1.3 安装 Docker 和 Docker Compose

**Ubuntu/Debian:**
```bash
# 更新系统
apt update && apt upgrade -y

# 安装 Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# 启动 Docker
systemctl start docker
systemctl enable docker

# 安装 Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# 验证安装
docker --version
docker-compose --version
```

**CentOS:**
```bash
# 安装 Docker
yum install -y docker
systemctl start docker
systemctl enable docker

# 安装 Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### 步骤 2: 上传代码到服务器

#### 方法 A: 使用 Git（推荐）

```bash
# 在服务器上安装 Git
apt install git -y  # Ubuntu
# 或
yum install git -y  # CentOS

# 克隆仓库
cd /opt
git clone https://github.com/mint1186870278-lgtm/MaPeiYing-Rachel.git
cd MaPeiYing-Rachel
```

#### 方法 B: 使用 SCP 上传

在本地电脑上：
```bash
scp -r . root@your-server-ip:/opt/nextjs-portfolio
```

### 步骤 3: 配置环境变量

```bash
# 创建 .env.production 文件
cd /opt/MaPeiYing-Rachel  # 或你的项目目录
nano .env.production
```

添加以下内容：
```
RESEND_API_KEY=your_resend_api_key_here
NODE_ENV=production
```

保存并退出（Ctrl+X, 然后 Y, 然后 Enter）

### 步骤 4: 构建和运行 Docker 容器

```bash
# 使用 Docker Compose（推荐）
docker-compose up -d --build

# 或者直接使用 Docker
docker build -t nextjs-portfolio .
docker run -d -p 3000:3000 --env-file .env.production --name nextjs-portfolio nextjs-portfolio
```

### 步骤 5: 配置 Nginx 反向代理（可选但推荐）

#### 5.1 安装 Nginx

```bash
apt install nginx -y  # Ubuntu
# 或
yum install nginx -y  # CentOS

systemctl start nginx
systemctl enable nginx
```

#### 5.2 配置 Nginx

```bash
nano /etc/nginx/sites-available/nextjs-portfolio
```

添加以下配置：
```nginx
server {
    listen 80;
    server_name your-domain.com;  # 替换为你的域名或服务器IP

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 5.3 启用配置

```bash
# Ubuntu
ln -s /etc/nginx/sites-available/nextjs-portfolio /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

# CentOS
# 直接编辑 /etc/nginx/nginx.conf 或 /etc/nginx/conf.d/default.conf
nginx -t
systemctl reload nginx
```

### 步骤 6: 配置 SSL 证书（可选，推荐）

使用 Let's Encrypt 免费 SSL 证书：

```bash
# 安装 Certbot
apt install certbot python3-certbot-nginx -y  # Ubuntu
# 或
yum install certbot python3-certbot-nginx -y  # CentOS

# 获取证书
certbot --nginx -d your-domain.com

# 自动续期
certbot renew --dry-run
```

## 方案二：直接使用 Node.js 部署

### 步骤 1: 安装 Node.js

```bash
# 使用 NodeSource 安装 Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -  # Ubuntu
apt install -y nodejs

# 或 CentOS
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs
```

### 步骤 2: 安装 PM2（进程管理器）

```bash
npm install -g pm2
```

### 步骤 3: 部署应用

```bash
# 进入项目目录
cd /opt/MaPeiYing-Rachel

# 安装依赖
npm install --production

# 构建应用
npm run build

# 使用 PM2 启动
pm2 start npm --name "nextjs-portfolio" -- start
pm2 save
pm2 startup  # 设置开机自启
```

## 自动部署脚本

创建自动部署脚本 `deploy.sh`：

```bash
#!/bin/bash
set -e

echo "开始部署..."

# 拉取最新代码
git pull origin main

# 安装依赖
npm install

# 构建
npm run build

# 重启服务
if [ -f docker-compose.yml ]; then
    docker-compose restart
else
    pm2 restart nextjs-portfolio
fi

echo "部署完成！"
```

使用：
```bash
chmod +x deploy.sh
./deploy.sh
```

## 防火墙配置

**轻量应用服务器**：在阿里云控制台 → 轻量应用服务器 → 防火墙 中开放 22、80、443 端口（步骤 1.1 已说明）。

若使用系统防火墙（可选）：
```bash
# Ubuntu (UFW)
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable

# CentOS (firewalld)
firewall-cmd --permanent --add-service=ssh
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --reload
```

## 监控和维护

### 查看日志

**Docker:**
```bash
docker-compose logs -f
# 或
docker logs -f nextjs-portfolio
```

**PM2:**
```bash
pm2 logs nextjs-portfolio
```

### 更新应用

```bash
# 拉取最新代码
git pull origin main

# 重新构建
docker-compose up -d --build
# 或
npm run build && pm2 restart nextjs-portfolio
```

## 性能优化建议（2核2G 轻量适用）

1. **Nginx 缓存**: 配置 Nginx 缓存静态文件，减轻 Node 压力
2. **关闭不必要的服务**: 2G 内存有限，仅保留 Nginx + Docker 容器
3. **监控**: 轻量控制台自带基础监控，可查看 CPU/内存/流量

## 故障排查

### 应用无法启动

```bash
# 检查端口占用
netstat -tulpn | grep 3000

# 检查 Docker 容器
docker ps -a
docker logs nextjs-portfolio

# 检查 PM2
pm2 list
pm2 logs nextjs-portfolio
```

### 无法访问网站

1. 检查防火墙设置
2. 检查 Nginx 配置：`nginx -t`
3. 检查应用日志
4. 检查域名解析

## 成本估算

- **轻量应用服务器 2核2G**: 约 **¥68/年**（活动价）或 ¥45/月、¥459/年
- **域名**: 约 ¥50-100/年
- **SSL 证书**: Let's Encrypt 免费

## 注意事项

1. **备案要求**: 如果使用国内服务器，域名必须备案
2. **环境变量**: 确保 `.env.production` 中的 `RESEND_API_KEY` 已正确配置
3. **安全**: 定期更新系统和依赖包
4. **备份**: 定期备份代码和数据库（如果有）

## 需要帮助？

如果遇到问题，请检查：
- 服务器日志
- Docker/PM2 日志
- Nginx 错误日志：`/var/log/nginx/error.log`

