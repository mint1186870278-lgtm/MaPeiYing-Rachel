# 阿里云部署 - 新手版（一步步跟着做）

> 第一次部署也能看懂，按顺序做就行。

---

## 你已经完成的 ✅

- [x] 买了轻量应用服务器（2核2G，北京，Docker 镜像）
- [x] 开放了防火墙（22、80、443）
- [x] 把防火墙模板应用到了服务器

---

## 接下来要做的事（5 步）

### 第一步：连接服务器

**方式 A：网页连接（推荐，不用装软件）**

1. 打开 [阿里云轻量应用服务器控制台](https://swas.console.aliyun.com/)
2. 找到你的服务器 **Docker-dwgz**，点进去
3. 点顶部的 **「远程连接」** 按钮
4. 选择 **「通过 Workbench 连接」** 或 **「通过 VNC 连接」**
5. 输入 root 密码（买服务器时设置的，或你后来重置的）
6. 连接成功后，会看到一个**黑色窗口**，里面可以输入命令

**方式 B：用自己电脑的终端连接**

- Windows：按 `Win + R`，输入 `cmd` 回车，或搜索「PowerShell」
- Mac：打开「终端」
- 输入（把 IP 换成你的服务器 IP，你的是 `39.106.144.152`）：

```bash
ssh root@39.106.144.152
```

- 提示输入密码时，输入 root 密码（输入时不会显示，输完直接回车）

---

### 第二步：检查 Docker 是否能用

在黑色窗口里，**一行一行**输入下面命令，每行输完按回车：

```bash
docker --version
```

如果显示类似 `Docker version 26.x.x`，说明 Docker 已安装。

再输入：

```bash
docker compose version
```

如果显示版本号，说明 Docker Compose 也有。如果报错，输入下面这行安装：

```bash
apt update && apt install -y docker-compose-plugin
```

---

### 第三步：把网站代码下载到服务器

依次输入下面命令（可以整段复制粘贴，一次执行多行）：

```bash
cd /opt
```

**如果用 root 登录**，直接执行：

```bash
git clone https://github.com/mint1186870278-lgtm/MaPeiYing-Rachel.git
```

**如果用 admin 登录**（提示符是 `[admin@xxx]$`），用 `sudo`：

```bash
sudo git clone https://github.com/mint1186870278-lgtm/MaPeiYing-Rachel.git
```

> 如果这个链接不是你的项目，换成你自己的 GitHub 仓库地址。

```bash
cd MaPeiYing-Rachel
```

如果提示 `git: command not found`，先安装 Git：

```bash
apt update && apt install -y git
```

然后再重新执行上面的 `git clone` 和 `cd` 命令。

> ⚠️ **用 admin 登录的话**，后面第四步、第五步的命令也要加 `sudo`（见下方说明）。

---

### 第四步：配置联系表单的 API 密钥

网站的联系表单需要 Resend 的 API 密钥才能发邮件。

1. 在项目目录下创建配置文件，输入（**用 admin 登录的话改成 `sudo nano .env`**）：

```bash
nano .env
```

2. 在打开的编辑器里，输入下面两行（**把 `你的Resend密钥` 换成你真正的密钥**）：

```
RESEND_API_KEY=你的Resend密钥
NODE_ENV=production
```

3. 保存并退出：
   - 按 `Ctrl + X`
   - 按 `Y` 确认保存
   - 按 `Enter` 确认文件名

> 如果没有 Resend 密钥，可以暂时填 `dummy_key_for_build`，网站能跑起来，但联系表单发不了邮件。之后在 [resend.com](https://resend.com) 注册获取密钥再改。

---

### 第五步：启动网站

在项目目录下（如果不在，先输入 `cd /opt/MaPeiYing-Rachel`），执行（**用 admin 登录的话改成 `sudo docker compose up -d --build`**）：

```bash
docker compose up -d --build
```

- 第一次会下载依赖、构建镜像，可能要 **5～10 分钟**
- 看到类似 `done` 或 `Started` 就表示启动成功

---

## 访问你的网站

在浏览器地址栏输入：

```
http://39.106.144.152:3000
```

（如果你的服务器 IP 不同，把 `39.106.144.152` 换成你的公网 IP）

能看到你的作品集网站，就说明部署成功了。

---

## 常见问题

### 1. 输入密码时没反应？

正常，Linux 输入密码时不会显示任何字符，直接输完按回车即可。

### 2. 提示 `Permission denied`？

检查 root 密码是否正确，或到阿里云控制台重置密码。

### 3. `git clone` 提示 `Permission denied`？

说明你是用 **admin** 登录，而 `/opt` 目录只有 root 能写。用 `sudo` 执行：

```bash
sudo git clone https://github.com/mint1186870278-lgtm/MaPeiYing-Rachel.git
```

后面创建 `.env` 和启动 Docker 时也要加 `sudo`。

### 4. `git clone` 其他失败？

- 检查仓库地址是否正确、是否公开
- 如果项目在本地，可以用 SCP 上传（见下方「备选：本地上传」）

### 5. 网站打不开？

- 确认防火墙已开放 22、80、443，并已应用到实例
- 确认 `docker compose up -d --build` 已成功执行
- 查看容器是否在运行：`docker ps`

### 6. 想重启网站？

```bash
cd /opt/MaPeiYing-Rachel
docker compose restart
```

（admin 用户改成 `sudo docker compose restart`）

### 7. 想更新网站内容？

```bash
cd /opt/MaPeiYing-Rachel
git pull
docker compose up -d --build
```

（admin 用户把 `docker compose` 改成 `sudo docker compose`）

---

## 备选：本地上传（不用 Git）

如果 Git 不好用，可以把本地项目直接上传到服务器：

1. 在**服务器**上先创建目录，输入：`mkdir -p /opt/MaPeiYing-Rachel`
2. 在**你的电脑**上打开终端，进入项目目录（例如 `cd C:\Users\Mint\nextjs-portfolio`）
3. 执行（把 IP 换成你的）：

```bash
scp -r . root@39.106.144.152:/opt/MaPeiYing-Rachel
```

4. 上传完成后，在**服务器**上执行第四步和第五步（创建 .env、启动 docker compose）

---

## 下一步（可选）

- **绑定域名**：备案通过后，在控制台「域名」里绑定你的域名
- **配置 Nginx**：让网站通过 80 端口访问，不用加 `:3000`，详见 `ALIYUN_DEPLOYMENT.md`
- **配置 HTTPS**：用 Let's Encrypt 免费证书，详见 `ALIYUN_DEPLOYMENT.md`
