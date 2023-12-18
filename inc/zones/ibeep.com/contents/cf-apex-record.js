D_EXTEND("ibeep.com",
// NOTE: CNAME at apex
  // does not work with BIND
//  ALIAS("@", "apex-loadbalancer.netlify.com.")
)
if (bind != "true") {
  D_EXTEND("ibeep.com",
    ALIAS("@", "apex-loadbalancer.netlify.com.")
  )
} else {
  D_EXTEND("ibeep.com",
    IGNORE("@","CNAME")
  )
}
