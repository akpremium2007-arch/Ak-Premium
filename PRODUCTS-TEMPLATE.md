<!-- 
نموذج منتجات للنسخ والتعديل
استخدم هذا الملف كمرجع لإضافة أو تعديل المنتجات
-->

# 📦 نماذج المنتجات - AK Store

## كيفية استخدام هذا الملف

هذا الملف يحتوي على نماذج جاهزة للمنتجات من كل قسم.
استخدم هذه النماذج للنسخ والتعديل حسب احتياجاتك.

---

## 🔄 خطوات التعديل

### الخطوة 1: افتح `script.js`
### الخطوة 2: ابحث عن القسم الذي تريد التعديل عليه
### الخطوة 3: انسخ النموذج وعدّله
### الخطوة 4: احفظ الملف واختبر الموقع

---

## 📋 نماذج المنتجات

### النموذج العام (قالب)
```javascript
{
    id: [رقم فريد],
    name: '[اسم المنتج]',
    price: [السعر],
    image: 'images/[اسم الصورة].jpg'
}
```

---

## 🔌 قسم الشحن (Charging)

### المنتج الأول - النموذج:
```javascript
{ id: 1, name: 'كابل شحن USB-C', price: 10, image: 'images/product-charging-1.jpg' }
```

### مثال على التعديل:
```javascript
{ id: 1, name: 'كابل شحن USB-C سريع 3 متر', price: 15, image: 'images/product-charging-1.jpg' }
```

### منتجات الشحن المتاحة:
```javascript
charging: {
    title: 'شحن',
    items: [
        { id: 1, name: 'كابل شحن USB-C', price: 10, image: 'images/product-charging-1.jpg' },
        { id: 2, name: 'شاحن سريع 65W', price: 25, image: 'images/product-charging-2.jpg' },
        { id: 3, name: 'بطارية خارجية 20000mAh', price: 35, image: 'images/product-charging-3.jpg' },
        { id: 4, name: 'كابل Lightning', price: 8, image: 'images/product-charging-4.jpg' },
        { id: 5, name: 'شاحن لاسلكي', price: 22, image: 'images/product-charging-5.jpg' },
        { id: 6, name: 'مشترك USB 3.0', price: 15, image: 'images/product-charging-6.jpg' },
        { id: 7, name: 'كابل Micro USB', price: 5, image: 'images/product-charging-7.jpg' },
        { id: 8, name: 'شاحن الجدار متعدد المنافذ', price: 30, image: 'images/product-charging-8.jpg' },
        { id: 9, name: 'بطارية ليثيوم 3000mAh', price: 18, image: 'images/product-charging-9.jpg' },
        { id: 10, name: 'محطة شحن سطح المكتب', price: 40, image: 'images/product-charging-10.jpg' }
    ]
}
```

---

## 🕹️ قسم الألعاب (Games)

### النموذج الأول:
```javascript
{ id: 11, name: 'لعبة أكشن قتالية', price: 50, image: 'images/product-games-1.jpg' }
```

### مثال على التعديل:
```javascript
{ id: 11, name: 'God of War Ragnarök - لعبة أكشن', price: 60, image: 'images/product-games-1.jpg' }
```

### كل منتجات الألعاب:
```javascript
games: {
    title: 'الألعاب',
    items: [
        { id: 11, name: 'لعبة أكشن قتالية', price: 50, image: 'images/product-games-1.jpg' },
        { id: 12, name: 'لعبة مغامرة ضخمة', price: 60, image: 'images/product-games-2.jpg' },
        { id: 13, name: 'لعبة سباق سيارات', price: 45, image: 'images/product-games-3.jpg' },
        { id: 14, name: 'لعبة ألغاز وتفكير', price: 20, image: 'images/product-games-4.jpg' },
        { id: 15, name: 'لعبة كرة قدم', price: 55, image: 'images/product-games-5.jpg' },
        { id: 16, name: 'لعبة أدوار ودراما', price: 65, image: 'images/product-games-6.jpg' },
        { id: 17, name: 'لعبة منصة جماعية', price: 30, image: 'images/product-games-7.jpg' },
        { id: 18, name: 'لعبة بقاء وحياة', price: 40, image: 'images/product-games-8.jpg' },
        { id: 19, name: 'لعبة رعاية حيوانات', price: 15, image: 'images/product-games-9.jpg' },
        { id: 20, name: 'لعبة رمية ومرح', price: 25, image: 'images/product-games-10.jpg' }
    ]
}
```

---

## 🎧 قسم الاكسسوارات (Accessories)

