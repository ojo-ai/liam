```bash
cd ~/Sites
rm -rf liam
unzip ~/Downloads/liam-nice-tat-github-pages.zip
cd liam

git init
git branch -M main
git remote add origin https://github.com/ojo-ai/liam.git

git add .
git commit -m "Rebuild Liam site from Nice Tat"
git push -u origin main --force
```

GitHub: `ojo-ai/liam -> Settings -> Pages -> Source: GitHub Actions`
