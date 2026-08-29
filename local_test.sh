#!/bin/bash
set -euo pipefail

eval "$(rbenv init - zsh)"

if [[ "${1:-}" == "--build" ]]; then
  bundle exec jekyll build --config _config.yml,_config_local.yml
else
  bundle exec jekyll serve --livereload --config _config.yml,_config_local.yml
fi
