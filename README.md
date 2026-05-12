This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Content Management

You can easily update the website's text, images, and prices without touching the code.

All content is managed in:
`src/config/content.json`

### How to edit:
1. Open `src/config/content.json`.
2. Update the values you want to change (e.g., price of a bundle, a paragraph on the about page, or the WhatsApp number).
3. Save the file and commit the changes to GitHub.
4. The website will automatically update (if deployed via Render/Vercel with auto-deploy enabled).

### Key Fields:
- **site**: Global settings like name, logo, and contact info.
- **metadata**: SEO titles and descriptions for each page.
- **home**: Text and images for the landing page.
- **bundles**: List of products, prices, and descriptions.
- **about**: Philosophy text.
- **faq**: Questions and answers.
- **checkout/success**: Text for the ordering flow.
