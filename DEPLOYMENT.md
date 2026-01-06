# GitHub Pages Deployment Instructions

## Prerequisites
- Ensure your repository is pushed to GitHub
- GitHub Pages must be enabled in your repository settings

## Deployment Steps

### 1. Build the project
```bash
npm run build
```

### 2. Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build the project to the `docs/` directory
- Deploy the contents to the `gh-pages` branch
- Make your site available at: `https://[your-username].github.io/LandingPage_Meu_Bairro/`

## Alternative: Automatic Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/master'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./docs
```

## Configuration Details

- **Build Output**: `docs/` directory (configured in `vite.config.ts`)
- **Base Path**: `/LandingPage_Meu_Bairro/` for production builds
- **Deployment Tool**: `gh-pages` package

## Troubleshooting

### 404 Errors
- Ensure the base path in `vite.config.ts` matches your repository name
- Check that GitHub Pages is configured to deploy from the `master` branch with `/docs` folder

### Assets Not Loading
- Verify the `base` configuration in `vite.config.ts`
- Check that all asset paths are relative

### Router Issues
If using React Router, ensure all routes work with the base path prefix.
