#!/bin/bash

ALIAS="\nconst window = require('./WindowPrompt.js');\n\n"

CODE=`cat received.js`;


echo -e "`echo $ALIAS``cat received.js`" > ToJudge.js

node ToJudge.js