---
layout: page
title: Bausteine
permalink: /ergebnisse/
---

<h1 class="page-title">{{ page.title | escape }}</h1>

<div id="formkeep-embed" data-formkeep-url="https://formkeep.com/p/4e5603895b2eff74a27d3edf3475e656?embedded=1"></div>

<script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script type="text/javascript" src="https://formkeep-production-herokuapp-com.global.ssl.fastly.net/formkeep-embed.js"></script>

<!-- Get notified when the form is submitted, add your own code below: -->
<script>
const formkeepEmbed = document.querySelector('#formkeep-embed')

formkeepEmbed.addEventListener('formkeep-embed:submitting', _event => {
  console.log('Submitting form...')
})

formkeepEmbed.addEventListener('formkeep-embed:submitted', _event => {
  console.log('Submitted form...')
})
</script>
