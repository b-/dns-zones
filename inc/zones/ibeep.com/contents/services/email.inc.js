D_EXTEND("ibeep.com"
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
)
