if (bind != "true") {
  D_EXTEND("ibeep.com",
    ALIAS("@", "apex-loadbalancer.netlify.com.")
  )
} else {
  D_EXTEND("ibeep.com",
    IGNORE("@","CNAME")
  )
}
