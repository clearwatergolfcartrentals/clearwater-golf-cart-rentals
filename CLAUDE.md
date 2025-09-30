# Clearwater Golf Cart Rentals - Project Documentation

## Project Overview
A modern, customizable web application for a golf cart rental business in Clearwater, Florida. Built with TypeScript, Node.js, Express, and Tailwind CSS for a responsive and professional appearance.

## Project Intent
Create a simple yet professional website for Clearwater Golf Cart Rentals that:
- Showcases the rental service with an eye-catching design
- Provides essential business information (hours, contact, services)
- Is easily customizable for future updates
- Supports development with hot-reload for rapid iteration
- Can be deployed using Docker for production readiness

## Tech Stack
- **Backend**: Node.js with Express and TypeScript
- **Frontend**: HTML5 with Tailwind CSS for modern, responsive styling
- **Development**: Nodemon for hot-reload, TypeScript for type safety
- **Deployment**: Docker & Docker Compose for containerization
- **CSS Framework**: Tailwind CSS (free, modern, highly customizable)

## Project Structure
```
clearwater-golf-cart-rentals/
├── src/
│   ├── server.ts           # Express server setup
│   ├── public/
│   │   └── index.html      # Main website page
│   └── styles/
│       └── input.css       # Tailwind CSS input file
├── dist/                   # Compiled output (generated)
├── package.json           # Node.js dependencies
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── nodemon.json           # Hot-reload configuration
├── Dockerfile             # Production container
├── Dockerfile.dev         # Development container
└── docker-compose.yml     # Container orchestration
```

## Key Features
1. **Large Customizable Heading**: Prominent "Clearwater Golf Cart Rentals" with gradient effects
2. **Responsive Design**: Mobile-first approach using Tailwind CSS
3. **Feature Cards**: Highlighting premium fleet, best prices, and fast delivery
4. **Contact Section**: Business hours and contact information
5. **Call-to-Action**: Prominent booking and fleet viewing buttons
6. **Modern Animations**: Hover effects and smooth transitions

## Development Commands

### Local Development
```bash
# Install dependencies
npm install

# Run development server with hot-reload
npm run dev

# Build for production
npm run build

# Build CSS only
npm run build:css
```

### Docker Commands
```bash
# Development with hot-reload
docker-compose --profile dev up

# Production build
docker-compose up

# Stop containers
docker-compose down
```

## Customization Guide

### Colors
Edit `tailwind.config.js` to modify the color scheme:
- `clearwater-blue`: Primary blue color
- `beach-sand`: Sand/beige accent color
- `ocean-green`: Green accent color

### Content
Edit `src/public/index.html` to update:
- Business information
- Service descriptions
- Contact details
- Operating hours

### Styling
- Global styles: `src/styles/input.css`
- Tailwind config: `tailwind.config.js`
- Inline Tailwind classes in HTML for quick changes

## API Endpoints
- `/` - Main website page
- `/health` - Health check endpoint (returns JSON status)

## Environment Variables
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## Future Enhancements
Potential areas for expansion:
1. Add a booking system with calendar integration
2. Implement a fleet gallery with images
3. Add customer testimonials section
4. Integrate payment processing
5. Add an admin dashboard for managing rentals
6. Implement email notifications
7. Add Google Maps integration for delivery areas
8. Create a pricing calculator
9. Add seasonal promotions banner
10. Implement multi-language support

## Testing
Currently no tests implemented. Consider adding:
- Unit tests for server endpoints
- E2E tests for user workflows
- Visual regression tests for UI consistency

## Deployment Notes
The application is containerized and ready for deployment to:
- AWS ECS/Fargate
- Google Cloud Run
- Azure Container Instances
- Digital Ocean App Platform
- Any Docker-compatible hosting service

## Maintenance
- Regularly update npm dependencies: `npm update`
- Check for Tailwind CSS updates for new features
- Monitor TypeScript for type safety improvements
- Keep Docker base images updated for security

## Contact
Project created for Clearwater Golf Cart Rentals
Location: Clearwater, FL

---
*This document should be updated as the project evolves to maintain accurate documentation for future development and maintenance.*