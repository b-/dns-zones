 //D_EXTEND("ibeep.com"

// split-horizon overrides
var MEDIABOX_SPLIT_OVERRIDES = [
  , A("home-ddns","172.23.217.75") // split-horizon override for reverse
]

 var APEX_IGNORE=[
  , IGNORE("@","CNAME")
 ]
D_EXTEND("ibeep.com"
	, IGNORE("*-ddns","A") // managed by ddns updater tools
	, IGNORE("tdns1","AAAA") // managed by ddns updater tools
  , APEX_IGNORE
)

 var APEX_NETLIFY = [
  , ALIAS("@", "apex-loadbalancer.netlify.com.")
 ]
D("ibeep.com!tdns1", REG_CHANGEME
  , {no_ns:'true'}
  , APEX_IGNORE
  , MEDIABOX_SPLIT_OVERRIDES
)
D("ibeep.com!tdns2", REG_CHANGEME
  , {no_ns:'true'}
  , APEX_IGNORE
)
D("ibeep.com!cloudflare", REG_CHANGEME
  , {no_ns:'true'}
  , APEX_NETLIFY
)
