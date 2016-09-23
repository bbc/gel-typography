#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

git clone https://$GH_TOKEN@github.com/bbc/gel-typography.css.git
git config --global user.name "Travis CI"
git config --global user.email "$EMAIL"

npm run dist
mv dist/gel-typography.css gel-typography.css/gel-typography.css
mv dist/gel-typography.min.css gel-typography.css/gel-typography.min.css

cd gel-typography.css
git add -A .
git commit -m "Built dist from bbc/gel-typography $TRAVIS_COMMIT"
git push -q https://$GH_TOKEN@github.com/bbc/gel-typography.css.git master
cd ..
git stash
