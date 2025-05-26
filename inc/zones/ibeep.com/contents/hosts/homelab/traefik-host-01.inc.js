D_EXTEND("ibeep.com"
	///////////////
	// mediabox lite records
	, CNAME("traefik-host-01", "traefik-host-01.lan.ibeep.com.")
	, CNAME("traefik-host-01.home", "home-ddns.ibeep.com.", TTL(60))
	, A("traefik-host-01.lan", "192.168.1.48", TTL(60))
	, A("traefik-host-01.ts", "100.67.207.109", TTL(60))
	, CNAME("*.traefik-host-01", "traefik-host-01.ibeep.com.")
	, CNAME("*.traefik-host-01.home", "home-ddns.ibeep.com.", TTL(60))
	, CNAME("*.traefik-host-01.lan", "traefik-host-01.lan.ibeep.com.")
	, CNAME("*.traefik-host-01.ts", "traefik-host-01.ts.ibeep.com.")
)
