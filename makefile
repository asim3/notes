all: config pull update_init_html commit push

config:
	git config user.name "asim3 from runner"
	git config user.email "asim3"

pull:
	git pull origin production
	git checkout production
	git pull origin master

update_init_html:
	./update.sh

commit:
	git add .
	git commit -m "auto update by $$(whoami) "

push:
	git push origin production
