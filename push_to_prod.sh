git branch -a
git checkout -b production

./update.sh

git add .

git config --global user.name "asim3"
git config --global user.email "asim3"

git commit -m "auto update init.html"

git push --force origin production
