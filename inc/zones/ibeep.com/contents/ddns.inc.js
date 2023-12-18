D_EXTEND("ibeep.com",
  IGNORE("*-ddns","A"), // managed by ddns updater tools
  IGNORE("tdns1","AAAA"), // managed by ddns updater tools
	CNAME("home", "home-ddns.ibeep.com."),
	CNAME("mediabox.home", "home-ddns.ibeep.com.", TTL(60)),
	CNAME("opnsense.home", "home-ddns.ibeep.com.", TTL(60)),
	CNAME("pfsense.home", "home-ddns.ibeep.com.", TTL(3200))
)
