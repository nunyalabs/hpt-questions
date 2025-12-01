# Quick Reference - Hypertension Survey PWA

## 🎯 Access Your App

**URL:** http://localhost:8000

**Tabs:** 6 questionnaire types

---

## 📋 Questionnaire Quick Links

| Tab | Icon | For | ID | Sections | Questions |
|-----|------|-----|-------|----------|-----------|
| Patient | 👤 | Hypertensive patients | PAT | 8 | 35+ |
| Clinician | 🏥 | Healthcare providers | CLN | 7 | 28+ |
| Herbalist | 🌿 | Traditional practitioners | HRB | 7 | 32+ |
| Caregiver | 👥 | Family caregivers | CG | 8 | 40+ |
| Policymaker | 💼 | Health system leaders | POL | 8 | 35+ |
| Data | 📊 | View/manage data | N/A | N/A | N/A |

---

## 🎓 Questions Per Type

### Patient (PAT) - 8 Sections
1. Basic Info
2. Demographics
3. HTN History
4. Beliefs & Attitudes (10-item scale)
5. Communication
6. Barriers (10-item scale)
7. Digital Health
8. Integrative Care

### Clinician (CLN) - 7 Sections
1. Professional Background
2. Treatment Practices
3. Patient Observations
4. Herbal Knowledge (8-item scale)
5. Integrative Care Attitudes
6. Digital Health
7. System Constraints (8-item scale)

### Herbalist (HRB) - 7 Sections
1. Practitioner Background
2. Practice Characteristics
3. Treatment Practices
4. Conventional Medicine Interaction
5. Beliefs & Attitudes (8-item scale)
6. Collaboration Openness
7. Training Needs

### Caregiver (CG) - 8 Sections
1. Demographics
2. Caregiving Activities
3. HTN Knowledge
4. Beliefs (5-item scale)
5. Treatment Preferences
6. Healthcare Interactions
7. Integrative Care Attitudes (4-item scale + text)
8. Caregiver Burden (6-item scale)

### Policymaker (POL) - 8 Sections
1. Professional Background
2. HTN Burden Perspectives
3. Traditional Medicine Policy
4. Integrative Care Models
5. Digital Health & Innovation (4-item scale)
6. Personalized Medicine
7. Research & Evidence
8. Implementation Priorities

### Data (VIEW) - 1 Tab
- View all responses
- Delete records
- Export as JSON
- View details

---

## 🔑 Key Features

✅ **Offline-First** - Works without internet  
✅ **Mobile App** - Install on home screen  
✅ **Auto-Save** - Save drafts  
✅ **Smart Forms** - Questions appear automatically  
✅ **Local Storage** - Data never leaves device  
✅ **Export Data** - Download as JSON  
✅ **Unique IDs** - Auto-generated per respondent  
✅ **Validation** - Required fields enforced  

---

## 💾 How to Use

### Step 1: Select Questionnaire
Click any of 5 tabs (👤🏥🌿👥💼)

### Step 2: Fill Form
- Complete required fields (*)
- Answer appears automatically
- No scrolling through hidden questions

### Step 3: Save or Submit
- **Save** = Continue later (draft saved)
- **Submit** = Record in database

### Step 4: View Data
- Click **Data** tab
- See all responses
- Export or delete as needed

---

## 📊 Data View Options

**In Data Tab:**
- 👁️ **Eye icon** - View full response
- 🗑️ **Trash icon** - Delete response
- 📥 **Export JSON** - Download all data

**Export format:**
```json
{
  "id": 1,
  "type": "patients",
  "respondentId": "PAT123456",
  "timestamp": "2025-12-01T10:30:00Z",
  "data": {...}
}
```

---

## 🔄 Respondent ID Prefixes

| Questionnaire | Prefix | Example |
|---------------|--------|---------|
| Patient | PAT | PAT123456 |
| Clinician | CLN | CLN789012 |
| Herbalist | HRB | HRB345678 |
| Caregiver | CG | CG901234 |
| Policymaker | POL | POL567890 |

*Numbers auto-generated from timestamp*

---

## 📱 Install on Phone

### iPhone/iPad
1. Open in Safari
2. Tap Share → "Add to Home Screen"
3. Name: "HTN Survey"
4. Tap Add

### Android
1. Open in Chrome
2. Tap ⋮ (menu) → "Add to Home screen"
3. Name: "HTN Survey"
4. Tap Add

**Result:** App icon on home screen, works offline!

---

## ⚙️ Settings & Admin

**Database:** IndexedDB (Browser local storage)  
**Sync:** Not enabled (collect locally, export manually)  
**Backup:** Export JSON regularly  
**Clear Data:** Delete records in Data tab or clear browser storage  

---

## 📞 Support

### Common Issues

**Q: Form won't submit?**  
A: Check all required fields (*) are filled

**Q: Data disappeared?**  
A: Check "Data" tab or export JSON backup

**Q: Offline mode not working?**  
A: Visit app once online, then works offline

**Q: Can't install on phone?**  
A: Use HTTPS or localhost (not other IPs)

---

## 🎯 Study Phases

**Phase 1: Testing**
- Test each questionnaire type
- Collect sample responses
- Verify data export

**Phase 2: Training**
- Train interviewers on app
- Practice on volunteers
- Export sample dataset

**Phase 3: Deployment**
- Deploy online (optional)
- Distribute to field teams
- Begin data collection

**Phase 4: Analysis**
- Export all collected data
- Analyze in Excel/R/SPSS
- Generate reports

---

## 📈 Expected Sample Sizes

- **Patients:** 150-200 responses
- **Clinicians:** 40-60 responses
- **Herbalists:** 30-50 responses
- **Caregivers:** 50-80 responses
- **Policymakers:** 20-30 responses
- **Total:** 290-420 responses

---

## 🚀 Quick Commands

```bash
# Start app
cd /Users/gee/Documents/DS/apps/hpt-questions
python3 -m http.server 8000

# Visit app
# http://localhost:8000

# Export data regularly!
# Click "Data" tab → "Export JSON"
```

---

## ✨ Tips & Tricks

💡 **Save Often** - Use "Save" button to store drafts  
💡 **Regular Exports** - Export JSON weekly to backup  
💡 **Test First** - Try each questionnaire before deployment  
💡 **Mobile First** - Test on actual phone you'll use  
💡 **Offline Demo** - Turn off wifi to verify offline works  
💡 **Train Backup** - Have backup phone with app installed  

---

## 📚 Files Overview

| File | Purpose | Size |
|------|---------|------|
| index.html | Main app | Full UI |
| questions.js | All questionnaires | 1,319 lines |
| manifest.json | PWA config | ~300 bytes |
| sw.js | Offline support | ~2KB |
| questions.txt | Original source | Backup |

---

## 🎓 Study Info

**Study:** Personalized Hypertension Management - Ghana  
**Groups:** 5 stakeholder types  
**Questions:** 170+  
**Scales:** 51 Likert items  
**Language:** English (translate questionnaires for local)  
**Platform:** PWA (web app + mobile)  
**Storage:** Local (IndexedDB + IndexedDB export)  

---

**Your PWA is ready! Start surveying today! 🎉**
