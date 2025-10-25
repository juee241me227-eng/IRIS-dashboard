// IRIS Dashboard Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the dashboard
    initializeDashboard();
    
    // Add event listeners
    addEventListeners();
    
    // Initialize animations
    initializeAnimations();
});

function initializeDashboard() {
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize progress bars animation
    animateProgressBars();
    
    // Initialize stats counter animation
    animateStats();
}

function addEventListeners() {
    // Action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', handleActionButtonClick);
        button.addEventListener('mouseenter', handleButtonHover);
        button.addEventListener('mouseleave', handleButtonLeave);
    });
    
    // Moodle login button
    const moodleLoginBtn = document.querySelector('.moodle-login-btn');
    if (moodleLoginBtn) {
        moodleLoginBtn.addEventListener('click', handleMoodleLogin);
    }
    
    // Navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', handleNavClick);
    });
    
    // Dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', handleDropdownClick);
    });
    
    // Quick links
    const quickLinks = document.querySelectorAll('.quick-links a');
    quickLinks.forEach(link => {
        link.addEventListener('click', handleQuickLinkClick);
    });
    
    // Course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('click', handleCourseCardClick);
        card.addEventListener('mouseenter', handleCourseCardHover);
        card.addEventListener('mouseleave', handleCourseCardLeave);
    });
    
    // Deadline items
    const deadlineItems = document.querySelectorAll('.deadline-item');
    deadlineItems.forEach(item => {
        item.addEventListener('click', handleDeadlineClick);
    });
    
    // Responsive navigation
    setupResponsiveNavigation();
}

function handleActionButtonClick(event) {
    const button = event.target;
    const buttonText = button.textContent.toLowerCase();
    
    // Add click animation
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
    
    // Handle different button actions
    if (buttonText.includes('login')) {
        showLoginModal();
    } else if (buttonText.includes('deadlines')) {
        scrollToDeadlines();
    }
}

function handleNavClick(event) {
    event.preventDefault();
    const navItem = event.target;
    
    // Add active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    navItem.classList.add('active');
    
    // Add ripple effect
    createRippleEffect(event);
    
    // Handle navigation (placeholder for actual routing)
    console.log(`Navigating to: ${navItem.textContent}`);
}

function handleDropdownClick(event) {
    event.preventDefault();
    const dropdownItem = event.target;
    
    // Add click animation
    dropdownItem.style.transform = 'scale(0.95)';
    setTimeout(() => {
        dropdownItem.style.transform = 'scale(1)';
    }, 150);
    
    // Show notification
    showNotification(`Opening ${dropdownItem.textContent}...`);
    
    // Handle dropdown navigation (placeholder for actual routing)
    console.log(`Navigating to: ${dropdownItem.textContent}`);
}

function handleQuickLinkClick(event) {
    event.preventDefault();
    const link = event.target;
    
    // Add click animation
    link.style.transform = 'scale(0.95)';
    setTimeout(() => {
        link.style.transform = 'scale(1)';
    }, 150);
    
    // Show notification
    showNotification(`Opening ${link.textContent}...`);
}

function handleCourseCardClick(event) {
    const card = event.currentTarget;
    const courseName = card.querySelector('h3').textContent;
    
    // Add click animation
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 150);
    
    // Show course details modal (placeholder)
    showCourseDetails(courseName);
}

function handleCourseCardHover(event) {
    const card = event.currentTarget;
    const progressFill = card.querySelector('.progress-fill');
    
    // Animate progress bar on hover
    if (progressFill) {
        const width = progressFill.style.width;
        progressFill.style.transition = 'width 0.3s ease';
        progressFill.style.width = '100%';
        
        setTimeout(() => {
            progressFill.style.width = width;
        }, 1000);
    }
}

function handleCourseCardLeave(event) {
    const card = event.currentTarget;
    const progressFill = card.querySelector('.progress-fill');
    
    // Reset progress bar
    if (progressFill) {
        progressFill.style.transition = 'width 0.3s ease';
    }
}

function handleDeadlineClick(event) {
    const deadline = event.currentTarget;
    const assignmentName = deadline.querySelector('h3').textContent;
    
    // Add click animation
    deadline.style.transform = 'scale(0.98)';
    setTimeout(() => {
        deadline.style.transform = 'scale(1)';
    }, 150);
    
    // Show deadline details
    showDeadlineDetails(assignmentName);
}

function handleButtonHover(event) {
    const button = event.target;
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '0 8px 25px rgba(59, 62, 114, 0.3)';
}

function handleButtonLeave(event) {
    const button = event.target;
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = 'none';
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0%';
            bar.style.transition = 'width 1s ease-out';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }, index * 200);
    });
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((stat, index) => {
        const finalValue = stat.textContent;
        const isDecimal = finalValue.includes('.');
        const numericValue = parseFloat(finalValue);
        
        if (isNaN(numericValue)) return;
        
        stat.textContent = '0';
        stat.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            animateNumber(stat, 0, numericValue, 1000, isDecimal);
        }, index * 200);
    });
}

function animateNumber(element, start, end, duration, isDecimal) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = start + (end - start) * progress;
        element.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

function setupResponsiveNavigation() {
    // Desktop-only navigation - no mobile functionality needed
    console.log('Desktop navigation initialized');
    
    // Setup tab functionality
    setupTabFunctionality();
}

function setupTabFunctionality() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

function showLoginModal() {
    // Placeholder for login modal
    showNotification('Login functionality would be implemented here');
}

function handleMoodleLogin() {
    showNotification('Redirecting to Moodle login...');
    // In a real application, this would redirect to the Moodle login page
    // window.location.href = 'https://moodle.nitk.ac.in/login';
}

function scrollToDeadlines() {
    const deadlinesSection = document.querySelector('.deadlines-section');
    if (deadlinesSection) {
        deadlinesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function showCourseDetails(courseName) {
    showNotification(`Course details for ${courseName} would be displayed here`);
}

function showDeadlineDetails(assignmentName) {
    showNotification(`Deadline details for ${assignmentName} would be displayed here`);
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #3B3E72;
        color: #FFFFFF;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 1000;
        font-size: 1rem;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function createRippleEffect(event) {
    const button = event.target;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(97, 108, 189, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function initializeAnimations() {
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .nav-item.active {
            color: #616CBD;
            position: relative;
        }
        
        .nav-item.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            right: 0;
            height: 2px;
            background: #616CBD;
        }
    `;
    document.head.appendChild(style);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Desktop-only animations - no scroll-based effects needed
