#!/bin/bash

echo "🔧 Formatting all files with Prettier..."
npx prettier . --write

echo ""
echo "✅ Checking if all files are properly formatted..."
npx prettier . --check

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCCESS: All files are properly formatted!"
    echo "🚀 Adding, committing, and pushing..."
    
    git add .
    git commit -m "Update site content and formatting"
    git push
    
    echo "✅ Done!"
else
    echo ""
    echo "❌ ERROR: Some formatting issues remain"
    echo "Please check the output above"
    exit 1
fi 