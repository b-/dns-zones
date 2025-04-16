D_EXTEND("ibeep.com"
	///////////////
	// mediabox lite records
	, CNAME("mediaboxlite", "mediaboxlite.lan.ibeep.com.")
	, CNAME("mediaboxlite.home", "home-ddns.ibeep.com.", TTL(60))
	, A("mediaboxlite.lan", "192.168.1.80", TTL(60))
	, A("mediaboxlite.ts", "100.127.24.51", TTL(60))
	, CNAME("*.mediaboxlite", "mediaboxlite.ibeep.com.")
	, CNAME("*.mediaboxlite.lan", "mediaboxlite.lan.ibeep.com.")
	, CNAME("*.mediaboxlite.ts", "mediaboxlite.ts.ibeep.com.")
)
