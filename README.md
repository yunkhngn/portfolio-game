# Modern Marketing Portfolio Template

A premium, high-performance marketing portfolio template built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. Designed for creative strategists, brand managers, and digital marketers.

![Portfolio Preview](public/thumbnail.jpg)

## ✨ Features

- 🚀 **Next.js 15 (App Router)** - Optimized performance and SEO.
- 🎨 **Premium Design** - Dark-themed, elegant aesthetic with smooth Framer Motion animations.
- 📱 **Fully Responsive** - Looks beautiful on all devices.
- ☁️ **Contentful Integration** - Headless CMS Support (Optional).
- ⚙️ **Local Config Fallback** - Run locally without any CMS configuration.
- 📈 **SEO Optimized** - Automatic metadata generation and social previews.
- ⌨️ **Developer Friendly** - Clean code with TypeScript and standardized configuration.

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/modern-marketing-portfolio.git
cd modern-marketing-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure (Optional)
This template works out-of-the-box using the local configuration files. To customize your info, edit:
- `src/config/site.ts` (Site metadata, social links)
- `src/config/portfolio.ts` (Hero, About, Projects, Experience, etc.)

### 4. Run development server
```bash
npm run dev
```

## ☁️ Contentful Setup (Optional)

If you want to manage your content via Contentful:

1. Create a Contentful account.
2. Set up a Space and create the necessary Content Types (see below).
3. Copy `.env.local.example` to `.env.local`.
4. Fill in your `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`.

### Required Content Types:
- `siteConfig`: Site-wide metadata.
- `heroSection`: Hero landing data.
- `aboutSection`: Bio and skills.
- `project`: Individual portfolio projects.
- `experience`: Professional timeline items.
- `marqueeItem`: Scrolling banner text.
- `motto`: Quote section.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **CMS**: [Contentful](https://www.contentful.com/) (Optional)
- **Deployment**: [Vercel](https://vercel.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
