#!/bin/bash

echo "Deploying latest changes to server..."

ssh -T -p 7822 hopperwi@106.0.62.83 << 'ENDSSH'
  cd ~/overstegerstudios.com
  git pull origin master
  php bin/grav clearcache
ENDSSH

echo "✅ Deployment complete!"