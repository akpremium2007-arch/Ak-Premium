<!-- 
دليل التعديل السريع - AK Store

هذا الملف يساعدك على تعديل المتجر بسهولة
ابدأ من هنا للتغييرات الأساسية
-->

# 🚀 دليل التعديل السريع - AK Store

## 1️⃣ تغيير رقم WhatsApp الخاص بك

### الخطوة 1: افتح ملف `script.js`

### الخطوة 2: ابحث عن هذا السطر (السطر ~90):
```javascript
const whatsappNumber = '962XXXXXXXXX'; // استبدل بالرقم الفعلي
```

### الخطوة 3: استبدل `962XXXXXXXXX` برقمك:
**مثال:** إذا كان رقمك `00962 79 1234567`
- احذف أول `00` واستبدلها بـ `962`
- النتيجة النهائية: `962791234567`

```javascript
const whatsappNumber = '962791234567'; // رقمك
```

---

## 2️⃣ تغيير معلومات التواصل

### افتح ملف `index.html` وابحث عن قسم "Contact":

```html
<!-- Contact Section -->
<section class="contact" id="contact">
    <div class="container">
        <h2 class="section-title">تواصل معنا</h2>
        <div class="contact-info">
            <p>📱 واتس اب: <a href="https://wa.me/962XXXXXXXXX" target="_blank">اضغط هنا</a></p>
            <p>📧 البريد الإلكتروني: info@akstore.com</p>
            <p>📍 العنوان: عمّان، الأردن</p>
        </div>
    </div>
</section>
```

### عدّل البيانات حسب حاجتك:

**تغيير الرقم:**
```html
<a href="https://wa.me/962791234567" target="_blank">اضغط هنا</a>
```

**تغيير البريد:**
```html
<p>📧 البريد الإلكتروني: your-email@example.com</p>
```

**تغيير العنوان:**
```html
<p>📍 العنوان: مدينتك، البلد</p>
```

---

## 3️⃣ إضافة أو تعديل المنتجات

### افتح ملف `script.js` وابحث عن قسم "منتجات المتجر"

### الهيكل الأساسي لكل منتج:
```javascript
{ 
    id: 1, 
    name: 'اسم المنتج', 
    price: 10, 
    image: 'images/product-charging-1.jpg' 
}
```

### مثال عملي - تغيير منتج:

**الأصلي:**
```javascript
{ id: 1, name: 'كابل شحن USB-C', price: 10, image: 'images/product-charging-1.jpg' }
```

**بعد التعديل:**
```javascript
{ id: 1, name: 'كابل شحن عالي الجودة', price: 15, image: 'images/product-charging-1.jpg' }
```

### إضافة منتج جديد:
```javascript
{ id: 11, name: 'اسم المنتج الجديد', price: 25, image: 'images/product-new.jpg' }
```

---

## 4️⃣ تغيير أسماء الأقسام

### في ملف `index.html` ابحث عن قسم "Categories Section":

```html
<!-- Category 1 -->
<div class="category-card" onclick="navigateToCategory('charging', 'شحن')">
    <img src="images/category-charging.jpg" alt="قسم الشحن" class="category-image">
    <div class="category-overlay">
        <h3>شحن</h3>
    </div>
</div>
```

### لتغيير الاسم:
- غيّر `'شحن'` إلى اسم جديد
- غيّر نص `<h3>` أيضاً

**مثال:**
```html
<div class="category-card" onclick="navigateToCategory('charging', 'كابلات الشحن')">
    ...
    <h3>كابلات الشحن</h3>
</div>
```

---

## 5️⃣ تغيير الألوان

### افتح ملف `styles.css`

### الألوان الرئيسية:

**اللون الأحمر (الأزرار والتفاعلات):**
```css
color: #ff6b6b;
```
غيّره إلى أي لون: مثلاً `#00bcd4` (أزرق)

**اللون الأخضر (زر الشراء):**
```css
background-color: #4CAF50;
```
غيّره إلى أي لون: مثلاً `#ff9800` (برتقالي)

**الخلفية الداكنة (الشريط العلوي):**
```css
background-color: rgba(0, 0, 0, 0.8);
```
غيّره إلى: `rgba(255, 0, 0, 0.8)` (أحمر)

---

## 6️⃣ تخصيص نصوص الموقع

