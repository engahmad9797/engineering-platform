// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Dashboard refresh
function refreshDashboard() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        stat.style.transform = 'scale(0.8)';
        stat.style.opacity = '0.5';
        setTimeout(() => {
            stat.style.transform = 'scale(1)';
            stat.style.opacity = '1';
        }, 300);
    });
}

// Project filtering
function filterProjects(status) {
    const buttons = document.querySelectorAll('.filter-chip');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (status === 'all' || project.dataset.status === status) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Calculator tabs
function switchTab(tabName) {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// Notification system
function toggleNotifications() {
    alert('لوحة الإشعارات - سيتم تطويرها قريباً');
}

// User menu
function toggleUserMenu() {
    alert('قائمة المستخدم - سيتم تطويرها قريباً');
}

// Cost calculator form
const costCalculatorForm = document.getElementById('costCalculatorForm');
if (costCalculatorForm) {
    costCalculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('جاري حساب التكلفة...');
    });
}

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header && window.scrollY > 100) {
        header.style.padding = '0.5rem 0';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else if (header) {
        header.style.padding = '1rem 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
