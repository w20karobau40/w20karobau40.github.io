#! /bin/sh
git pull
python get_limesurvey_results.py
cp limesurvey_data.js ../assets/js/visualization/limesurvey_data.js
git add ../assets/js/visualization/limesurvey_data.js
git commit -m "automatic limesurvey update"
git push
