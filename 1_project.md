---
layout: page
title: titles.project
namespace: project
permalink: /projekt/
permalink_en: /project/
nav: true
---

<h1 class="page-title">{% translate page.title %}</h1>

<img src="{{ "/assets/img/EFRE.jpg" | prepend: site.baseurl_root }}" style="width:40%;height:40%;" align="right">

{% translate_file project.md %}
