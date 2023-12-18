 D_EXTEND("ibeep.com"
  , IGNORE("@","CNAME")
  //, IGNORE("tdns1.ibeep.com.","NS","*")
)
D("ibeep.com!axfrddns", REG_CHANGEME
  //, NAMESERVER("tdns1.ibeep.com.")
//   , IGNORE("tdns1")
)
D("ibeep.com!cloudflare", REG_CHANGEME
  , ALIAS("@", "apex-loadbalancer.netlify.com.")
)
