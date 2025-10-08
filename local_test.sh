#!/bin/bash
eval "$(rbenv init - zsh)" && rm -rf _site && bundle exec jekyll serve --livereload
