.PHONY: list
_list:
	@printf 'make %s\n' "`grep '^[^(\.PHONY)#_[:space:]].*:' Makefile`"

.PHONY: all
all: sample.env # dnsconfig.js

.PHONY: ci
ci: clean all

.PHONY: pr
pr: ci cipreview

.PHONY: cd
cd: ci cipush

.PHONY: clean
clean:
	@rm -f sample.env draft.js zones/*.zone

# dnsconfig.js:
# 	bash ./glob_incs.sh > dnsconfig.js

types-dnscontrol.d.ts:
	dnscontrol write-types

sample.env:
	@<.env perl -pe 's/^([^#]*?)=.*/\1="\1"/g' | tee sample.env

.PHONY: test
test:
	dnscontrol check

.PHONY: preview
preview: dnsconfig.js
	dnscontrol preview

.PHONY: cipreview
cipreview: dnsconfig.js
	dnscontrol --no-colors preview

.PHONY: preview-without-axfr
preview-with-axfr: dnsconfig.js
	dnscontrol preview -v axfr=false

.PHONY: push
push:
	dnscontrol push

.PHONY: cipush
cipush:
	dnscontrol --no-colors push

.PHONY: push-without-axfr
push-with-axfr: dnsconfig.js
	dnscontrol push -v axfr=false
