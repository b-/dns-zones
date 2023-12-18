D_EXTEND("ibeep.com",
// NOTE: CNAME at apex
  // does not work with BIND
//  ALIAS("@", "apex-loadbalancer.netlify.com.")
  IGNORE("@","CNAME")
)
