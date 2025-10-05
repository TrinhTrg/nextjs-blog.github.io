---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If yes, use Static Generation.

Otherwise, if your page changes often (e.g. live data), use **Server-side Rendering**.
