# Run `just check` before calling anything done.

default:
    @just --list

install:
    npm ci || npm install

dev:
    npm run dev

build:
    npm run build

# The build is the check: Astro type-checks frontmatter and fails on broken
# content-collection schemas and dead internal links in getStaticPaths.
check: build
