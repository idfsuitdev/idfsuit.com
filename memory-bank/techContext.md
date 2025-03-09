# IDFSUIT Productions LLC - Technical Context

## Technologies Used

### Core Framework & Libraries
- **Next.js**: App Router architecture (v14+)
- **React**: v18+ with Server Components
- **TypeScript**: For type safety and better developer experience
- **Node.js**: Runtime environment

### Styling
- **CSS Modules**: For component-scoped styling
- **PostCSS**: For CSS processing (configured in postcss.config.mjs)
- **CSS Variables**: For theming and consistent design tokens

### Form Handling
- **Formspree**: External service for form submissions (endpoint: https://formspree.io/f/xanewrnn)
- **React Hook Form** (potential): For efficient form state management and validation

### Animation & Interactions
- **CSS Transitions/Animations**: For simple animations
- **Framer Motion** (potential): For more complex animations and interactions

### Development Tools
- **ESLint**: For code quality (configured in eslint.config.mjs)
- **TypeScript**: For static type checking (configured in tsconfig.json)
- **npm**: Package management

## Development Setup

### Project Structure
```
idfsuit.com/
├── memory-bank/       # Project documentation
├── public/            # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   └── app/           # Next.js App Router
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

### Local Development Commands
- `npm install`: Install dependencies
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Technical Constraints

### Performance Requirements
- Page load time < 3s
- Optimized Core Web Vitals
- Smooth animations (60fps)
- Mobile-responsive with no performance degradation

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE not supported

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader friendly
- Sufficient color contrast for noir theme

### SEO Requirements
- Semantic HTML
- Proper metadata
- Structured data
- Optimized for search engines

## Dependencies

### Production Dependencies
From package.json:
- next
- react
- react-dom
- typescript

### Development Dependencies
From package.json:
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next

## External Services

### Formspree
- **Purpose**: Contact form submission handling
- **Integration**: Form POST to https://formspree.io/f/xanewrnn
- **Required Fields**: Name, Email, Subject, Message

## Deployment Strategy

### Hosting Options
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify

### Build Process
1. TypeScript compilation
2. Next.js build process
3. Static optimization where possible
4. Image optimization

### Environment Variables
- NEXT_PUBLIC_SITE_URL: For canonical URLs
- Any API keys needed for future integrations

## Performance Optimization Strategy

1. **Code Splitting**: Automatic with Next.js
2. **Image Optimization**: Using Next.js Image component
3. **Font Loading**: Optimized with font-display swap
4. **CSS Optimization**: Minimal CSS, efficient selectors
5. **JavaScript Optimization**: Tree shaking, code splitting

## Security Considerations

1. **Form Security**: Using Formspree's security features
2. **Content Security Policy**: Implementing appropriate CSP
3. **Dependencies**: Regular updates and audits
4. **Data Handling**: Proper handling of user-submitted data