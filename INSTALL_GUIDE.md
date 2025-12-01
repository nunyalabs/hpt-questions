# 📱 Installation Guide - HTN Survey PWA

## ✅ Critical Fixes Applied

Your app is now **fully installable** on both Android and iOS devices with complete offline support!

---

## 🤖 Android Installation

### Method 1: Install Prompt (Automatic)
1. Open **Chrome** or **Edge** browser on your Android phone
2. Visit: `https://nunyalabs.github.io/hpt-questions`
3. Wait 3-5 seconds - you'll see a blue banner: **"Install App"**
4. Tap **"Install Now"** button
5. Confirm installation
6. App icon appears on your home screen ✅

### Method 2: Manual Installation
1. Open the app in **Chrome** browser
2. Tap the **⋮** (3 dots) menu in top-right
3. Select **"Install app"** or **"Add to Home screen"**
4. Tap **"Install"**
5. Done! ✅

---

## 🍎 iOS Installation (iPhone/iPad)

### Step-by-Step
1. Open **Safari** browser (must be Safari, not Chrome)
2. Visit: `https://nunyalabs.github.io/hpt-questions`
3. You'll see a green banner with instructions after 3 seconds
4. Tap the **Share** button (square with arrow pointing up) at the bottom
5. Scroll down and tap **"Add to Home Screen"**
6. Edit name if needed, then tap **"Add"**
7. App icon appears on your home screen ✅

**Note:** Safari is required for iOS PWA installation. Chrome/Firefox won't work.

---

## 🔧 What Was Fixed

### Service Worker Issues
- ✅ Changed paths from `/` to `./` for GitHub Pages compatibility
- ✅ Fixed caching strategy - now caches each resource individually
- ✅ Added error handling to prevent install failures
- ✅ Proper offline fallback for all resources

### Manifest Issues
- ✅ Fixed `start_url` to work with GitHub Pages
- ✅ Fixed `scope` for proper app boundary
- ✅ Updated all URLs to relative paths

### Installation Issues
- ✅ Added iOS-specific meta tags and icons
- ✅ Added install prompt for Android
- ✅ Added install instructions for iOS
- ✅ Auto-detection of device type
- ✅ Proper service worker registration with scope

---

## 🧪 Testing Offline Mode

### After Installation
1. **Install the app** using steps above
2. **Open the installed app** from your home screen
3. Turn on **Airplane Mode** ✈️
4. The app should still work perfectly!
5. Fill out a survey - data saves to IndexedDB locally
6. Turn off Airplane Mode
7. Data remains safe on your device

---

## 📊 What Works Offline

✅ **Full App Access** - All questionnaires available
✅ **Data Entry** - Fill out surveys offline
✅ **Data Storage** - IndexedDB saves locally
✅ **Data Export** - Export JSON even offline
✅ **Form Validation** - All features work
✅ **Conditional Logic** - Smart questions work
✅ **UI/UX** - Full Bootstrap interface cached

---

## 🔍 Verify Installation Success

### Android
- App icon on home screen with your custom blue medical icon
- Opens in full-screen (no browser bar)
- Status bar matches app theme color (blue)
- Works offline completely

### iOS  
- App icon on home screen with custom icon
- Opens in full-screen (no Safari UI)
- Splash screen shows on launch
- Works offline completely

---

## 🐛 Troubleshooting

### "Install" button doesn't appear (Android)
- Clear browser cache and reload
- Make sure you're using Chrome or Edge
- Wait 5-10 seconds for prompt to appear
- Try Method 2 (manual installation)

### Can't install on iOS
- **Must use Safari browser** (not Chrome/Firefox)
- Look for Share button at bottom of Safari
- Make sure you're not in Private Browsing mode

### App not working offline
- Uninstall and reinstall the app
- On first launch, make sure you have internet
- This allows service worker to cache all resources
- After first successful load, offline mode works forever

### Service Worker not caching
- Open browser console (Chrome DevTools)
- Check for errors in Console tab
- Go to Application tab → Service Workers
- Should show "Active and running" status
- Check Cache Storage - should have "htn-survey-v1"

---

## 💾 Cache Contents

Your app caches:
- `index.html` - Main app
- `questions.js` - All questionnaires (1,318 lines)
- `manifest.json` - PWA config
- Bootstrap CSS (5.3.0)
- Bootstrap JavaScript (5.3.0)
- Bootstrap Icons CSS
- Bootstrap Icons Fonts (woff2)

**Total Cache Size:** ~2-3 MB

---

## 🔄 Updating the App

When new versions are published:
1. Service worker detects updates automatically
2. New version downloads in background
3. Console shows: "New version available! Refresh to update."
4. Close and reopen app to get latest version
5. Or simply reload the page

---

## 📱 Native App Features

Once installed, your PWA works like a native app:

✅ **Standalone Mode** - No browser UI
✅ **Splash Screen** - Custom loading screen
✅ **Home Screen Icon** - Custom medical icon
✅ **Offline Support** - Full functionality without internet
✅ **Background Sync** - Ready for future data sync
✅ **Push Notifications** - Ready for future implementation
✅ **Local Storage** - IndexedDB for survey data
✅ **App Shortcuts** - Quick access to Patient/Clinician surveys

---

## 🎯 Live URL

**Production:** https://nunyalabs.github.io/hpt-questions

**Status:** ✅ Live and fully functional

---

## ✅ Confirmation Checklist

After installation, verify:
- [ ] App icon on home screen
- [ ] Opens without browser UI
- [ ] Works in Airplane Mode
- [ ] Can fill out surveys offline
- [ ] Data saves to IndexedDB
- [ ] Export function works
- [ ] All 5 questionnaires accessible
- [ ] Form validation working
- [ ] Responsive on mobile
- [ ] Text is large and readable

---

**Last Updated:** December 1, 2025  
**Version:** PWA 2.0 - Full Offline Support  
**Repository:** https://github.com/nunyalabs/hpt-questions
