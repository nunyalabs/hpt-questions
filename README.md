# Hypertension Survey PWA

A Progressive Web Application for collecting hypertension management study data in Ghana. This app works offline and can be installed on mobile devices.

## Features

✅ **Offline Functionality** - Works without internet connection  
✅ **Mobile-First Design** - Responsive interface optimized for smartphones  
✅ **Local Data Storage** - All survey responses saved in IndexedDB  
✅ **Installable** - Can be added to home screen like a native app  
✅ **Multiple Questionnaires** - Patient surveys with more to come  
✅ **Data Export** - Export collected data as JSON  
✅ **Auto-Save** - Save progress and continue later  

## Quick Start

### Method 1: Using Python (Recommended)

```bash
cd /Users/gee/Documents/DS/apps/hpt-questions
python3 -m http.server 8000
```

Then open your browser to: `http://localhost:8000`

### Method 2: Using VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Method 3: Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push this folder to the repository
3. Enable GitHub Pages in repository settings
4. Access via: `https://yourusername.github.io/repository-name`

## File Structure

```
hpt-questions/
├── index.html          # Main application file
├── questions.js        # Questionnaire data in JSON format
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline support
├── questions.txt      # Original questionnaire text (backup)
└── README.md          # This file
```

## Usage

### Collecting Responses

1. **Select Questionnaire Type** - Currently supports Patient questionnaire
2. **Fill Form** - Complete all required fields (marked with *)
3. **Save Progress** - Click "Save" to continue later
4. **Submit** - Click "Submit" to save the response

### Viewing Collected Data

1. Click the "Data" tab
2. View all submitted responses
3. Click eye icon to view details
4. Click trash icon to delete a response
5. Click "Export JSON" to download all data

### Installing on Mobile

#### iOS (iPhone/iPad)
1. Open the app in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Tap "Add"

#### Android
1. Open the app in Chrome
2. Tap the menu (three dots)
3. Select "Add to Home screen"
4. Tap "Add"

Or look for the install prompt that appears automatically.

## Data Storage

- All data is stored **locally** in your browser's IndexedDB
- Data persists even when offline
- No data is sent to any server by default
- To share data, use the Export function

## Questionnaire Structure

The questionnaires are defined in `questions.js` as JSON objects. Each questionnaire has:

- **Sections** - Logical groupings of questions
- **Questions** - Individual survey items
- **Question Types**:
  - `text` - Text input
  - `date` - Date picker
  - `select` - Dropdown selection
  - `radio` - Single choice
  - `checkbox` - Multiple choice
  - `scale` - Likert scale (1-5)

### Conditional Logic

Questions can be shown/hidden based on other answers using `showIf`:

```javascript
{
    id: 'medicationAdherence',
    label: 'How often did you take medication?',
    showIf: { field: 'takingMedication', value: 'Yes' }
}
```

## Adding More Questionnaires

To add additional questionnaires (Clinicians, Herbalists, Caregivers, Policymakers):

1. Open `questions.js`
2. Add a new entry to the `QUESTIONNAIRES` object following the existing pattern
3. The app will automatically create a new tab for it

Example structure is already in `questions.txt` - just needs to be converted to JSON format.

## Technical Details

### Technologies Used
- **HTML5/CSS3** - Structure and styling
- **JavaScript (ES6)** - Application logic
- **Bootstrap 5** - UI framework
- **IndexedDB** - Local database
- **Service Worker** - Offline support
- **Web App Manifest** - PWA capabilities

### Browser Compatibility
- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile browsers (iOS Safari, Chrome Android)

### PWA Features
- **Offline Mode** - Service worker caches app files
- **Install Prompt** - Automatic install banner
- **Responsive** - Adapts to all screen sizes
- **App-like** - Runs in standalone mode when installed

## Data Export Format

Exported JSON structure:

```json
[
  {
    "id": 1,
    "type": "patients",
    "respondentId": "PAT123456",
    "timestamp": "2025-12-01T10:30:00.000Z",
    "data": {
      "studySite": "Accra Central",
      "age": "45-54",
      "gender": "Female",
      ...
    }
  }
]
```

## Troubleshooting

### App won't install
- Make sure you're using HTTPS (or localhost)
- Try refreshing the page
- Check browser compatibility

### Data not saving
- Ensure IndexedDB is enabled in browser settings
- Check browser storage quota
- Try clearing browser cache and reload

### Offline mode not working
- Verify service worker is registered (check browser console)
- Visit the app online at least once to cache files
- Check Network tab to see if files are cached

## Security & Privacy

- All data stored locally on device
- No automatic cloud backup
- User responsible for exporting/backing up data
- Consider encrypting exported data if sensitive

## Future Enhancements

- [ ] Add remaining questionnaire types (Clinicians, Herbalists, etc.)
- [ ] Data synchronization with backend server
- [ ] Multi-language support (Twi, Ga, Ewe)
- [ ] Data analytics dashboard
- [ ] Export to CSV format
- [ ] Photo/signature capture
- [ ] GPS location tagging

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review browser console for error messages
3. Ensure you're using a supported browser version

## License

This application is for research purposes - Personalized Hypertension Management Study, Ghana.

## Version

**v1.0.0** - Initial release with Patient questionnaire support

---

**Note**: Remember to regularly export your data to prevent loss!
