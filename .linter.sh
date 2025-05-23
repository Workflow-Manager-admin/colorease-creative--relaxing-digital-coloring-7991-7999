#!/bin/bash
cd /home/kavia/workspace/code-generation/colorease-creative--relaxing-digital-coloring-7991-7999/main_container_for_colorease
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

