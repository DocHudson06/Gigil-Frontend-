# Fix Permissions & Find Endpoint

## ✅ Your Blog Posts Exist!

You have 3 blog posts:
1. Building Modern Web Applications with TypeScript
2. The Human Pyramids of Juste De Juste (ca. 1540)
3. When Chocolate was Medicine: Colmenero, Wadsworth, and Dufour

**The issue:** API permissions or endpoint name!

---

## 🔧 Step 1: Set API Permissions (MOST IMPORTANT!)

### **In Strapi Admin:**

1. **Open:** `http://localhost:1337/admin`
2. **Go to:** Settings (bottom left)
3. **Click:** Users & Permissions Plugin
4. **Click:** Roles
5. **Click:** Public (the public role)

### **Enable Permissions:**

Scroll down and find your content type. Look for:
- **Blog Post** (or whatever you named it)
- **Post**
- **Article**
- Or any collection type you created

**For each content type, enable:**
- ✅ **find** (to list all posts)
- ✅ **findOne** (to get single post)

**Also enable for related types:**
- ✅ **Category** - find, findOne
- ✅ **Author** - find, findOne

6. **Click Save** (top right)

---

## 🔍 Step 2: Find the Correct Endpoint Name

### **Method 1: Check Content-Type Builder**

1. **Go to:** Content-Type Builder (left sidebar)
2. **Look at:** Collection Types
3. **What's the EXACT name?**
   - Is it "Blog Post"?
   - Is it "Post"?
   - Is it something else?

**Strapi pluralizes names:**
- "Blog Post" → `/api/blog-posts`
- "Post" → `/api/posts`
- "Article" → `/api/articles`

### **Method 2: Test in Browser**

After setting permissions, test these URLs:

1. `http://localhost:1337/api/blog-posts`
2. `http://localhost:1337/api/posts`
3. `http://localhost:1337/api/articles`
4. `http://localhost:1337/api/blogs`

**Which one shows your 3 blog posts?** That's the correct one!

---

## 🎯 Step 3: Update Code

Once you tell me:
1. ✅ Permissions are set
2. ✅ Which endpoint works (e.g., `/api/posts` or `/api/blog-posts`)

**I'll update the code immediately!**

---

## 📋 Quick Checklist

- [ ] Opened Strapi Admin
- [ ] Went to Settings → Roles → Public
- [ ] Enabled `find` and `findOne` for your content type
- [ ] Enabled `find` and `findOne` for Category
- [ ] Enabled `find` and `findOne` for Author
- [ ] Clicked Save
- [ ] Tested API URL in browser
- [ ] Found which endpoint works
- [ ] Told me the endpoint name
- [ ] I'll update the code

---

## 🚀 What to Do Right Now

1. **Set permissions first** (this is usually the issue!)
   - Settings → Roles → Public
   - Enable find & findOne
   - Save

2. **Test the API:**
   - Try: `http://localhost:1337/api/blog-posts`
   - Or: `http://localhost:1337/api/posts`
   - See which one shows your 3 blog posts

3. **Tell me:**
   - ✅ Permissions are set
   - ✅ Which endpoint works (e.g., `/api/posts`)

**Then I'll fix the code and you'll be done! 🎉**

---

## 💡 Common Issue

**Most common problem:** Permissions not set!

Even if everything else is correct, if permissions aren't enabled, you'll get 403 Forbidden or 404 Not Found.

**Fix:** Enable permissions in Public role!

---

**Set permissions now and test the API URLs. Let me know which one works! 🚀**


