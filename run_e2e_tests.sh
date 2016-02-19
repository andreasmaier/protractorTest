#!/bin/bash

webdriver-manager start > /dev/null 2>&1 &

WEBDRIVER_PID=$!

node ./bin/server.js > /dev/null 2>&1 &

SERVER_PID=$!

while ! nc -vz localhost 4444; do sleep 1; done
 
echo 'Selenium-RC server is open for business on port 4444!'

protractor protractor.conf.js

TEST_RESULT=$?

curl -s -L http://localhost:4444/selenium-server/driver?cmd=shutDownSeleniumServer
kill $SERVER_PID

exit $TEST_RESULT