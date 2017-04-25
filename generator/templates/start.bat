@echo off
echo "*****************************************************************************"
echo "*                             Welcome to Jud                               *"
echo "*                                                                           *"
echo "*             A framework for building Mobile cross-platform UI.            *"
echo "*                                                                           *"
echo "*                      https://github.com/alibaba/jud                      *"
echo "*****************************************************************************"

pushd %~dp0
npm run serve
popd