### النموذج الأول:
```javascript
{ id: 21, name: 'حافظة هاتف جلدية', price: 20, image: 'images/product-accessories-1.jpg' }
```

### مثال على التعديل:
```javascript
{ id: 21, name: 'حافظة هاتف جلدية أصلية عالية الجودة', price: 30, image: 'images/product-accessories-1.jpg' }
```

### كل منتجات الاكسسوارات:
```javascript
accessories: {
    title: 'الاكسسوارات',
    items: [
        { id: 21, name: 'حافظة هاتف جلدية', price: 20, image: 'images/product-accessories-1.jpg' },
        { id: 22, name: 'حامل هاتف سيارة', price: 15, image: 'images/product-accessories-2.jpg' },
        { id: 23, name: 'سماعة أذن لاسلكية', price: 50, image: 'images/product-accessories-3.jpg' },
        { id: 24, name: 'واقي شاشة زجاجي', price: 8, image: 'images/product-accessories-4.jpg' },
        { id: 25, name: 'شريط وحبل للهاتف', price: 5, image: 'images/product-accessories-5.jpg' },
        { id: 26, name: 'حقيبة لابتوب', price: 45, image: 'images/product-accessories-6.jpg' },
        { id: 27, name: 'لوحة مفاتيح بلوتوث', price: 60, image: 'images/product-accessories-7.jpg' },
        { id: 28, name: 'ماوس بلوتوث', price: 30, image: 'images/product-accessories-8.jpg' },
        { id: 29, name: 'حامل كاميرا ويب', price: 12, image: 'images/product-accessories-9.jpg' },
        { id: 30, name: 'كابل HDMI', price: 10, image: 'images/product-accessories-10.jpg' }
    ]
}
```

---

## 📱 قسم الاشتراكات (Subscriptions)

### النموذج الأول:
```javascript
{ id: 31, name: 'اشتراك Netflix شهري', price: 15, image: 'images/product-subscriptions-1.jpg' }
```

### مثال على التعديل:
```javascript
{ id: 31, name: 'اشتراك Netflix شهري - Premium 4K', price: 20, image: 'images/product-subscriptions-1.jpg' }
```

### كل منتجات الاشتراكات:
```javascript
subscriptions: {
    title: 'الاشتراكات',
    items: [
        { id: 31, name: 'اشتراك Netflix شهري', price: 15, image: 'images/product-subscriptions-1.jpg' },
        { id: 32, name: 'اشتراك Spotify شهري', price: 12, image: 'images/product-subscriptions-2.jpg' },
        { id: 33, name: 'اشتراك Disney+ سنوي', price: 80, image: 'images/product-subscriptions-3.jpg' },
        { id: 34, name: 'اشتراك Xbox Game Pass', price: 20, image: 'images/product-subscriptions-4.jpg' },
        { id: 35, name: 'اشتراك PlayStation Plus', price: 18, image: 'images/product-subscriptions-5.jpg' },
        { id: 36, name: 'اشتراك Amazon Prime', price: 14, image: 'images/product-subscriptions-6.jpg' },
        { id: 37, name: 'اشتراك Adobe Cloud', price: 70, image: 'images/product-subscriptions-7.jpg' },
        { id: 38, name: 'اشتراك Microsoft 365', price: 50, image: 'images/product-subscriptions-8.jpg' },
        { id: 39, name: 'اشتراك VPN سنوي', price: 40, image: 'images/product-subscriptions-9.jpg' },
        { id: 40, name: 'اشتراك خادم سحابي', price: 30, image: 'images/product-subscriptions-10.jpg' }
    ]
}
```

---

## 🎁 قسم العروض (Offers)

### النموذج الأول:
```javascript
{ id: 41, name: 'عرض باقة شحن كاملة', price: 70, image: 'images/product-offers-1.jpg' }
```

### مثال على التعديل:
```javascript
{ id: 41, name: 'عرض باقة شحن كاملة - توفير 30%', price: 50, image: 'images/product-offers-1.jpg' }
```

