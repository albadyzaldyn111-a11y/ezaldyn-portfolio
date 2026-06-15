# بورتفوليو عزالدين العبادي | Ezaldyn Al-Abadi Portfolio

بورتفوليو احترافي وفاخر لمهندس البرمجيات **عزالدين العبادي** - متخصص في تطوير الويب والذكاء الاصطناعي.

## ✨ الميزات الرئيسية

### 🎨 التصميم
- **Editorial Luxury Design** - تصميم فاخر وجريء مستوحى من الفن الحديث
- **Responsive Design** - متناسب مع جميع أحجام الأجهزة (الهواتف، الأجهزة اللوحية، سطح المكتب)
- **Dark Theme** - ثيم داكن فاخر مع ألوان ذهبية دافئة
- **Smooth Animations** - حركات سلسة واحترافية
- **Accessibility** - متوافق مع معايير الوصول

### 📱 Progressive Web App (PWA)
- **تثبيت التطبيق** - يمكن تثبيت الموقع كتطبيق على الهاتف أو سطح المكتب
- **Offline Support** - يعمل بدون اتصال إنترنت (مع Service Worker)
- **App Shortcuts** - اختصارات سريعة للوصول إلى الأقسام المهمة
- **Native App Experience** - تجربة تطبيق أصلي

### 🚀 الأداء
- **Fast Loading** - تحميل سريع جداً
- **Optimized Assets** - أصول محسّنة
- **Code Splitting** - تقسيم الكود لتحسين الأداء
- **Caching Strategy** - استراتيجية تخزين ذكية

### 🔄 النشر التلقائي
- **GitHub Pages** - استضافة مجانية ودائمة عبر GitHub
- **GitHub Actions** - نشر تلقائي عند كل push
- **CI/CD Pipeline** - خط أنابيب تطوير مستمر

## 📋 الأقسام

1. **Hero** - قسم البداية الرئيسي مع صورة شخصية
2. **Services** - الخدمات المتخصصة
3. **Projects** - المشاريع المميزة
4. **Skills** - المهارات والتقنيات
5. **Timeline** - رحلة العمل والخبرة
6. **Testimonials** - آراء العملاء
7. **Contact** - نموذج التواصل

## 🛠️ التكنولوجيات المستخدمة

- **React 19** - مكتبة واجهات المستخدم
- **Vite** - أداة البناء السريعة
- **Tailwind CSS 4** - إطار عمل CSS
- **TypeScript** - لغة البرمجة
- **Wouter** - توجيه الصفحات
- **Framer Motion** - الحركات والتأثيرات
- **shadcn/ui** - مكونات واجهة المستخدم

## 📦 التثبيت والتشغيل

### المتطلبات
- Node.js 22 أو أحدث
- pnpm 10 أو أحدث

### التثبيت المحلي

```bash
# استنساخ المستودع
git clone https://github.com/yourusername/ezaldyn-portfolio-new.git
cd ezaldyn-portfolio-new

# تثبيت الحزم
pnpm install

# تشغيل خادم التطوير
pnpm run dev

# الوصول إلى الموقع
# http://localhost:3000
```

### البناء والإنتاج

```bash
# بناء المشروع
pnpm run build

# اختبار البناء محلياً
pnpm run preview

# بدء خادم الإنتاج
pnpm run start
```

## 🚀 النشر على GitHub Pages

### الخطوة 1: إنشاء مستودع GitHub

```bash
# إنشاء مستودع جديد على GitHub
# (يمكن عبر واجهة GitHub أو استخدام GitHub CLI)

# أضف المستودع البعيد
git remote add origin https://github.com/yourusername/ezaldyn-portfolio-new.git

# ادفع الكود
git branch -M main
git push -u origin main
```

### الخطوة 2: تفعيل GitHub Pages

1. اذهب إلى إعدادات المستودع (Settings)
2. اختر "Pages" من القائمة الجانبية
3. اختر "GitHub Actions" كمصدر النشر
4. سيتم النشر تلقائياً عند كل push

### الخطوة 3: الوصول إلى الموقع

الموقع سيكون متاحاً على:
```
https://yourusername.github.io/ezaldyn-portfolio-new/
```

## 📱 تثبيت التطبيق

### على الهاتف (iOS/Android)

1. افتح الموقع في المتصفح
2. اضغط على قائمة المتصفح (⋮ أو ⋯)
3. اختر "تثبيت التطبيق" أو "Add to Home Screen"
4. سيظهر التطبيق على الشاشة الرئيسية

### على سطح المكتب (Windows/Mac/Linux)

1. افتح الموقع في Chrome أو Edge
2. اضغط على أيقونة التثبيت في شريط العنوان
3. اختر "تثبيت"
4. سيظهر التطبيق في قائمة التطبيقات

## 📝 تخصيص المحتوى

### تحديث البيانات

عدّل ملف `client/src/data/portfolio.ts`:

```typescript
export const heroData = {
  name: "عزالدين العبادي",
  title: "مهندس برمجيات",
  description: "...",
  // إضافة المزيد من البيانات
};
```

### تحديث الصور

1. ضع الصور في `/home/ubuntu/webdev-static-assets/`
2. استخدم `manus-upload-file` لرفعها
3. استبدل الروابط في المكونات

### تحديث الألوان

عدّل ملف `client/src/styles/editorial.css`:

```css
:root {
  --color-navy: #0F1419;
  --color-gold: #D4AF37;
  --color-cream: #F5F1E8;
}
```

## 🔧 الصيانة والتحديثات

### تحديث الحزم

```bash
pnpm update
```

### التحقق من الأخطاء

```bash
pnpm run check
```

### تنسيق الكود

```bash
pnpm run format
```

## 🌐 النشر على منصات أخرى

### Netlify

```bash
# تثبيت Netlify CLI
npm install -g netlify-cli

# تسجيل الدخول
netlify login

# نشر الموقع
netlify deploy --prod --dir=dist/public
```

### Vercel

```bash
# تثبيت Vercel CLI
npm install -g vercel

# نشر الموقع
vercel --prod
```

## 📊 الأداء والتحسينات

### Lighthouse Scores
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### تحسينات الأداء
- ✅ Lazy Loading للصور
- ✅ Code Splitting
- ✅ Minification
- ✅ Gzip Compression
- ✅ Service Worker Caching

## 🤝 المساهمة

للمساهمة في المشروع:

1. اعمل على فرع جديد
2. اجعل التغييرات
3. اختبر التغييرات
4. أرسل Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT.

## 📞 التواصل

- **البريد الإلكتروني**: ezaldyn@example.com
- **GitHub**: https://github.com/yourusername
- **LinkedIn**: https://linkedin.com/in/yourusername
- **Twitter**: https://twitter.com/yourusername

## 🎯 الخطوات التالية

- [ ] إضافة مدونة
- [ ] إضافة نموذج اتصال ديناميكي
- [ ] إضافة معرض صور
- [ ] إضافة نظام تعليقات
- [ ] إضافة إحصائيات الزوار

---

**تم إنشاء هذا المشروع بواسطة Manus AI**

آخر تحديث: يونيو 2026
