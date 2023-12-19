#!/usr/bin/env bash
set -euo pipefail

OUTFILE="${GITHUB_OUTPUT:="$(mktemp)"}"

# SYNTAX:
#   write OUTPUT_VAR OUTPUT
_write() {
    OUTPUT_VAR="${1}"
    shift
if [[ ! -z "${*}" ]] ; then
    tee -a "${OUTFILE}"<<END_HEREDOC

${OUTPUT_VAR}<<EOF
${*}
EOF

END_HEREDOC
else
    tee -a "${OUTFILE}"<<END_HEREDOC
${OUTPUT_VAR}<<EOF
EOF
END_HEREDOC
fi
}

run() {
    catch STDOUT STDERR "${@}"
    _write stdout "${STDOUT}"
    _write stderr "${STDERR}"
}

# https://stackoverflow.com/questions/11027679
# SYNTAX:
#   catch STDOUT_VARIABLE STDERR_VARIABLE COMMAND [ARG1[ ARG2[ ...[ ARGN]]]]
catch() {
    {
        IFS=$'\n' read -r -d '' "${1}";
        IFS=$'\n' read -r -d '' "${2}";
        (IFS=$'\n' read -r -d '' _ERRNO_; return "${_ERRNO_}");
    } < <((printf '\0%s\0%d\0' "$( ( ( ({ shift 2; "${@}"; echo "${?}" 1>&3-; } | tr -d '\0' 1>&4-) 4>&2- 2>&1- | tr -d '\0' 1>&4-) 3>&1- | exit "$(cat)") 4>&1-)" "${?}" 1>&2) 2>&1)
}

preview(){
    run dnscontrol --no-colors preview
}

push(){
    run dnscontrol --no-colors push
}

COMMAND="${1}"
shift
"${COMMAND}" "${@}"