### كل منتجات العروض:
```javascript
offers: {
    title: 'العروض',
    items: [
        { id: 41, name: 'عرض باقة شحن كاملة', price: 70, image: 'images/product-offers-1.jpg' },
        { id: 42, name: 'عرض لعبتين مع خصم', price: 90, image: 'images/product-offers-2.jpg' },
        { id: 43, name: 'عرض اشتراكات متعددة', price: 100, image: 'images/product-offers-3.jpg' },
        { id: 44, name: 'عرض أكسسوارات بحزمة', price: 120, image: 'images/product-offers-4.jpg' },
        { id: 45, name: 'عرض فلاش ساعة محدودة', price: 50, image: 'images/product-offers-5.jpg' },
        { id: 46, name: 'عرض متجر الكل', price: 150, image: 'images/product-offers-6.jpg' },
        { id: 47, name: 'عرض العملاء الجدد', price: 30, image: 'images/product-offers-7.jpg' },
        { id: 48, name: 'عرض الشراء الثاني بخصم', price: 0, image: 'images/product-offers-8.jpg' },
        { id: 49, name: 'عرض كود خصم خاص', price: 0, image: 'images/product-offers-9.jpg' },
        { id: 50, name: 'عرض اليوم الأخير', price: 85, image: 'images/product-offers-10.jpg' }
    ]
}
```

---

## 🔧 نصائح لتعديل المنتجات

### تغيير السعر:
```javascript
// قبل:
{ id: 1, name: 'كابل شحن USB-C', price: 10, image: 'images/product-charging-1.jpg' }

// بعد:
{ id: 1, name: 'كابل شحن USB-C', price: 12, image: 'images/product-charging-1.jpg' }
```

### تغيير الاسم:
```javascript
// قبل:
{ id: 1, name: 'كابل شحن USB-C', price: 10, image: 'images/product-charging-1.jpg' }

// بعد:
{ id: 1, name: 'كابل شحن USB-C سريع جداً', price: 10, image: 'images/product-charging-1.jpg' }
```

### تغيير الصورة:
```javascript
// قبل:
{ id: 1, name: 'كابل شحن USB-C', price: 10, image: 'images/product-charging-1.jpg' }

// بعد:
{ id: 1, name: 'كابل شحن USB-C', price: 10, image: 'images/product-charging-new.jpg' }
```

### إضافة منتج جديد:
```javascript
// أضفه في نهاية القائمة:
{ id: 11, name: 'منتج جديد', price: 25, image: 'images/product-charging-11.jpg' }
```

---

## ⚠️ أخطاء شائعة

### ❌ خطأ: فاصلة ناقصة
```javascript
// خطأ:
{ id: 1, name: 'المنتج', price: 10, image: 'images/product-1.jpg' }
{ id: 2, name: 'المنتج 2', price: 15, image: 'images/product-2.jpg' }

// صحيح:
{ id: 1, name: 'المنتج', price: 10, image: 'images/product-1.jpg' },
{ id: 2, name: 'المنتج 2', price: 15, image: 'images/product-2.jpg' }
```

### ❌ خطأ: أسماء غير متطابقة
```javascript
// خطأ:
{ id: 1, name: 'كابل شحن', price: 10, image: 'images/Product-Charging-1.jpg' }

// صحيح:
{ id: 1, name: 'كابل شحن', price: 10, image: 'images/product-charging-1.jpg' }
```

### ❌ خطأ: نسيان العلامات
```javascript
// خطأ:
{ id: 1, name: كابل شحن, price: 10, image: images/product-1.jpg }

// صحيح:
{ id: 1, name: 'كابل شحن', price: 10, image: 'images/product-1.jpg' }
```

---

## 📝 قالب فارغ للنسخ

استخدم هذا القالب لإنشاء منتج جديد:

```javascript
{ id: [رقم], name: '[اسم المنتج]', price: [السعر], image: 'images/[الصورة].jpg' },
```

---

## 🎨 أسعار مقترحة

| نوع المنتج | السعر المقترح |
|-----------|----------|
| كابلات | 5-15 د.ا |
| شواحن | 15-40 د.ا |
| بطاريات خارجية | 25-50 د.ا |
| ألعاب | 15-65 د.ا |
| سماعات | 30-80 د.ا |
| اكسسوارات | 5-60 د.ا |
| اشتراكات شهرية | 10-30 د.ا |
| اشتراكات سنوية | 40-150 د.ا |
| عروض متعددة | 50-200 د.ا |

---

## ✅ قائمة التحقق

- [ ] تم تغيير جميع السعار بشكل صحيح
- [ ] تم التحقق من أسماء الصور
- [ ] تم التأكد من وجود الفواصل بين المنتجات
- [ ] تم الاحتفاظ برقم معرّف فريد لكل منتج
- [ ] تم اختبار الموقع بعد التعديلات
- [ ] تم عرض جميع المنتجات بشكل صحيح

---

**الآن أنت مستعد لتخصيص متجرك!** 🚀

استمتع بإنشاء متجرك الخاص! 🎉
