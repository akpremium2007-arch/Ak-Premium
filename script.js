const WHATSAPP_NUMBER = '962780547443';
const THEME_STORAGE_KEY = 'ak-store-theme';
const REVIEWS_STORAGE_KEY = 'ak-store-reviews';

const products = {
    ai: {
        title: 'الذكاء الاصطناعي',
        items: [
            { id: 'ai-chatgpt-private', name: 'اشتراك شات جي بي تي بلس - شهر خاص', price: 7, image: 'chatGPT.jpg' },
            { id: 'ai-chatgpt-shared', name: 'اشتراك شات جي بي تي بلس - شهر مشترك', price: 5, image: 'chatGPT.jpg' },
            { id: 'ai-gemini-private', name: 'اشتراك جيميني برو - شهر خاص', price: 3, image: 'gemini.jpg' }
        ]
    },
    charging: {
        title: 'التصميم والتعديل',
        items: [
            { id: 'design-canva-year', name: 'كانفا برو - اشتراك سنة', price: 3, image: 'canva.jpg' },
            { id: 'design-canva-five-years', name: 'كانفا برو - اشتراك خمس سنوات', price: 5, image: 'canva.jpg' },
            { id: 'design-capcut-month', name: 'كاب كات برو - شهر خاص', price: 8, image: 'capcut.jpg' },
            { id: 'design-capcut-three-months', name: 'كاب كات برو - 3 أشهر خاص', price: 13, image: 'capcut.jpg' }
        ]
    },
    games: {
        title: 'البلس',
        items: [
            { id: 'plus-snapchat', name: 'سناب بلس - 3 أشهر', price: 8, image: 'snap.jpg' },
            { id: 'plus-youtube', name: 'يوتيوب بريميوم - اشتراك شهر', price: 9, image: 'youtube.jpg' }
        ]
    },
    accessories: {
        title: 'الأفلام والأغاني',
        items: [
            { id: 'media-shahid-private', name: 'شاهد VIP - حساب خاص شهر', price: 7, image: 'shahid.jpg' },
            { id: 'media-shahid-shared', name: 'شاهد VIP - حساب مشترك شهر', price: 5, image: 'shahid.jpg' },
            { id: 'media-netflix-private', name: 'نتفلكس - حساب خاص شهر', price: 7, image: 'netflix.jpg' },
            { id: 'media-netflix-shared', name: 'نتفلكس - حساب مشترك شهر', price: 5, image: 'netflix.jpg' }
        ]
    },
    subscriptions: {
        title: 'الشحن',
        items: [
            { id: 'charge-freefire-500', name: 'فري فاير - 500 جوهرة', price: 3.5, image: 'freefire.jpg' },
            { id: 'charge-freefire-1180', name: 'فري فاير - 1180 جوهرة', price: 7.5, image: 'freefire.jpg' },
            { id: 'charge-freefire-2400', name: 'فري فاير - 2400 جوهرة', price: 13.5, image: 'freefire.jpg' },
            { id: 'charge-freefire-monthly', name: 'فري فاير - عضوية شهرية', price: 7.5, image: 'yearff.jpg' },
            { id: 'charge-freefire-weekly', name: 'فري فاير - عضوية أسبوعية', price: 2, image: 'weekff.jpg' }
        ]
    }
};

let currentCategory = null;
let reviews = [];

function getStoredValue(key) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        return null;
    }
}

