// See https://docs.dnscontrol.org/advanced-features/cli-variables
CLI_DEFAULTS({
  "bind": "false",
  "axfr": "false"
});


D("ibeep.com", REG_CHANGEME
  , DnsProvider(DSP_CLOUDFLARE)
  , DefaultTTL(1)
)
if (bind=="true") {
  D_EXTEND("ibeep.com"
    , DnsProvider(DSP_BIND, 0)
  )
}

if (axfr=="true") {
  D_EXTEND("ibeep.com"
    , DnsProvider(AXFRDDNS,0)
  )
}
