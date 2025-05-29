#!/bin/bash
bundle exec jekyll build
git checkout --orphan gh-pages
git reset --hard
cp -r _site/* .
cp -r _site/.* . 2> /dev/null || true
touch .nojekyll
git add .
git commit -m "Deploy built site with jekyll-scholar"
git push origin gh-pages --force
git checkout main  # or your source branch name