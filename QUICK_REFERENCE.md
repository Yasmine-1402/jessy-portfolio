# 🚀 QUICK START GUIDE - Windows PowerShell Edition

## Installation & Setup (Windows)

### Step 1: Open PowerShell
```powershell
# Navigate to portfolio folder
cd "C:\Users\Yasmine Shehata\OneDrive\Desktop\1 to 1\Jessy\portfolio"
```

### Step 2: Install Dependencies
```powershell
npm install
```

### Step 3: Start Development Server
```powershell
npm run dev
```

**Result**: Open `http://localhost:3000` in your browser ✅

---

## Essential Commands

### Run Development Server
```powershell
npm run dev
```

### Build for Production
```powershell
npm run build
npm start
```

### Check for Errors
```powershell
npx tsc --noEmit
```

### Format Code
```powershell
npx prettier --write .
```

### Clear Cache & Rebuild
```powershell
Remove-Item -Recurse -Force .next
npm run build
```

---

## Customization

### Edit Your Content
```powershell
# Edit in VS Code
code data/content.ts
```

### Change Colors/Theme
```powershell
code tailwind.config.ts
```

### Modify Styles
```powershell
code app/globals.css
```

---

## File Locations

| File | Purpose | Edit For |
|------|---------|----------|
| `data/content.ts` | All your content | Projects, skills, experience |
| `tailwind.config.ts` | Design system | Colors, spacing, animations |
| `app/globals.css` | Global styles | Custom animations |
| `components/*.tsx` | Components | Layout changes |
| `.env.local` | Environment vars | API keys (if added) |

---

## Deployment to Vercel (Windows)

### Step 1: Setup Git
```powershell
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
```

### Step 2: Create GitHub Repo
1. Go to github.com and create new repo
2. Copy the repository URL

### Step 3: Push to GitHub
```powershell
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

### Step 4: Deploy to Vercel
1. Go to vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Done! 🎉

---

## Troubleshooting (Windows)

### "npm: command not found"
**Solution**: Install Node.js from nodejs.org

### Build fails
```powershell
# Clear cache
Remove-Item -Recurse -Force node_modules
npm install
npm run build
```

### Styles not applying
```powershell
# Check config and rebuild
npm run build
```

### Port 3000 in use
```powershell
# Kill process on port 3000
netstat -ano | findstr :3000
# Then: taskkill /PID <PID> /F
# Or use different port:
npm run dev -- -p 3001
```

---

## Environment Setup (Windows)

### Verify Node Installation
```powershell
node --version
npm --version
```

### Install Global Tools (Optional)
```powershell
npm install -g vercel
npm install -g netlify-cli
```

---

## Project Folder Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── content.ts
├── lib/
│   └── utils.ts
├── public/
├── node_modules/ (created after npm install)
├── .next/ (created after npm run build)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## Content Structure (data/content.ts)

### Profile Data
```typescript
export const profileData = {
  name: 'Yasmine Shehata',
  title: 'Software Engineer & Community Leader',
  email: 'yshehata047@gmail.com',
  phone: '+201117366262',
  location: 'Cairo, Egypt',
  // ... more fields
};
```

### Projects Array
```typescript
export const projectsData = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    technologies: ['React', 'TypeScript'],
    // ... more fields
  },
];
```

### Skills Array
```typescript
export const skillsData = {
  languages: [
    { name: 'JavaScript', level: 90 },
    // ... more skills
  ],
  // ... more categories
};
```

---

## Common Customizations

### Change Primary Color
In `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    600: '#7c3aed',  // Change this color
  },
}
```

### Add New Section
1. Create new component in `components/`
2. Import in `app/page.tsx`
3. Add data to `data/content.ts`

### Modify Navigation Links
In `components/Navigation.tsx`:
```typescript
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  // Add more items
];
```

---

## Performance Tips

### Optimize Images
Place images in `public/` folder:
```
public/
├── projects/
│   ├── project1.jpg
│   └── project2.jpg
└── assets/
    └── avatar.jpg
```

### Enable Analytics (Optional)
Add to `app/layout.tsx` for Google Analytics tracking

### Monitor Performance
Run Lighthouse audit:
1. Open portfolio in Chrome
2. Right-click → Inspect
3. Lighthouse tab
4. Click "Analyze page load"

---

## Git Commands (Windows)

### Basic Git Workflow
```powershell
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

---

## Environment Variables (If Needed Later)

Create `.env.local` file:
```
NEXT_PUBLIC_GITHUB_TOKEN=your_token_here
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access in code:
```typescript
const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
```

---

## Testing Checklist

Before deploying:
- [ ] Portfolio loads at localhost:3000
- [ ] All links work
- [ ] Mobile view looks good
- [ ] Animations are smooth
- [ ] Forms work
- [ ] No console errors
- [ ] Lighthouse score 95+

---

## Useful Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + C` | Stop dev server |
| `Ctrl + Shift + P` | VS Code command palette |
| `F12` | Browser developer tools |
| `Ctrl + /` | Comment code (VS Code) |
| `Alt + Shift + F` | Format code (VS Code) |

---

## FAQ

**Q: How do I change my GitHub projects?**
A: Update links in `data/content.ts` projectsData array

**Q: How do I add new sections?**
A: Create new component, add to `app/page.tsx`

**Q: Can I use this on a custom domain?**
A: Yes! On Vercel, go to project settings → Domains

**Q: How often should I update?**
A: Update as you gain new skills/projects

**Q: Can I add a blog?**
A: Yes! Create new route in `app/blog/`

**Q: Is it mobile-friendly?**
A: Yes! Fully responsive on all devices

---

## Support & Help

### Documentation Files
- `README.md` - Overview
- `SETUP_GUIDE.md` - Detailed setup
- `IMPLEMENTATION_DETAILS.md` - Technical details
- `DELIVERY_SUMMARY.md` - Complete features list

### External Resources
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Vercel: https://vercel.com/docs

---

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Visit `http://localhost:3000`
4. ✅ Edit `data/content.ts`
5. ✅ Test everything
6. ✅ Push to GitHub
7. ✅ Deploy to Vercel
8. ✅ Share with recruiters!

---

**Your portfolio is ready to go! 🚀**

**Start with**: `npm install && npm run dev`
