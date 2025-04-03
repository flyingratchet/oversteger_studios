#!/bin/bash

echo "Pushing latest changes to GitHub..."
git add .
git commit -m "Update site content"
git push origin master

echo "Deploying to server..."
ssh -p 7822 hopperwi@106.0.62.83 << 'ENDSSH'
  cd ~/overstegerstudios.com
  git pull origin master
  bin/grav clear-cache
ENDSSH

echo "✅ Deployment complete!"
