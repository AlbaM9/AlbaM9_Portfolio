# Script para actualizar dependencias y corregir vulnerabilidades de seguridad
# Ejecutar desde el directorio web del proyecto

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Actualización de Dependencias de Seguridad" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Verificando vulnerabilidades actuales..." -ForegroundColor Yellow
wsl bash -c "cd /mnt/c/Users/Alba/MiWebPortfolio/AlbaM9_Portfolio/web && npm audit --audit-level=moderate 2>&1 | head -50"

Write-Host "`nCorrigiendo permisos en node_modules..." -ForegroundColor Yellow
wsl bash -c "cd /mnt/c/Users/Alba/MiWebPortfolio/AlbaM9_Portfolio/web && chmod -R u+w node_modules 2>/dev/null || true"

Write-Host "`nInstalando dependencias actualizadas..." -ForegroundColor Green
wsl bash -c "cd /mnt/c/Users/Alba/MiWebPortfolio/AlbaM9_Portfolio/web && npm install"

Write-Host "`nIntentando corregir vulnerabilidades automáticamente..." -ForegroundColor Green
wsl bash -c "cd /mnt/c/Users/Alba/MiWebPortfolio/AlbaM9_Portfolio/web && npm audit fix --force"

Write-Host "`nVerificando vulnerabilidades restantes..." -ForegroundColor Yellow
wsl bash -c "cd /mnt/c/Users/Alba/MiWebPortfolio/AlbaM9_Portfolio/web && npm audit --audit-level=moderate"

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "¡Proceso completado!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
