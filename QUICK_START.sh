#!/bin/bash

# 🚀 PORTFOLIO - QUICK START SCRIPT
# Copy and paste these commands to get started instantly!

# ============================================
# INITIAL SETUP (Do this first)
# ============================================

echo "🎉 Welcome to Yasmine's Premium Portfolio!"
echo "⏳ This will set up your portfolio in 2 minutes..."
echo ""

# Navigate to project directory
cd portfolio

# Install all dependencies
echo "📦 Installing dependencies..."
npm install

# ============================================
# DEVELOPMENT (After setup)
# ============================================

# Start development server
echo "🚀 Starting development server..."
npm run dev

# Visit http://localhost:3000 in your browser

# ============================================
# BUILD FOR PRODUCTION
# ============================================

# Build the project
npm run build

# Start production server
npm start

# ============================================
# USEFUL COMMANDS
# ============================================

# Update a package
npm install package-name

# Security audit
npm audit

# Fix security issues
npm audit fix

# Format code with Prettier
npx prettier --write .

# Check for TypeScript errors
npx tsc --noEmit

# Clean cache and rebuild
rm -rf .next && npm run build

# ============================================
# DEPLOYMENT TO VERCEL
# ============================================

# 1. Initialize Git repository
git init
git add .
git commit -m "Initial portfolio commit"

# 2. Push to GitHub
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main

# 3. Go to vercel.com and connect your repository
# Auto-deploys on every push!

# ============================================
# FREQUENTLY USED COMMANDS
# ============================================

# View portfolio in browser
open http://localhost:3000

# Edit portfolio content
code data/content.ts

# View main styles
code app/globals.css

# Customize colors/theme
code tailwind.config.ts

echo "✅ All set! Your portfolio is ready to go!"
echo ""
echo "📍 Next steps:"
echo "   1. npm run dev (to start developing)"
echo "   2. Edit data/content.ts (customize your content)"
echo "   3. Visit http://localhost:3000 (see your portfolio)"
echo ""
echo "🚀 Ready to deploy? Push to GitHub and connect to Vercel!"
