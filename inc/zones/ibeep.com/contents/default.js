D_EXTEND("ibeep.com"
	//////////////////////
	// private lan records
	, A("deb-dev.macpro.pve", "192.168.30.113")
	, A("home-wan-nat", "192.168.12.1", TTL(42800))
	, A("dn42.macpro.pve.home", "172.23.217.90")
	, A("dn42.vyos.home", "172.23.217.65", TTL(3600))
	, A("vyos.home", "172.23.217.65", TTL(42800))
	, A("dn42.evo.pve", "172.23.217.99")

	, A("cv", "10.31.250.0")

	//////////////////////
	// pc cluster
	, A("n1.pc", "192.168.12.51", TTL(42800))
	, A("n2.pc", "192.168.12.52", TTL(42800))
	, A("n3.pc", "192.168.12.53", TTL(42800))
	, A("n4.pc", "192.168.12.54", TTL(42800))
	, A("n5.pc", "192.168.12.55", TTL(42800))

	, A("kms", "172.23.217.72", TTL(3600))
	, SRV("_vlmcs._tcp.home", 0, 0, 1688, "kms.ibeep.com.")
	, SRV("_vlmcs._tcp", 0, 0, 1688, "kms.ibeep.com.")

	////////////////////////
	// hypervisor things
	, CNAME("*.cloud", "cloud.ibeep.com.")
	, CNAME("cloud", "ibeep.com.")
	, CNAME("dn42.macpro.pve", "dn42.macpro.pve.home.ibeep.com.")
	, CNAME("dn42.macpro-pve.home", "dn42.macpro.pve.home.ibeep.com.")
	, CNAME("macpro.pve", "dn42.macpro.pve.home.ibeep.com.")
	, CNAME("macpro-pve.home", "dn42.macpro.pve.home.ibeep.com.")
	, A("pve-5.pve", "192.168.1.5")

	, A("oci-01.r", "132.145.193.131")

	, A("tdns2", "129.153.146.130") // Public Technitium DNS server on Oracle Cloud
	, IGNORE("tdns1", "A") // managed elsewhere

	///////////////
	// www records
	, CNAME("www", "neon-tulumba-d89507.netlify.app.")
	, CNAME("blog", "cname.vercel-dns.com.")


	////////////////
	// verification things
	, CNAME("_domainconnect", "connect.domains.google.com.")
	, IGNORE("_acme-challenge", "TXT")
	, IGNORE("_acme-challenge.**", "TXT")
	, TXT("_atproto", "did=did:plc:fvgyuzwvn5jac6z4dedztdzx")
	, TXT("@", "oci-domain-verification=5sMTB8TMCj01LpqaioMRRslg9wQD0RFwUzqxHlwCIySv2")
	, TXT("@", "keybase-site-verification=ETl8o2A9sJFg3seiGRyUdGfP6EDURyJYy14zT-gTgzo")
	, TXT("e", "MS=ms34099336", TTL(3600))
	, TXT("oci-domain-verification", "sMTB8TMCj01LpqaioMRRslg9wQD0RFwUzqxHlwCIySv2")

	/////////////////
	// subdomain ns delegations
	, NS("internal", "home.ibeep.com.")
)
