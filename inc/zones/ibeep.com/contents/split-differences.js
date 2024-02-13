//D_EXTEND("ibeep.com"

// split-horizon overrides
var SPLIT_OVERRIDES = [
  , A("home-ddns", "172.23.217.75") // split-horizon override for reverse
  , CNAME("ci-upload-ddns", "ci-upload.v30.dhcp.ibeep.com.") // split-horizon override for ci-upload
]

var APEX_IGNORE = [
  , IGNORE("@", "CNAME")
]

// ignore DHCP hostnames
var DHCP_IGNORE = [
  , IGNORE("*.dhcp", "A")
  // ignore pointers to DHCP hostnames
  , IGNORE("*", "CNAME", "*.dhcp.ibeep.com.")
]

D_EXTEND("ibeep.com"
  , IGNORE("*-ddns", "A") // managed by ddns updater tools
  , IGNORE("tdns1", "AAAA") // managed by ddns updater tools
  , APEX_IGNORE
  , DHCP_IGNORE
  , IGNORE("*-ddns", "CNAME")
)

var APEX_NETLIFY = [
  , ALIAS("@", "apex-loadbalancer.netlify.com.")
]
D("ibeep.com!tdns1", REG_CHANGEME
  , { no_ns: 'true' }
  , APEX_IGNORE
  , SPLIT_OVERRIDES
  , DHCP_IGNORE
)
D("ibeep.com!tdns2", REG_CHANGEME
  , { no_ns: 'true' }
  , APEX_IGNORE
  , DHCP_IGNORE
)
D("ibeep.com!cloudflare", REG_CHANGEME
  , { no_ns: 'true' }
  , APEX_NETLIFY
  , DHCP_IGNORE
  // point ci-upload-ddns to home-ddns
  , CNAME("ci-upload-ddns", "home-ddns.ibeep.com.")
)
