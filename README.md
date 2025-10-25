# IRIS Dashboard - NITK Surathkal 2025

A modern, responsive single-page dashboard application built from a high-fidelity Figma design. This dashboard provides an intuitive interface for students to access their academic information, course details, and institutional resources with enhanced user engagement and accessibility.

## 🎯 Objective

To design a new, modern web dashboard for IRIS that enhances user engagement and accessibility by applying strong principles of information hierarchy, actionability, and organized layout. The redesign aims to minimize navigation effort, highlight essential academic information, and create a cohesive, modern interface aligned with current design standards.

## 📋 Plan and Approach

The design process followed a structured approach focused on analysis, research, and application of UI/UX principles:

1. **Observation of the Current Dashboard** – Examined the IRIS web dashboard on desktop to understand the structure, usability, and layout limitations.
2. **Workflow Analysis** – Identified existing multi-step processes and re-envisioned them as one- or two-click interactions to improve efficiency.
3. **Design Trend Research** – Studied recent dashboard trends emphasizing visual data representation, AI-assisted personalization, minimalist design, and micro-interactions (small 3D animations or hover feedback).
4. **Efficient Space Usage** – Ensured central content areas are not wasted while using white space effectively for a balanced, clean aesthetic.
5. **Prototype Development** – Created a high-fidelity mock-up on Figma, integrating the findings above into an actionable design.

## 🔑 Key Design Decisions

### a. Direct Moodle Login
Moodle is one of the most frequently used external tools via IRIS. In the current setup, users require about three clicks to access Moodle, and the option is not clearly visible on the homepage. The proposed design includes a direct Moodle login button on the main dashboard, enabling immediate access and reducing user friction.

### b. Upcoming Assignment Deadlines
Assignments on Moodle are currently shown in a secluded corner and often go unnoticed. The new dashboard includes an "Upcoming Deadlines" widget—centrally positioned—to display imminent tasks and deadlines at a glance.

### c. Efficient Information Layout
The central space is not left empty yet not over-cluttered. It prioritizes CGPA and credits cards, attendance cards and timetable. While profile and rest of the tools occupy the sidebars and header.

## 🎨 Design Implementation

### Visual Design Principles
- **Information Hierarchy**: Clear visual hierarchy with proper typography scaling
- **Actionability**: Direct access to frequently used features (Moodle, Deadlines)
- **Organized Layout**: Logical grouping of related information and tools
- **Modern Aesthetics**: Clean, professional design aligned with current standards

### User Experience Enhancements
- **Reduced Navigation Effort**: Direct access to Moodle and key academic information
- **Visual Data Representation**: Progress bars, statistics cards, and status indicators
- **Micro-interactions**: Hover effects, smooth transitions, and feedback animations
- **Accessibility**: Keyboard navigation, screen reader support, and proper contrast ratios

## 🚀 Features

### 🖥️ Desktop-Focused Design
- **Modern Interface**: Clean, professional layout optimized for desktop use
- **Dropdown Navigation**: Interactive dropdown menus for academics, campus, and alumni
- **Efficient Layout**: Three-column grid with optimized space allocation
- **Standard Typography**: Professional font sizes and spacing

### 🎨 Modern UI/UX
- **Dark Theme**: Professional dark color scheme with IRIS branding
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Interactive Elements**: Hover effects, click animations, and progress bars
- **Accessibility**: ARIA labels, keyboard navigation, and focus states

### 📊 Dashboard Components
- **Statistics Cards**: Server status, credits, and CGPA display with real Figma images
- **Course Progress**: Real-time course progress with attendance tracking
- **Tabbed Interface**: Attendance and Timetable side-by-side with smooth switching
- **Direct Moodle Access**: Prominent Moodle login button for immediate access
- **Deadlines Widget**: Centrally positioned upcoming assignments and deadlines
- **Quick Links**: Easy access to institutional resources
- **Announcements**: Institutional updates and notifications