### العنوان الرئيسي
في ملف `index.html`:
```html
<h1>متجرك الموثوق للشحن والالعاب</h1>
```
غيّره إلى:
```html
<h1>اسم متجرك الخاص</h1>
```

### النص الثانوي
```html
<p>أفضل الاسعار والجودة العالية</p>
```
غيّره إلى:
```html
<p>النص الذي تريده</p>
```

### عنوان الصفحة (في browser tab)
```html
<title>AK Store - متجر الشحن والالعاب</title>
```

---

## 7️⃣ أماكن الصور - التحقق من الأسماء

تأكد من أن أسماء الصور تطابق تماماً:

### الصور الأساسية:
```
images/
├── logo.png
├── background.jpg
├── banner.jpg
```

### صور الأقسام (تحتاج 5 صور):
```
images/
├── category-charging.jpg
├── category-games.jpg
├── category-accessories.jpg
├── category-subscriptions.jpg
└── category-offers.jpg
```

### صور المنتجات (تحتاج 50 صورة):
```
images/
├── product-charging-1.jpg
├── product-charging-2.jpg
...
└── product-offers-10.jpg
```

⚠️ **تحذير:** أسماء الملفات حساسة لحالة الأحرف!
- ✅ صحيح: `product-charging-1.jpg`
- ❌ خطأ: `Product-Charging-1.jpg`

---

## 8️⃣ تغيير حجم الصورة الإعلانية

في ملف `styles.css`، ابحث عن `.banner`:

```css
.banner {
    position: relative;
    width: 100%;
    height: 500px;  /* غيّر هذا الرقم */
    overflow: hidden;
    margin-top: 10px;
}
```

لتغيير الارتفاع من 500 إلى 400:
```css
.banner {
    height: 400px;  /* تم التعديل */
}
```

---

## 9️⃣ إضافة خصائص جديدة للمنتجات

**مثال: إضافة وصف المنتج**

### 1. عدّل قائمة المنتجات في `script.js`:
```javascript
{ 
    id: 1, 
    name: 'كابل شحن USB-C', 
    price: 10,
    description: 'كابل سريع وآمن',  // أضفنا هذا
    image: 'images/product-charging-1.jpg' 
}
```

### 2. عدّل دالة `createProductCard` في `script.js`:
```javascript
const productCard = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-price">${product.price} د.ا</div>
        <button class="buy-btn" onclick="buyProduct('${whatsappUrl}')">شراء الآن</button>
    </div>
`;
```

### 3. أضف CSS في `styles.css`:
```css
.product-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
}
```

---

## 🔟 حفظ التقييمات

التقييمات تُحفظ تلقائياً في متصفحك (localStorage)
- لا تحتاج لقاعدة بيانات
- تبقى حتى بعد إغلاق الموقع
- كل شخص يرى التقييمات على جهازه

---

## 📋 قائمة التحقق قبل النشر

- [ ] تم إضافة جميع الصور في مجلد `images`
- [ ] تم تحديث رقم WhatsApp
- [ ] تم تغيير معلومات التواصل
- [ ] تم التحقق من أسماء الصور (حساسة لحالة الأحرف)
- [ ] تم اختبار جميع الأزرار والروابط
- [ ] تم التحقق من المظهر على الهاتف
- [ ] تم مراجعة جميع النصوص والأسعار

---

## 🆘 حل المشاكل الشائعة

### المشكلة: الصور لا تظهر
**الحل:**
1. تأكد من أن الصور في مجلد `images`
2. تحقق من أسماء الملفات (حساسة لحالة الأحرف)
3. جرب Ctrl+F5 لتحديث المتصفح (مسح الذاكرة المؤقتة)

### المشكلة: رابط WhatsApp لا يعمل
**الحل:**
1. تأكد من رقم الهاتف صحيح
2. استخدم الصيغة: `962791234567` (بدون +)
3. جرّب الرابط مباشرة في متصفح جديد

### المشكلة: التقييمات لا تُحفظ
**الحل:**
1. تأكد أن متصفحك يسمح بـ localStorage
2. فعّل JavaScript في المتصفح
3. امسح ذاكرة المتصفح المؤقتة

---

**ملاحظة:** إذا واجهت أي صعوبة، تأكد من أن جميع الأقواس والفواصل صحيحة بعد التعديل!

✨ **استمتع بمتجرك الإلكتروني!** ✨
