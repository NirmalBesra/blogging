blogging
- users (end users > publisher > moderator > admin)
- posts handling
- login/register
- file upload
- comments
- ratings
- gallery
- verify/ approval of posts --> 
- moderators
- register + middleware - jp7
- login - akash
.env
- posts handling - nirmal

-MySQL dump for collaborators
-Ui layout landing page - carousal, header , social mediasection, feed, filter
- api endpoints
-


USERS

-> admin (admin)
-> end user- registered or unregistered
-> publisher-> (approved basis on some criteria)
-> moderator-> min 10 posts/ activity basis

---
posts
-> publisher
-> comments, ratings & likes (registered)
-> like (unregistered)
-> filter (year) & sort (date(asc-desc))
-> gallery
-> feed
-> tags -> maintained by moderators (approval)

#techstack
    1. NodeJS 
    2. Express
    3. Multer
    4. better-sqlite3
    5. Path
    6. bcrypt

    
POSTS Table Schema
postID, postName, postData, postImgJ ,date, ratings, author, category, moderator

USERS TABLE SCHEMA
userId, userName, userMail, userPassword, age, token, permission, created