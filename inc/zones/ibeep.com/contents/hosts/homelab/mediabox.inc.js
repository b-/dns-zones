D_EXTEND("ibeep.com"
	///////////////
	// mediabox lan records
	, CNAME("mediabox", "mediabox.lan.ibeep.com.")
	, CNAME("mediabox.home", "home-ddns.ibeep.com.", TTL(60))
	, A("mediabox.lan", "192.168.1.90", TTL(60))
	, CNAME("*.mediabox", "mediabox.ibeep.com.")
)
