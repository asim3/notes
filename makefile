all: pull update commit push

pull:
	git checkout -b production

update:
	./scripts/update.sh

commit:
	git config user.name "asim3 from runner"
	git config user.email "asim3"
	git add .
	git commit -m "auto update by $$(whoami) "

push:
	git push --force origin production

new_tag:
	git tag -a $$(git tag -l --sort=-creatordate "v-*" | head -n 1 | awk -F. -v OFS=. '{$$NF += 1 ; print}')
	git push origin --tags
