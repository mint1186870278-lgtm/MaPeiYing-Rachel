#!/bin/bash
set -e

echo "🚀 开始部署 Next.js Portfolio..."

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 请在项目根目录运行此脚本"
    exit 1
fi

# 检查 Docker 是否安装
if ! command -v docker &> /dev/null; then
    echo "❌ 错误: 未安装 Docker，请先安装 Docker"
    exit 1
fi

# 检查 .env.production 文件
if [ ! -f ".env.production" ]; then
    echo "⚠️  警告: .env.production 文件不存在"
    echo "请创建 .env.production 文件并添加 RESEND_API_KEY"
    read -p "是否继续? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# 拉取最新代码（如果使用 Git）
if [ -d ".git" ]; then
    echo "📥 拉取最新代码..."
    git pull origin main || echo "⚠️  Git pull 失败，继续使用当前代码"
fi

# 构建 Docker 镜像
echo "🔨 构建 Docker 镜像..."
docker build -t nextjs-portfolio:latest .

# 停止并删除旧容器（如果存在）
if [ "$(docker ps -aq -f name=nextjs-portfolio)" ]; then
    echo "🛑 停止旧容器..."
    docker stop nextjs-portfolio || true
    docker rm nextjs-portfolio || true
fi

# 启动新容器
echo "▶️  启动新容器..."
docker run -d \
    --name nextjs-portfolio \
    --restart unless-stopped \
    -p 3000:3000 \
    --env-file .env.production \
    nextjs-portfolio:latest

# 等待容器启动
echo "⏳ 等待容器启动..."
sleep 5

# 检查容器状态
if [ "$(docker ps -q -f name=nextjs-portfolio)" ]; then
    echo "✅ 部署成功！"
    echo "🌐 应用运行在: http://localhost:3000"
    echo ""
    echo "查看日志: docker logs -f nextjs-portfolio"
    echo "停止服务: docker stop nextjs-portfolio"
    echo "重启服务: docker restart nextjs-portfolio"
else
    echo "❌ 部署失败，请检查日志: docker logs nextjs-portfolio"
    exit 1
fi

