 D_EXTEND("ibeep.com"
  , IGNORE("@","CNAME")
  //, IGNORE("tdns1.ibeep.com.","NS","*")
)
//D("ibeep.com!axfrddns", REG_CHANGEME
//  , {no_ns:'true'}
//  //, NAMESERVER("tdns1.ibeep.com.")
////   , IGNORE("tdns1")
//)
D("ibeep.com!tdns1", REG_CHANGEME
  , {no_ns:'true'}
  //, NAMESERVER("tdns1.ibeep.com.")
//   , IGNORE("tdns1")
)
D("ibeep.com!tdns2", REG_CHANGEME
  , {no_ns:'true'}
  //, NAMESERVER("tdns1.ibeep.com.")
//   , IGNORE("tdns1")
)
D("ibeep.com!cloudflare", REG_CHANGEME
  , {no_ns:'true'}
  , ALIAS("@", "apex-loadbalancer.netlify.com.")
)
