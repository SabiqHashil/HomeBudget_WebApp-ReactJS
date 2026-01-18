# Vercel Deployment Guide

## Important: Data Persistence

**Good News**: Your existing users' data is **100% safe** when you deploy updates to Vercel!

### Why?
- This application uses **localStorage** to store all user data (budgets, expenses, accounts)
- localStorage is stored **in the user's browser**, not on the server
- When you deploy updates to Vercel, you're only updating the application code
- Each user's browser keeps their own data locally

### What This Means:
✅ **Safe to deploy**: Users won't lose their budgets or expenses  
✅ **Automatic updates**: Users get new features when they refresh  
✅ **No migration needed**: The new multi-user system works with existing data  

## Deployment Steps

### 1. Prepare for Deployment
Ensure your code is committed to Git:
\`\`\`bash
git add .
git commit -m "Add multi-user support and custom dialogs"
git push origin main
\`\`\`

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

### 3. Automatic Configuration
Vercel automatically detects Vite projects and uses:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Environment Variables (if needed)
This project doesn't require any environment variables since it uses localStorage.

## Data Migration Notes

### First-Time Users
- Will see the "Create Account" screen
- Can create their first budget

### Existing Users (from previous version)
- The `migrateData()` function in `helpers.js` automatically:
  - Detects legacy data (budgets/expenses without user namespacing)
  - Moves it to the current user's namespace
  - Preserves all existing budgets and expenses
- This happens **automatically** on first load after the update

### Multi-User Features
- Users can now:
  - Create multiple accounts on the same device
  - Switch between accounts via dropdown
  - Each account has isolated budgets/expenses
  - Logout without deleting data
  - Delete specific accounts when needed

## Vercel-Specific Notes

### Custom Domain (Optional)
After deployment, you can add a custom domain in Vercel dashboard:
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration steps

### Performance
- Vercel provides automatic CDN
- Vite builds are optimized for production
- No additional configuration needed

## Testing After Deployment

1. Visit your Vercel URL
2. Open browser DevTools → Application → Local Storage
3. Verify your data is still there
4. Test the new features:
   - Multi-user login
   - Logout (keeps data)
   - Delete Account (removes data)
   - Custom confirmation dialogs

## Rollback (if needed)

If you need to rollback to a previous version:
1. Go to Vercel Dashboard → Deployments
2. Find the previous deployment
3. Click "..." → Promote to Production

**Note**: User data in localStorage is unaffected by rollbacks.
