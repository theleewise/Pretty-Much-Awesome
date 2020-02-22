---
slug: "/drupal8-404-search"
date: "2019-05-06"
title: "Include a Search Block on 404 Page for Drupal 8"
subheading: "Bloop a doop da doop"
featuredImage: "drupal-404-search.jpg"
description: "So you wanna add site search functionality to your 404 page on Drupal? I mean, it makes sense: A user got there looking for something only to not find it, why not help them out a bit. So what's the problem?"
tags: ["Drupal","Tutorial"]
---

So you wanna add site search functionality to your 404 page on Drupal? I mean, it makes sense: A user got there looking for something only to not find it, why not help them out a bit. So what's the problem?

Well, if you tried to add a search block and restrict it to the 404 page then it only works if you go directly to that 404 page and not actually a page that would land you there. So `mysite.com/404-page` would show the search block BUT `mysite.com/this-page-doesnt-exist` wouldn't.

That must be infuriating!

First you'll need to create a new page node. You'll then set this node as the "Default 404 (not found) page" under "Basic Site Settings" (`/admin/config/system/site-information`).

Next you'll need to create a page template specifically for this page (`/admin/config/system/site-information`) and add a region that will only be used on this template, I just called mine `content_404`.

*Remember: you'll need to add this to your yml file too.*

And finely, add a search block to the region.

That's it!