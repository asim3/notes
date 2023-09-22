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
	awk -F. -v OFS=. '{$$NF += 1 ; print}' .github/version_number > .github/version_number_new
	head -n 1 .github/version_number_new > .github/version_number
	rm -f .github/version_number_new
	git tag -a $$(cat .github/version_number) -m "Added by asim using Makefile"
	git push origin $$(cat .github/version_number)
