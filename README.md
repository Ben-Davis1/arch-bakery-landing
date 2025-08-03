# Arch Bakery Landing Page

A beautiful, responsive landing page for Arch Bakery - a small-batch home bakery by Debby.

## Features

- **Responsive Design**: Optimized for all devices
- **Instagram Integration**: Direct links to DM ordering process
- **Product Showcase**: Features all signature items from Instagram
- **Vacation Notice**: Easy-to-update banner for business status
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant design with proper contrast and alt tags

## Getting Started

### Prerequisites
- Node.js (14+ recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Updating Vacation Notice
Edit the vacation notice in `src/App.js`:
```javascript
// Update this text as needed
🌴 ON VACAY TIL 6/6 ✌🏼 - Orders will resume after vacation!
```

### Adding Product Images
Replace the placeholder backgrounds in the product cards with actual images:
1. Add images to `public/images/` folder
2. Replace the gradient placeholder divs with `<img>` tags

### Updating Content
All content is based on Arch Bakery's Instagram (@archbakeryy). Update the following sections as needed:
- Product descriptions
- Delivery schedule
- Instagram handle
- Business information

## Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Google Fonts**: Inter font family

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Arch Bakery. All rights reserved.