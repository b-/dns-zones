D_EXTEND("ibeep.com"
	/////////////////
	// subdomain ns delegations
	, NS("internal", "home.ibeep.com.")


	, CNAME("mediabox.home", "home-ddns.ibeep.com.", TTL(60))

	, CNAME("ci-upload", "ci-upload-ddns.ibeep.com.")
)
