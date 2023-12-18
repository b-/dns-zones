.PHONY: list
_list:
	@printf 'make %s\n' "`grep '^[^(\.PHONY)#_[:space:]].*:' Makefile`"

.PHONY: all
all: sample.env # dnsconfig.js
	
.PHONY: ci
ci: clean all

.PHONY: pr
pr: clean all preview types-dnscontrol.d.ts

.PHONY: clean
clean:
	rm -f sample.env draft.js zones/*.zone # dnsconfig.js

# dnsconfig.js:
# 	bash ./glob_incs.sh > dnsconfig.js

types-dnscontrol.d.ts:
	dnscontrol write-types

sample.env:
	<.env perl -pe 's/^(.*?)=.*/\1="\1"/g' | tee sample.env

.PHONY: test
test:
	dnscontrol check

.PHONY: preview
preview: dnsconfig.js
	dnscontrol preview

.PHONY: preview-with-axfr
preview-with-axfr: dnsconfig.js
	dnscontrol preview -v axfr=true

.PHONY: push
push:
	dnscontrol push

.PHONY: push-with-axfr
push:
	dnscontrol push -v axfr=true