### 🔧 Interactive Features
- **Dropdown Navigation**: Hover-activated dropdown menus with smooth animations
- **Tab Functionality**: Clickable attendance/timetable tabs
- **Progress Animations**: Animated progress bars and counter effects
- **Notification System**: Toast notifications for user feedback
- **Responsive Grid**: CSS Grid and Flexbox for optimal layouts

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Vanilla JavaScript with modern features
- **Inter Font**: Google Fonts for typography
- **Responsive Design**: Mobile-first approach with progressive enhancement

## 📁 Project Structure

```
iris-dashboard/
├── index.html          # Main HTML structure
├── styles.css          # Responsive CSS styles
├── script.js           # Interactive JavaScript
├── images/             # Figma design assets
│   ├── icon-1.png      # Statistics icons
│   ├── icon-2.png      # Course icons
│   ├── icon-3.png      # Progress icons
│   ├── deadline-icon.png # Deadline indicator
│   └── ...             # Additional Figma assets
└── README.md          # Project documentation
```

## 🎯 Layout Features

### Desktop Layout (Primary Focus)
- **Three-Column Grid**: 250px sidebar + flexible center + 250px sidebar
- **Dropdown Navigation**: Hover-activated menus for academics, campus, alumni
- **Tabbed Interface**: Attendance/Timetable switching with smooth transitions
- **Direct Moodle Access**: Prominent login button above deadlines
- **Optimized Spacing**: More space allocated to central content area

### Responsive Adaptations
- **Large Screens (≥ 1200px)**: Full three-column layout with all features
- **Medium Screens (769px - 1199px)**: Adjusted spacing and typography
- **Smaller Screens (≤ 768px)**: Stacked layout with maintained functionality

## 🚀 Getting Started

1. **Clone or Download**: Get the project files
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **No Build Process**: No compilation or build steps required
4. **Local Development**: Works with any local server or file system

## 📱 Browser Support

- **Chrome**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+

## 🎨 Design System

### Colors
- **Primary**: #3B3E72 (IRIS Blue)
- **Secondary**: #616CBD (Light Blue)
- **Background**: #1E1E1E (Dark)
- **Surface**: #272727 (Card Background)
- **Text**: #FFFFFF (White)
- **Accent**: #6D5911 (Progress), #216A48 (Success)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Scaling**: Responsive font sizes from 0.625rem to 4rem

### Spacing
- **Grid Gap**: 1rem to 2rem (responsive)
- **Padding**: 0.5rem to 2rem (responsive)
- **Margins**: Consistent spacing system

## 🔧 Customization

### Adding New Course Cards
```html
<div class="course-card">
    <div class="course-header">
        <h3>Course Name</h3>
    </div>
    <div class="course-progress">
        <div class="progress-bar">
            <div class="progress-fill" style="width: 85%"></div>
        </div>
        <span class="progress-text">85%</span>
    </div>
    <p class="leave-info">You have 2 leaves left</p>
</div>
```

### Modifying Breakpoints
```css
@media (max-width: 768px) {
    /* Mobile styles */
}

@media (min-width: 769px) and (max-width: 992px) {
    /* Tablet styles */
}

@media (min-width: 1200px) {
    /* Desktop styles */
}
```

## 📈 Performance Features

- **Optimized Images**: Base64 encoded SVGs for icons
- **Efficient CSS**: Minimal CSS with optimized selectors
- **Lazy Loading**: Scroll-based animations for performance
- **Debounced Events**: Optimized resize and scroll handlers

## 🎯 Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Color Contrast**: WCAG AA compliant color combinations

## 🔮 Future Enhancements

- **Data Integration**: Connect to real student data APIs
- **Authentication**: User login and session management
- **Real-time Updates**: WebSocket integration for live data
- **Offline Support**: Service worker for offline functionality
- **PWA Features**: Installable web app capabilities

## 📞 Support

For questions or issues related to this dashboard implementation, please refer to the IRIS documentation or contact the development team.

---

**Built with ❤️ for IRIS@NITK Surathkal 2025**
