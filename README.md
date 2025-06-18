# A Personal Website Template ･ﾟ✧

## Technologies Used
This website was developed with:
- **Astro:** For blazing-fast performance and an excellent developer experience.
- **TailwindCSS:** For rapid and highly customizable styling.
- **DaisyUI:** A component library integrated with TailwindCSS for streamlined UI development.

## Getting Started (For Developers)
To explore the codebase and run this portfolio locally:

### **Installation**
Clone the repository and install the dependencies:
```
git clone [your-repository-url]
cd [your-repository-folder]
pnpm install # or npm install / yarn install if you prefer
```

### **Local Development**
Once packages are installed, start the local development server:
```
npm run dev / yarn dev
```
Your portfolio will typically be accessible at `http://localhost:4321`.

## Project Structure

This project follows a clear, organized structure to separate components, content, and pages:
```
├── src/
│   ├── components/       # Reusable UI components
│   │   └── ...           # General components (Header, Footer, Cards)
│   ├── content/          # Markdown content for blog posts, projects, etc.
│   │   ├── blog/         # Your blog posts
│   ├── layouts/          # Reusable page layouts
│   └── pages/            # Main website pages (index, projects, blog)
│   │   └── ...
│   ├── styles/           # Global CSS styles
│   └── config.ts         # Site-wide configurations
├── public/               
├── astro.config.mjs      # Astro configuration
├── tailwind.config.cjs   # TailwindCSS configuration
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Customization & Content Management
This section outlines how to update and manage the content of this portfolio.

### **Site Configuration**
Global site settings such as the site's title are managed in `/src/config.ts`.

### **Key Components**
- **Sidebar:** Customize your profile picture, navigation links, and social media icons in the `SideBar` and `SideBarFooter` components.
- **Cards:** Projects and potentially blog entries are presented using `Card` and `HorizontalCard` components.

### **Adding & Managing Content**
**Blog:** Posts can be added as Markdown files in `/src/content/blog/`. 

### **Theming**
The website's theme is controlled by the `data-theme` attribute on the `<html>` tag in `BaseLayout.astro`. You can switch between various [DaisyUI themes](https://daisyui.com/docs/themes/) to quickly change the visual style.

## Deployment
This static website can be easily deployed to various static hosting services like Vercel/Netlify/GitHub Pages. Use to the [official Astro deployment guides](https://docs.astro.build/en/guides/deploy/) for platform-specific instructions.