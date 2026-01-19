# Script para publicar el proyecto en GitHub Pages
# Ejecutar desde el directorio web del proyecto

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Despliegue a GitHub Pages" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Paso 1: Construyendo el proyecto..." -ForegroundColor Yellow
wsl bash -c "cd /mnt/c/Users/Alba/MiWebPortfolio/AlbaM9_Portfolio/web && npm run build"

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ Build completado exitosamente" -ForegroundColor Green
    
    Write-Host "`nPaso 2: Desplegando a GitHub Pages..." -ForegroundColor Yellow
    wsl bash -c "cd /mnt/c/Users/Alba/MiWebPortfolio/AlbaM9_Portfolio/web && npm run deploy"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n========================================" -ForegroundColor Cyan
        Write-Host "✓ ¡Despliegue completado exitosamente!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host "`nTu sitio debería estar disponible en:" -ForegroundColor Yellow
        Write-Host "https://albam9.github.io/AlbaM9_Portfolio/" -ForegroundColor Cyan
        Write-Host "`nNota: Puede tardar unos minutos en actualizarse" -ForegroundColor Gray
    } else {
        Write-Host "`n✗ Error al desplegar" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "`n✗ Error al construir el proyecto" -ForegroundColor Red
    exit 1
}
