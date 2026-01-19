# Script para iniciar el servidor de desarrollo
Set-Location $PSScriptRoot

Write-Host "Iniciando servidor de desarrollo Vite..." -ForegroundColor Green
Write-Host "Presiona Ctrl+C para detener el servidor`n" -ForegroundColor Yellow

# Intentar ejecutar npm run dev
if (Get-Command npm -ErrorAction SilentlyContinue) {
    npm run dev
} else {
    Write-Host "npm no está disponible en el PATH." -ForegroundColor Yellow
    Write-Host "Intentando ejecutar vite directamente...`n" -ForegroundColor Yellow
    
    # Buscar node en ubicaciones comunes
    $nodePaths = @(
        "$env:ProgramFiles\nodejs\node.exe",
        "${env:ProgramFiles(x86)}\nodejs\node.exe",
        "$env:LOCALAPPDATA\Programs\nodejs\node.exe"
    )
    
    $nodePath = $nodePaths | Where-Object { Test-Path $_ } | Select-Object -First 1
    
    if ($nodePath -and (Test-Path ".\node_modules\vite\bin\vite.js")) {
        & $nodePath ".\node_modules\vite\bin\vite.js"
    } else {
        Write-Host "Error: No se encontró Node.js o Vite." -ForegroundColor Red
        Write-Host "Por favor:" -ForegroundColor Yellow
        Write-Host "  1. Asegúrate de tener Node.js instalado" -ForegroundColor Yellow
        Write-Host "  2. Ejecuta 'npm install' en este directorio" -ForegroundColor Yellow
        Write-Host "  3. Luego ejecuta 'npm run dev' manualmente" -ForegroundColor Yellow
        exit 1
    }
}
