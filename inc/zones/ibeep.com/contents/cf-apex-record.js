D_EXTEND("ibeep.com"
  , IGNORE("@","CNAME")
  , IGNORE("tdns1.ibeep.com.","*","*")
)
D("ibeep.com!axfrddns", REG_CHANGEME
  , IGNORE("tdns1")
)
D("ibeep.com!cloudflare", REG_CHANGEME
  , ALIAS("@", "apex-loadbalancer.netlify.com.")
)
