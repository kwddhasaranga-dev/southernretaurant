/* ============================================
   SOUTHERN RESTAURANT - AMBALANTOTA
   Premium Restaurant Website JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // LOADING SCREEN
    // ==========================================
    const loadingScreen = document.getElementById('loadingScreen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            
            // Show notice popup 1 second after loading screen hides
            setTimeout(() => {
                showNoticePopup();
            }, 1000);
        }, 3000);
    });

    // ==========================================
    // NOTICE POPUP
    // ==========================================
    function showNoticePopup() {
        const popup = document.getElementById('noticePopup');
        const closeBtn = document.getElementById('noticeClose');
        
        if (!popup || !closeBtn) {
            return;
        }
        
        // Show popup without session storage check (show every time)
        popup.classList.add('show');
        popup.style.display = 'flex';
        
        // Close popup function
        const closePopup = () => {
            popup.classList.remove('show');
            popup.style.display = 'none';
        };
        
        // Close on button click
        closeBtn.addEventListener('click', closePopup);
        
        // Close on backdrop click
        popup.addEventListener('click', (e) => {
            if (e.target === popup || e.target.classList.contains('notice-backdrop')) {
                closePopup();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.classList.contains('show')) {
                closePopup();
            }
        });
    }

    // ==========================================
    // DATA
    // ==========================================
    
    // Menu Items - Comprehensive Restaurant Menu
    const menuItems = [
        // Rice & Curry - Authentic Sri Lankan
        { id: 1, name: "Vegetable Rice & Curry", category: "rice-curry", price: "000", rating: 4, desc: "Traditionally spiced rice with 5 vegetable sides and authentic Sri Lankan curry.", img: "images/vegetable%20rice%20%26%20curry.jpg" },
        { id: 2, name: "Egg Rice & Curry", category: "rice-curry", price: "000", rating: 4, desc: "Aromatic rice with fried eggs and savory curry gravy.", img: "images/egg%20rice%20%26%20curry.jpg" },
        { id: 3, name: "Fish Rice & Curry", category: "rice-curry", price: "000", rating: 5, desc: "Fresh fish curry served with fragrant basmati rice.", img: "images/fish%20rice%20%26%20curry.jpg" },
        { id: 4, name: "Chicken Rice & Curry", category: "rice-curry", price: "000", rating: 5, desc: "Tender chicken in spiced curry gravy with rice and vegetable sides.", img: "images/chicken%20rice%20%26%20curry.jpg" },

        // Fried Rice
        { id: 5, name: "Vegetable Fried Rice", category: "fried-rice", price: "000", rating: 4, desc: "Stir-fried rice with colorful seasonal vegetables and aromatic spices.", img: "images/vegetable%20fried%20rice.jpg" },
        { id: 6, name: "Egg Fried Rice", category: "fried-rice", price: "000", rating: 4, desc: "Classic fried rice with scrambled eggs and spring onions.", img: "images/egg%20fried%20rice.jpg" },
        { id: 7, name: "Chicken Fried Rice", category: "fried-rice", price: "000", rating: 5, desc: "Tender chicken pieces stir-fried with rice and fresh vegetables.", img: "images/chicken%20fried%20rice.jpg" },
        { id: 8, name: "Seafood Fried Rice", category: "fried-rice", price: "000", rating: 5, desc: "Premium fried rice with shrimp, squid, and fresh seafood.", img: "images/seafood%20fried%20rice.jpg" },
        { id: 9, name: "Mixed Fried Rice", category: "fried-rice", price: "000", rating: 5, desc: "Combination of chicken, seafood, and vegetables with fried rice.", img: "images/mixed%20fried%20rice.jpg" },

        // Kottu
        { id: 10, name: "Vegetable Kottu", category: "kottu", price: "000", rating: 4, desc: "Chopped roti stir-fried with fresh vegetables and aromatic spices.", img: "images/vegetable%20kottu.jpg" },
        { id: 11, name: "Egg Kottu", category: "kottu", price: "000", rating: 4, desc: "Chopped roti with fried eggs and onions, served hot.", img: "images/egg%20kottu.jpg" },
        { id: 12, name: "Chicken Kottu", category: "kottu", price: "000", rating: 5, desc: "Sri Lanka's favorite chopped roti with tender chicken pieces.", img: "images/chicken%20kottu.jpg" },
        { id: 13, name: "Seafood Kottu", category: "kottu", price: "000", rating: 5, desc: "Premium kottu with fresh shrimp, squid, and fish.", img: "images/seafood%20kottu.jpg" },
        { id: 14, name: "Mixed Kottu", category: "kottu", price: "000", rating: 5, desc: "Combination of chicken, seafood, and vegetables with chopped roti.", img: "images/mixed%20kottu.jpg" },
        { id: 15, name: "Cheese Kottu", category: "kottu", price: "000", rating: 4, desc: "Chopped roti with melted cheese, chicken, and spiced vegetables.", img: "images/cheese%20kottu.jpg" },

        // Noodles
        { id: 16, name: "Vegetable Noodles", category: "noodles", price: "000", rating: 4, desc: "Stir-fried noodles with seasonal vegetables and aromatic sauce.", img: "images/vegetable noodles.jpg" },
        { id: 17, name: "Egg Noodles", category: "noodles", price: "000", rating: 4, desc: "Soft noodles with fried eggs and spring onions.", img: "images/egg noodels.jpg" },
        { id: 18, name: "Chicken Noodles", category: "noodles", price: "000", rating: 5, desc: "Tender chicken stir-fried with noodles and fresh vegetables.", img: "images/chiken noodels.jpg" },
        { id: 19, name: "Seafood Noodles", category: "noodles", price: "000", rating: 5, desc: "Premium noodles with shrimp, squid, and fresh seafood.", img: "images/seafood noodles.jpg" },
        { id: 20, name: "Mixed Noodles", category: "noodles", price: "000", rating: 5, desc: "Combination of chicken and seafood stir-fried with noodles.", img: "images/miixed noodels.jpg" },

        // Biryani
        { id: 21, name: "Chicken Biryani", category: "biryani", price: "000", rating: 5, desc: "Fragrant basmati rice layered with tender spiced chicken and aromatics.", img: "images/chicken%20biryani.jpg" },
        { id: 22, name: "Seafood Biryani", category: "biryani", price: "000", rating: 5, desc: "Premium biryani with shrimp, squid, and fresh seafood.", img: "images/chicken%20biryani.jpg" },

        // Nasigoreng
        { id: 23, name: "Chicken Nasigoreng", category: "nasigoreng", price: "000", rating: 5, desc: "Indonesian-style fried rice with chicken and spiced tomato paste.", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80" },
        { id: 24, name: "Seafood Nasigoreng", category: "nasigoreng", price: "000", rating: 5, desc: "Premium nasigoreng with fresh shrimp, squid, and seafood.", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80" },
        { id: 25, name: "Mixed Nasigoreng", category: "nasigoreng", price: "000", rating: 5, desc: "Combination of chicken and seafood nasigoreng.", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80" },

        // Devilled & Sides
        { id: 26, name: "Devilled Chicken", category: "devilled", price: "000", rating: 5, desc: "Spicy devilled chicken pieces with crispy exterior.", img: "images/Devilled chicken.jpg" },
        { id: 27, name: "Devilled Fish", category: "devilled", price: "000", rating: 5, desc: "Fresh fish prepared devilled style with spices.", img: "images/Devilled fish.jpg" },
        { id: 28, name: "Devilled Cuttlefish", category: "devilled", price: "000", rating: 5, desc: "Tender cuttlefish with devilled spice coating.", img: "images/Devilled Cuttlefish.jpg" },
        { id: 29, name: "Devilled Prawns", category: "devilled", price: "000", rating: 5, desc: "Large prawns prepared devilled with heat and flavor.", img: "images/Devilled Prawns.jpg" },
        { id: 30, name: "Hot Butter Cuttlefish", category: "devilled", price: "000", rating: 5, desc: "Cuttlefish in creamy hot butter sauce with spices.", img: "images/Hot Butter Cuttlefish.jpg" },

        // Appetizers / Short Eats
        { id: 35, name: "French Fries", category: "appetizers", price: "000", rating: 4, desc: "Golden crispy French fries with seasoning.", img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80" },
        { id: 36, name: "Fish Cutlets", category: "appetizers", price: "000", rating: 5, desc: "Crispy fish cutlets with breadcrumb coating.", img: "https://images.unsplash.com/photo-1514516882924-2a51a0f8c8df?auto=format&fit=crop&w=800&q=80" },
        { id: 37, name: "Vegetable Spring Rolls", category: "appetizers", price: "000", rating: 4, desc: "Crispy spring rolls filled with fresh vegetables.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" },

        // Desserts
        { id: 38, name: "Watalappan", category: "desserts", price: "000", rating: 5, desc: "Traditional Sri Lankan sweet pudding with jaggery.", img: "https://images.unsplash.com/photo-1512058564366-c9e1da9b9b88?auto=format&fit=crop&w=800&q=80" },
        { id: 39, name: "Fruit Salad with Ice Cream", category: "desserts", price: "000", rating: 4, desc: "Fresh seasonal fruits with creamy ice cream.", img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80" },
        { id: 40, name: "Curd & Honey", category: "desserts", price: "000", rating: 4, desc: "Creamy curd with aromatic honey drizzle.", img: "https://images.unsplash.com/photo-1505253216948-5d094abc6eb4?auto=format&fit=crop&w=800&q=80" },

        // Beverages
        { id: 41, name: "Fresh Mango Juice", category: "beverages", price: "000", rating: 5, desc: "Freshly squeezed mango juice with natural sweetness.", img: "https://images.unsplash.com/photo-1551024736-9bccde9c2bd9?auto=format&fit=crop&w=800&q=80" },
        { id: 42, name: "Fresh Papaya Juice", category: "beverages", price: "000", rating: 4, desc: "Fresh papaya juice with tropical flavor.", img: "https://images.unsplash.com/photo-1551024736-9bccde9c2bd9?auto=format&fit=crop&w=800&q=80" },
        { id: 43, name: "Fresh Lime Juice", category: "beverages", price: "000", rating: 4, desc: "Refreshing fresh lime juice with minimal sugar.", img: "https://images.unsplash.com/photo-1510626176961-4b6a7dc1f7e4?auto=format&fit=crop&w=800&q=80" },
        { id: 44, name: "Milkshakes", category: "beverages", price: "000", rating: 4, desc: "Creamy milkshakes in various flavors.", img: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80" },
        { id: 45, name: "Tea/Coffee", category: "beverages", price: "000", rating: 4, desc: "Hot tea or coffee prepared the Sri Lankan way.", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" },
        { id: 46, name: "Soft Drinks", category: "beverages", price: "000", rating: 3, desc: "Selection of cold soft drinks and sodas.", img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80" }
    ];

   const specialDishes = [
    { name: "Chicken Biryani", desc: "Chef's special fragrant spiced rice.", price: "000", img: "images/chicken biryani.jpg" },
    { name: "Special Seafood Kottu", desc: "Freshly made with morning catch.", price: "000", img: "images/seafood kottu.jpg" },
    { name: "Vegetable Noodles", desc: "Healthy and delicious garden fresh.", price: "000", img: "images/vegetable noodles.jpg" }
];

const galleryItems = [
    { type: "tall", icon: "fa-utensils", label: "Delicious Meals" },
    { type: "wide", icon: "fa-glass-cheers", label: "Our Ambiance" },
    { type: "square", icon: "fa-shopping-bag", label: "Take Away Service" },
    { type: "tall", icon: "fa-smile", label: "Happy Guests" },
    { type: "wide", icon: "fa-fire", label: "Live Cooking" },
    { type: "square", icon: "fa-heart", label: "Made with Love" }
];

    // Testimonials
    const testimonials = [
        { name: "Rajith Fernando", role: "Local Guide", text: "The best Kottu in Ambalantota! Authentic flavors and generous portions. A must-visit for anyone traveling along the Southern coast.", rating: 5 },
        { name: "Sarah Mitchell", role: "Tourist from UK", text: "We stumbled upon this gem and were blown away by the seafood platter. The crab curry is absolutely divine. Lovely staff too!", rating: 5 },
        { name: "Amara Silva", role: "Food Blogger", text: "Southern Restaurant captures the true essence of Southern Sri Lankan cuisine. The ambiance, the food, the service - all top notch.", rating: 5 },
        { name: "Mohamed Ali", role: "Regular Customer", text: "I've been a regular here for years. Consistent quality and taste. Their chicken biryani is my weekend staple.", rating: 4 }
    ];

    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==========================================
    // MOBILE MENU
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);
    mobileOverlay.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) toggleMenu();
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // ==========================================
    // TYPEWRITER EFFECT
    // ==========================================
    const phrases = ["Fresh Southern Taste", "Dine In", "Delivery", "Takeaway"];
    const phraseIcons = {
        "Fresh Southern Taste": "fa-utensils",
        "Dine In": "fa-chair",
        "Delivery": "fa-motorcycle",
        "Takeaway": "fa-shopping-bag"
    };
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById('typewriterText');
    const typewriterIcon = document.getElementById('typewriterIcon');
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    function updateTypewriterIcon(phrase) {
        const iconClass = phraseIcons[phrase] || "fa-utensils";
        typewriterIcon.className = "typewriter-icon fas " + iconClass;
    }

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentPhrase.length) {
            speed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            updateTypewriterIcon(phrases[phraseIndex]);
            speed = 500;
        }

        setTimeout(typeWriter, speed);
    }
    
    // Initialize icon and start typewriter after load
    updateTypewriterIcon(phrases[0]);
    setTimeout(typeWriter, 1000);

    // ==========================================
    // LOGO TYPEWRITER EFFECT
    // ==========================================
    const logoText = "RESTAURANT";
    let logoCharIndex = 0;
    const logoElement = document.getElementById('restaurantText');
    
    function typeLogo() {
        if (logoCharIndex < logoText.length) {
            logoElement.textContent = logoText.substring(0, logoCharIndex + 1);
            logoCharIndex++;
            setTimeout(typeLogo, 150);
        }
    }
    
    // Start logo typewriter after page load
    setTimeout(typeLogo, 2000);

    // ==========================================
    // RIPPLE BUTTON EFFECT
    // ==========================================
    document.querySelectorAll('.ripple-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ==========================================
    // SCROLL REVEAL (Intersection Observer)
    // ==========================================
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ==========================================
    // IMAGE REVEAL ANIMATION
    // ==========================================
    const imageFrames = document.querySelectorAll('.image-frame');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, 300);
                imageObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    imageFrames.forEach(frame => imageObserver.observe(frame));

    // ==========================================
    // ANIMATED COUNTERS
    // ==========================================
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    function animateCounter(element, target) {
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(current));
            }
        }, 16);
    }

    function formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'k';
        }
        return num;
    }

    // අකුරු ඇනිමේට් කිරීමේ ශ්‍රිතය (Z to A)
    function animateLetters(element) {
        const letters = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
        const target = element.getAttribute('data-target');
        let i = 0;
        
        const letterTimer = setInterval(() => {
            element.innerText = letters[i];
            if (letters[i] === target) {
                clearInterval(letterTimer);
            }
            i++;
            // අකුරු වේගයෙන් මාරු වීමට කාලය 80ms ලෙස සකසා ඇත
        }, 80);
    }

    // Intersection Observer එකට අකුරු ඇනිමේෂන් එක සම්බන්ධ කිරීම
    const letterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateLetters(entry.target);
                letterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // letter-animate class එක ඇති අයිතම නිරීක්ෂණය කිරීම
    document.querySelectorAll('.letter-animate').forEach(el => letterObserver.observe(el));

    // ==========================================
    // MENU RENDERING & FILTERING WITH AUTO-ROTATION
    // ==========================================
    const menuGrid = document.getElementById('menuGrid');
    const categoryBtns = document.querySelectorAll('.category-btn');
    let menuRotationInterval = null;
    let currentCategory = 'all';

    // Define categories that have visible filter buttons in the UI
    const activeCategories = ['rice-curry', 'fried-rice', 'kottu', 'noodles', 'biryani', 'nasigoreng', 'devilled'];

    // Get unique categories for variety picking (only from active categories)
    function getUniqueCategoriesForRotation() {
        const categories = [...new Set(menuItems.map(item => item.category))];
        return categories.filter(category => activeCategories.includes(category));
    }

    // Pick 5 random items with variety (one from each of 5 different active categories if possible)
    function getRandomMenuSelection() {
        // First filter menuItems to only include items from active categories
        const activeMenuItems = menuItems.filter(item => activeCategories.includes(item.category));
        
        const allCategories = getUniqueCategoriesForRotation();
        const selected = [];
        const usedCategories = new Set();

        // Try to pick one item from 5 different categories
        const targetCategories = Math.min(5, allCategories.length);
        
        for (let i = 0; i < targetCategories; i++) {
            let category;
            let attempts = 0;
            
            // Pick a unique category
            do {
                category = allCategories[Math.floor(Math.random() * allCategories.length)];
                attempts++;
            } while (usedCategories.has(category) && attempts < 10);
            
            if (!usedCategories.has(category)) {
                usedCategories.add(category);
                
                // Get all items in this category (from active items only)
                const itemsInCategory = activeMenuItems.filter(item => item.category === category);
                
                // Pick a random item from this category
                if (itemsInCategory.length > 0) {
                    const randomItem = itemsInCategory[Math.floor(Math.random() * itemsInCategory.length)];
                    selected.push(randomItem);
                }
            }
        }

        // If we don't have 5 items yet, fill with random items from active categories
        while (selected.length < 5) {
            const randomItem = activeMenuItems[Math.floor(Math.random() * activeMenuItems.length)];
            if (!selected.some(item => item.id === randomItem.id)) {
                selected.push(randomItem);
            }
        }

        return selected;
    }

    // Render menu with fade animation
    function renderMenu(category = 'all') {
        const filtered = category === 'all' ? getRandomMenuSelection() : menuItems.filter(item => item.category === category);
        
        // Fade out current items
        const currentCards = menuGrid.querySelectorAll('.menu-card');
        currentCards.forEach(card => {
            card.classList.remove('show');
        });

        // After fade out, render new items
        setTimeout(() => {
            menuGrid.innerHTML = '';
            
            filtered.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'menu-card';
                
                // Map categories to icons for menu display
                const categoryIconMap = {
                    'rice-curry': 'fa-bowl-rice',
                    'fried-rice': 'fa-fire',
                    'kottu': 'fa-blade',
                    'noodles': 'fa-noodles',
                    'biryani': 'fa-crown',
                    'nasigoreng': 'fa-wok',
                    'devilled': 'fa-pepper-hot',
                    'appetizers': 'fa-apple-alt',
                    'desserts': 'fa-ice-cream',
                    'beverages': 'fa-cup'
                };
                
                const icon = categoryIconMap[item.category] || 'fa-utensils';
                const imageHtml = item.img ? 
                    `<img src="${item.img}" alt="${item.name}" loading="lazy" style="width:100%; height:100%; object-fit:cover;">` :
                    `<i class="fas ${icon}" style="font-size: 3rem; color: var(--gold);"></i>`;
                
                card.innerHTML = `
                    <div class="menu-image">
                        ${imageHtml}
                        <span class="price-badge">Rs. ${item.price}</span>
                    </div>
                    <div class="menu-info">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                        <div class="menu-footer">
                            <div class="rating">${generateStars(item.rating)}</div>
                            <button class="add-to-cart"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                `;
                menuGrid.appendChild(card);
                
                // Stagger the fade-in animation
                setTimeout(() => card.classList.add('show'), 50 * (index + 1));
            });
        }, 300);
    }

    // Start auto-rotation for 'all' category
    function startMenuRotation() {
        if (menuRotationInterval) {
            clearInterval(menuRotationInterval);
        }
        
        menuRotationInterval = setInterval(() => {
            renderMenu('all');
        }, 10000); // Increased from 6000ms to 10000ms for better readability
    }

    // Stop rotation when user selects a category
    function stopMenuRotation() {
        if (menuRotationInterval) {
            clearInterval(menuRotationInterval);
            menuRotationInterval = null;
        }
    }

    function generateStars(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += `<i class="fas fa-star${i < rating ? '' : ' far'}"></i>`;
        }
        return stars;
    }

    // Category button clicks
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentCategory = btn.dataset.category;
            
            if (currentCategory === 'all') {
                renderMenu('all');
                startMenuRotation();
            } else {
                stopMenuRotation();
                renderMenu(currentCategory);
            }
        });
    });

    // Initial render with auto-rotation
    renderMenu('all');
    startMenuRotation();

    // ==========================================
    // SPECIAL DISHES CAROUSEL
    // ==========================================
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselDots = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    
    let currentSlide = 0;
    const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3;
    const totalSlides = specialDishes.length;

    // Render slides (duplicate for infinite effect)
    function renderCarousel() {
        // Render original + cloned slides for seamless loop
        const allSlides = [...specialDishes, ...specialDishes];
        
        carouselTrack.innerHTML = allSlides.map(dish => `
            <div class="carousel-slide">
                <div class="slide-image">
                    <img src="${dish.img}" alt="${dish.name}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">
                </div>
                <div class="slide-content">
                    <h3>${dish.name}</h3>
                    <p>${dish.desc}</p>
                    <div class="price">Rs. ${dish.price}</div>
                </div>
            </div>
        `).join('');
        
        // Create dots
        carouselDots.innerHTML = specialDishes.map((_, i) => `
            <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></button>
        `).join('');
    }

    renderCarousel();

    function goToSlide(index) {
        currentSlide = index;
        const slideWidth = carouselTrack.children[0].offsetWidth + 30; // gap
        carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        
        // Update dots
        document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === (currentSlide % totalSlides));
        });
    }

    function nextSlide() {
        currentSlide++;
        goToSlide(currentSlide);
        
        // Reset to beginning seamlessly
        if (currentSlide >= totalSlides) {
            setTimeout(() => {
                carouselTrack.style.transition = 'none';
                currentSlide = 0;
                goToSlide(currentSlide);
                setTimeout(() => {
                    carouselTrack.style.transition = '';
                }, 50);
            }, 500);
        }
    }

    function prevSlide() {
        if (currentSlide <= 0) {
            carouselTrack.style.transition = 'none';
            currentSlide = totalSlides;
            goToSlide(currentSlide);
            setTimeout(() => {
                carouselTrack.style.transition = '';
                currentSlide--;
                goToSlide(currentSlide);
            }, 50);
        } else {
            currentSlide--;
            goToSlide(currentSlide);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    carouselDots.addEventListener('click', (e) => {
        if (e.target.classList.contains('carousel-dot')) {
            goToSlide(parseInt(e.target.dataset.index));
        }
    });

    // Auto-slide
    let autoSlide = setInterval(nextSlide, 4000);
    
    carouselTrack.addEventListener('mouseenter', () => clearInterval(autoSlide));
    carouselTrack.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 4000);
    });

    // ==========================================
    // GALLERY MASONRY & LIGHTBOX
    // ==========================================
    const galleryMasonry = document.getElementById('galleryMasonry');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentGalleryIndex = 0;

    // Render gallery
    galleryItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `gallery-item ${item.type}`;
        div.innerHTML = `
            <div class="gallery-placeholder">
                <i class="fas ${item.icon}"></i>
                <span>${item.label}</span>
            </div>
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;
        div.addEventListener('click', () => openLightbox(index));
        galleryMasonry.appendChild(div);
    });

    function openLightbox(index) {
        currentGalleryIndex = index;
        // Using placeholder colored images for demo
        lightboxImg.src = `https://placehold.co/800x600/B33A2E/FFFFFF?text=${encodeURIComponent(galleryItems[index].label)}`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function changeLightboxImage(direction) {
        currentGalleryIndex = (currentGalleryIndex + direction + galleryItems.length) % galleryItems.length;
        lightboxImg.src = `https://placehold.co/800x600/B33A2E/FFFFFF?text=${encodeURIComponent(galleryItems[currentGalleryIndex].label)}`;
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); changeLightboxImage(-1); });
    lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); changeLightboxImage(1); });
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') changeLightboxImage(-1);
        if (e.key === 'ArrowRight') changeLightboxImage(1);
    });

    // ==========================================
    // TESTIMONIALS SLIDER
    // ==========================================
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialDots = document.getElementById('testimonialDots');
    let currentTestimonial = 0;

    // Render testimonials
    testimonialTrack.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-inner">
                <div class="stars">${generateStars(t.rating)}</div>
                <p class="testimonial-text">"${t.text}"</p>
                <div class="testimonial-author">
                    <h4>${t.name}</h4>
                    <span>${t.role}</span>
                </div>
            </div>
        </div>
    `).join('');

    testimonialDots.innerHTML = testimonials.map((_, i) => `
        <button class="testimonial-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></button>
    `).join('');

    function goToTestimonial(index) {
        currentTestimonial = index;
        testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
        
        document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    testimonialDots.addEventListener('click', (e) => {
        if (e.target.classList.contains('testimonial-dot')) {
            goToTestimonial(parseInt(e.target.dataset.index));
        }
    });

    // Auto-slide testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        goToTestimonial(currentTestimonial);
    }, 5000);

    // ==========================================
    // CURSOR GLOW EFFECT
    // ==========================================
    const cursorGlow = document.getElementById('cursorGlow');
    
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    // ==========================================
    // BACK TO TOP BUTTON
    // ==========================================
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==========================================
    // PARALLAX EFFECT (Subtle)
    // ==========================================
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('.float-icon');
        
        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // ACTIVE NAV LINK ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

}); // End DOMContentLoaded
