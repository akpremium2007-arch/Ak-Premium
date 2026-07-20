# ربط تقييمات الزبائن بـ Google Sheets

يمكنك الآن حفظ تقييمات العملاء في Google Sheets ليشاهدها الجميع بدلاً من حفظها محلياً فقط.

## خطوات الإعداد

1. افتح Google Sheets وأنشئ جدولاً جديداً.
2. انسخ معرّف الجدول من الرابط. هو الجزء بين `/d/` و`/edit`.
   - مثال: `https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/edit` → المعرّف هو `1A2B3C4D5E6F7G8H9I0J`
3. في القائمة اختر `Extensions` ثم `Apps Script`.
4. امسح أي كود افتراضي وألصق الكود التالي:

```javascript
const sheetId = 'YOUR_SPREADSHEET_ID';
const sheetName = 'Reviews';

function ensureSheet() {
  const ss = SpreadsheetApp.openById(sheetId);
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Rating', 'Note', 'Date']);
  }
  return sheet;
}

function doGet(e) {
  if (e.parameter.action === 'getReviews') {
    const sheet = ensureSheet();
    const rows = sheet.getDataRange().getValues();
    const reviews = [];

    for (let i = 1; i < rows.length; i++) {
      const [timestamp, name, email, rating, note, date] = rows[i];
      reviews.push({
        id: timestamp.toString(),
        name: name || '',
        email: email || '',
        rating: parseInt(rating, 10) || 0,
        note: note || '',
        date: date || ''
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ reviews }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput('OK');
}

function doPost(e) {
  const requestBody = JSON.parse(e.postData.contents);
  if (requestBody.action !== 'addReview' || !requestBody.review) {
    return ContentService.createTextOutput(JSON.stringify({ success: false }));
  }

  const review = requestBody.review;
  const sheet = ensureSheet();
  sheet.appendRow([
    review.id,
    review.name,
    review.email,
    review.rating,
    review.note,
    review.date
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. استبدل `YOUR_SPREADSHEET_ID` بمعرّف جدولك.
6. اختر `Deploy` ثم `New deployment`.
7. عند نوع النشر اختر `Web app`.
8. ضَع الاسم الذي تريده، وحدد:
   - `Execute as`: Me
   - `Who has access`: Anyone
9. اضغط `Deploy` ثم انسخ الرابط النهائي.
10. افتح `script.js` واستبدل قيمة `googleSheetsEndpoint` بالرابط الجديد.

## ماذا يحدث بعد الربط؟

- سيقرأ الموقع التقييمات من Google Sheets عند تحميل الصفحة.
- ستُكتب التقييمات الجديدة إلى Google Sheets فور إرسالها.
- كل زائر للموقع سيرى نفس التقييمات المشتركة.

## ملاحظة هامة

إذا لم تحدد رابط Google Apps Script، سيبقى الموقع يعمل بالتخزين المحلي (`localStorage`) فقط.
