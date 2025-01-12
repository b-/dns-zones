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

	///////////////////////
	// public internet IPs
	, A("evo", "103.195.100.158") // Miami Proxmox VPS, sponsored by Evolution-Host
	, A("evo.pve", "103.195.100.158")
	, CNAME("*.evo", "evo.ibeep.com.")

	, A("oci-01.r", "132.145.193.131")

	, A("tdns2", "129.153.146.130") // Public Technitium DNS server on Oracle Cloud
	, IGNORE("tdns1", "A") // managed elsewhere

	///////////////
	// www records
	, CNAME("www", "neon-tulumba-d89507.netlify.app.")
	, CNAME("blog", "cname.vercel-dns.com.")


	///////////////
	// email records
	, MX("@", 10, "mx.zoho.com.")
	, MX("@", 20, "mx2.zoho.com.")
	, MX("@", 50, "mx3.zoho.com.")
	, TXT("@", "v=spf1 include:zoho.com ~all")
	, TXT("zoho._domainkey", "k=rsa; t=y; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDL7MrQep4Rz+T1al3nGgAfNgG7VeteDnHxJA2MdUqk++eK2ds6ppURjnkhaI8sIJowvF09NEiXiCzR01hfM7FaSvs3KRelzRWS0Z3lzobv3blImCwCAanIGCFFaHWyKf7FlYzhWc6RqORoOBA68ibO9VFX1tYaAs+F9oCt26tJwIDAQAB")
	, TXT("@", "zoho-verification=zb15326403.zmverify.zoho.com")
	, TXT("_dmarc", "v=DMARC1; p=none;")

	// sendgrid
	, CNAME("em2135", "u37122549.wl050.sendgrid.net.")
	, CNAME("s1._domainkey", "s1.domainkey.u37122549.wl050.sendgrid.net.")
	, CNAME("s2._domainkey", "s2.domainkey.u37122549.wl050.sendgrid.net.")
	, CNAME("url2071", "sendgrid.net.")
	, CNAME("37122549", "sendgrid.net.")

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