function setStoredValue(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        // The store remains usable when private browsing blocks local storage.
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

function prepareImage(image, fallbackSource) {
    image.addEventListener('error', () => {
        if (fallbackSource && !image.dataset.fallbackApplied) {
            image.dataset.fallbackApplied = 'true';
            image.src = fallbackSource;
            return;
        }

        image.classList.add('image-failed');
        image.removeAttribute('src');
    }, { once: false });
}

function prepareStaticImages() {
    document.querySelectorAll('.category-image').forEach(image => prepareImage(image, 'ai.jpg'));
    document.querySelectorAll('.logo-img').forEach(image => prepareImage(image, 'ai.jpg'));
    document.querySelectorAll('.banner-image').forEach(image => prepareImage(image, '5972309290070511051.jpg'));
}

function formatPrice(price) {
    return Number(price).toLocaleString('ar-JO', {
        minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
        maximumFractionDigits: 2
    });
}

function whatsappLinkFor(product) {
    const message = `مرحباً، أود شراء ${product.name} بسعر ${formatPrice(product.price)} د.ا`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';

    const media = document.createElement('div');
    media.className = 'product-media';

    const image = document.createElement('img');
    image.className = 'product-image';
    image.src = product.image;
    image.alt = product.name;
    image.width = 1600;
    image.height = 1600;
    image.decoding = 'async';
    image.loading = 'eager';
    prepareImage(image, 'ai.jpg');
    media.appendChild(image);

    const info = document.createElement('div');
    info.className = 'product-info';

    const name = document.createElement('h3');
    name.className = 'product-name';
    name.textContent = product.name;

    const price = document.createElement('div');
    price.className = 'product-price';
    price.textContent = `${formatPrice(product.price)} د.ا`;

    const button = document.createElement('button');
    button.className = 'buy-btn';
    button.type = 'button';
    button.textContent = 'شراء الآن';
    button.addEventListener('click', () => {
        window.open(whatsappLinkFor(product), '_blank', 'noopener,noreferrer');
    });

    info.append(name, price, button);
    card.append(media, info);
    return card;
}

function displayProducts(categoryKey) {
    const category = products[categoryKey];
    const grid = document.getElementById('products-grid');
    const title = document.getElementById('category-title');
    if (!grid || !title) return;

    grid.replaceChildren();

    if (!category) {
        const emptyState = document.createElement('p');
        emptyState.className = 'empty-state';
        emptyState.textContent = 'لا توجد منتجات متاحة في هذا القسم حالياً.';
        grid.appendChild(emptyState);
        return;
    }

    title.textContent = category.title;
    category.items.forEach(product => grid.appendChild(createProductCard(product)));
}

function navigateToCategory(categoryKey) {
    if (!products[categoryKey]) return;

    currentCategory = categoryKey;
    displayProducts(categoryKey);
    document.getElementById('categories').hidden = true;

    const productsSection = document.getElementById('products-section');
    productsSection.hidden = false;
    productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToHome(shouldScroll = true) {
    currentCategory = null;
    document.getElementById('products-section').hidden = true;
    document.getElementById('categories').hidden = false;

    if (shouldScroll) {
        document.getElementById('categories').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function loadReviews() {
    const storedReviews = getStoredValue(REVIEWS_STORAGE_KEY);
    if (!storedReviews) return;

    try {
        const parsedReviews = JSON.parse(storedReviews);
        reviews = Array.isArray(parsedReviews) ? parsedReviews.slice(0, 20) : [];
    } catch (error) {
        reviews = [];
    }
}

function renderReviews() {
    const list = document.getElementById('reviews-list');
    if (!list) return;
    list.replaceChildren();

    if (reviews.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'empty-reviews';
        empty.textContent = 'لا توجد تقييمات بعد. كن أول من يشاركنا رأيه.';
        list.appendChild(empty);
        return;
    }

    reviews.forEach(review => {
        const card = document.createElement('article');
        card.className = 'review-card';

        const header = document.createElement('div');
        header.className = 'review-card-header';

        const name = document.createElement('strong');
        name.className = 'review-customer-name';
        name.textContent = review.name;

        const stars = document.createElement('span');
        stars.className = 'review-stars';
        stars.setAttribute('aria-label', `التقييم ${review.rating} من 5`);
        stars.textContent = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        const note = document.createElement('p');
        note.className = 'review-note';
        note.textContent = review.note;

        header.append(name, stars);
        card.append(header, note);
        list.appendChild(card);
    });
}

function handleReviewSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements['customer-name'].value.trim();
    const note = form.elements['review-note'].value.trim();
    const rating = Number(form.elements.rating.value);

    if (!name || !note || rating < 1 || rating > 5) {
        showToast('يرجى إدخال الاسم والملاحظة واختيار التقييم.');
        return;
    }

    reviews.unshift({ name, note, rating });
    reviews = reviews.slice(0, 20);
    setStoredValue(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
    form.reset();
    renderReviews();
    showToast('شكراً لتقييمك!');
}

function preferredTheme() {
    const savedTheme = getStoredValue(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme, savePreference) {
    const isDark = theme === 'dark';
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';

    const toggle = document.getElementById('theme-toggle');
    const icon = toggle?.querySelector('.theme-toggle-icon');
    const text = toggle?.querySelector('.theme-toggle-text');
    const themeColor = document.querySelector('meta[name="theme-color"]');

    if (toggle) {
        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.setAttribute('aria-label', isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن');
    }
    if (icon) icon.textContent = isDark ? '☀' : '☾';
    if (text) text.textContent = isDark ? 'فاتح' : 'داكن';
    if (themeColor) themeColor.setAttribute('content', isDark ? '#0c2138' : '#1877d1');
    if (savePreference) setStoredValue(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
}

function registerServiceWorker() {
    if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;

    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').catch(() => {
            // The website remains fully usable when service workers are unavailable.
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(preferredTheme(), false);
    prepareStaticImages();

    document.querySelectorAll('.category-card[data-category]').forEach(card => {
        card.addEventListener('click', () => navigateToCategory(card.dataset.category));
    });

    document.getElementById('back-to-home')?.addEventListener('click', () => backToHome());

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme;
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
    });

    document.querySelectorAll('.nav-links a[href="#home"], .nav-links a[href="#categories"]').forEach(link => {
        link.addEventListener('click', () => {
            if (currentCategory) backToHome(false);
        });
    });

    const year = document.getElementById('current-year');
    if (year) year.textContent = new Date().getFullYear();

    registerServiceWorker();
});
