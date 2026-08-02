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
-> publisher-> (approved basis on some criteria) doubt?
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
postId (auto increment, unique, PK ), postName, postData, postImgJ ,date, ratings, author, category, moderator

ratecomment Table Schema
rateId (auto increment, unique, PK ), userId, postId, rating, comment, datetime, commentIndex, visibilty (bool)

user table schema
userId (auto increment, unique, PK ), emailId (unique), name, age, date (auto generated) , password, image, role

Table Cardinality
posts * - 1 user
ratecomment 1 - * posts?
user 1 - * ratecomment