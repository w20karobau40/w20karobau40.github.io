# Fetch d3.js
Invoke-RestMethod -Uri "https://d3js.org/d3.v5.min.js" -Method Get | Out-File .\wordpress.js
Invoke-RestMethod -Uri "https://d3js.org/d3-array.v2.min.js" -Method Get | Out-File .\wordpress.js -Append
# Minify main.js
Add-Content -Path .\wordpress.js -Value "//main.js"
$main_js = Get-Content -Path "..\visualization\main.js" -Raw -Encoding UTF8
$postParams = @{ input = $main_js }
Invoke-RestMethod -Uri "https://javascript-minifier.com/raw" -Method Post -Body $postParams | Out-File .\wordpress.js -Append