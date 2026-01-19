# Script para actualizar dependencias y verificar vulnerabilidades
# Ejecutar desde el directorio web del proyecto

Write-Host "Instalando dependencias actualizadas..." -ForegroundColor Green
npm install

Write-Host "`nVerificando vulnerabilidades..." -ForegroundColor Green
npm audit

Write-Host "`nIntentando corregir vulnerabilidades automáticamente..." -ForegroundColor Green
npm audit fix

Write-Host "`nVerificando nuevamente..." -ForegroundColor Green
npm audit

Write-Host "`n¡Proceso completado!" -ForegroundColor Green
