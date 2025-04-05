#!/bin/bash

# Script para limpiar archivos temporales
rm -rf .next
rm -rf out
rm -f *.tsbuildinfo
rm -f tsconfig.tsbuildinfo
rm -rf .cache

# Eliminar archivos específicos que aparecen en tus imágenes
rm -f app-build-manifest.json
rm -f build-manifest.json
rm -f middleware-build-manifest.js
rm -f app-paths-manifest.json
rm -f webpack-runtime.js
rm -f trace
rm -rf **/static/chunks/
rm -rf **/static/css/
rm -rf **/types/app/
rm -rf **/server/app/
rm -f *-hot-update.json
rm -rf **/vendor-chunks/

echo "Archivos temporales limpiados."
