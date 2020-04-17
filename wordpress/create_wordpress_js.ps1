$filename = ".\wordpress.js"
# disable IDE formatter
Set-Content -Path $filename -Value "// @formatter:off"
# Fetch d3.js
Invoke-RestMethod -Uri "https://d3js.org/d3.v5.min.js" -Method Get | Out-File $filename -Append
Invoke-RestMethod -Uri "https://d3js.org/d3-array.v2.min.js" -Method Get | Out-File $filename -Append
# Minify main.js
Add-Content -Path $filename -Value "// main.js"
$main_js = Get-Content -Path "..\visualization\main.js" -Raw -Encoding UTF8
$postParams = @{ input = $main_js }
Invoke-RestMethod -Uri "https://javascript-minifier.com/raw" -Method Post -Body $postParams | Out-File $filename -Append
# reenable IDE formatter
Add-Content -Path $filename -Value "// @formatter:on"
