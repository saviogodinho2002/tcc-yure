#!/bin/bash

ALIAS="\nconst window = require('./Window.js');\n\n"


echo -e "`echo $ALIAS``cat received.js`" > ToJudge.js

node ToJudge.js