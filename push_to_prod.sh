git checkout -b production

git merge master

source ./update.sh

git add .

git config --global user.name "asim3"
git config --global user.email "asim3"

git commit -m "auto update init.html"

git push origin production
