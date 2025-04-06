---
name: "My frist blog?"
slug: "My-first-blog"
category: "Casual"
summary: "BRK BLOG testing."
main_image: "blog/images/FirstBlog/main.png"
thumbnail_image: "blog/images/FirstBlog/thumb.png"
published_on: "2005-04-25 18:00:00"
---

## Test of my frist automated blog.

This is my implementation of templeting engines like jeykill & also manages CMS

## How does it work?

Check in the MD file as per format in this file. Git runner with axios would parse it and axios would push that to and update api endpoint. This endpoint is just a php file on cms (also synchronised by another git action). This PHP reads a key provided by axios (axios picks this from git secrets.) to verify its from me and then updates the database which is read and rendered to the website
