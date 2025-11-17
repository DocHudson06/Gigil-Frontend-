# Final Connection Guide - Let's Connect!

## ✅ What I Just Did

I've updated the code to make the endpoint **configurable**! Now you can easily change it.

---

## 🎯 Step 1: Find Your Endpoint Name

**You need to find the exact endpoint name. Here's how:**

### **Option A: Check Strapi Admin (Easiest)**

1. **Open:** `http://localhost:1337/admin`
2. **Go to:** Content-Type Builder (left sidebar)
3. **Look at:** Collection Types
4. **What name do you see?**
   - "Blog Post"?
   - "Post"?
   - "Article"?
   - Something else?

**Strapi pluralizes names:**
- "Blog Post" → `/api/blog-posts`
- "Post" → `/api/posts`
- "Article" → `/api/articles`

### **Option B: Test in Browser**

**After setting permissions, test these URLs:**

1. `http://localhost:1337/api/blog-posts`
2. `http://localhost:1337/api/posts`
3. `http://localhost:1337/api/articles`
4. `http://localhost:1337/api/blogs`

**Which one shows your 3 blog posts?** That's the endpoint name!

---

## 🔧 Step 2: Set Permissions (IMPORTANT!)

**Before testing, set permissions:**

1. **Go to:** Settings → Users & Permissions Plugin → Roles → Public
2. **Enable:**
   - ✅ `find` (to list all posts)
   - ✅ `findOne` (to get single post)
3. **Do this for:**
   - Your blog post content type
   - Category
   - Author
4. **Click Save**

---

## 🚀 Step 3: Configure Endpoint

**Once you know the endpoint name, update `.env.local`:**

Add this line to your `.env.local` file:

```env
NEXT_PUBLIC_STRAPI_BLOG_ENDPOINT=YOUR_ENDPOINT_NAME
```

**Examples:**

If your endpoint is `/api/posts`:
```env
NEXT_PUBLIC_STRAPI_BLOG_ENDPOINT=posts
```

If your endpoint is `/api/articles`:
```env
NEXT_PUBLIC_STRAPI_BLOG_ENDPOINT=articles
```

If your endpoint is `/api/blog-posts`:
```env
NEXT_PUBLIC_STRAPI_BLOG_ENDPOINT=blog-posts
```

**Or just leave it empty** - it will default to `blog-posts`

---

## 📝 Step 4: Update .env.local

**Your `.env.local` should look like this:**

```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337/api
NEXT_PUBLIC_STRAPI_BLOG_ENDPOINT=posts
NEXT_PUBLIC_APP_NAME=Gigil
```

**(Replace `posts` with your actual endpoint name)**

---

## ✅ Step 5: Restart Frontend

1. **Stop frontend:** Press Ctrl+C
2. **Start again:**
   ```bash
   npm run dev
   ```
3. **Test:** Open `http://localhost:3002`

---

## 🎯 Quick Action Plan

1. ✅ **Set permissions** in Strapi (Settings → Roles → Public)
2. ✅ **Find endpoint name** (check Content-Type Builder or test URLs)
3. ✅ **Update `.env.local`** (add `NEXT_PUBLIC_STRAPI_BLOG_ENDPOINT=your-endpoint`)
4. ✅ **Restart frontend** (`npm run dev`)
5. ✅ **Test connection** (`http://localhost:3002`)

---

## 💡 Most Common Endpoints

Based on what you might have created:

- **"Blog Post"** → `blog-posts`
- **"Post"** → `posts`
- **"Article"** → `articles`
- **"Blog"** → `blogs`

---

## 🐛 Still Not Working?

**Check:**
1. ✅ Permissions set? (Settings → Roles → Public)
2. ✅ Blog posts published? (not just saved)
3. ✅ Endpoint name correct in `.env.local`?
4. ✅ Strapi running? (`http://localhost:1337/admin`)
5. ✅ Frontend restarted after changing `.env.local`?

---

## 📋 What to Tell Me

**After you:**
1. Set permissions
2. Found the endpoint name
3. Updated `.env.local`

**Tell me:**
- ✅ What endpoint name you found (e.g., "posts", "articles")
- ✅ If it's working or still getting errors

**I'll help you troubleshoot! 🚀**

---

**Do this now:**
1. Set permissions in Strapi
2. Find your endpoint name
3. Update `.env.local` with the endpoint name
4. Restart frontend
5. Test!

**Let me know what endpoint name you found! 🎉**


