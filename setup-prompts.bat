@echo off
REM Setup script to integrate project prompts with VS Code
REM This script creates a symlink from VS Code prompts to project prompts folder

set "VSCODE_PROMPTS_DIR=%APPDATA%\Code\User\prompts"
set "PROJECT_PROMPTS_DIR=%~dp0src\prompts"

echo Setting up VS Code prompts integration by linking to project folder...
echo.

REM Create VS Code prompts directory if it doesn't exist
if not exist "%VSCODE_PROMPTS_DIR%" (
    mkdir "%VSCODE_PROMPTS_DIR%"
    echo Created VS Code prompts directory: %VSCODE_PROMPTS_DIR%
)

REM Remove existing prompts directory if it exists and create symlink
if exist "%VSCODE_PROMPTS_DIR%" (
    rmdir "%VSCODE_PROMPTS_DIR%" 2>nul
)

mklink /D "%VSCODE_PROMPTS_DIR%" "%PROJECT_PROMPTS_DIR%" >nul 2>&1
if %errorlevel% neq 0 (
    echo Symlink creation failed. Falling back to copying files...
    mkdir "%VSCODE_PROMPTS_DIR%"
    for %%f in ("%PROJECT_PROMPTS_DIR%\*.prompt.md") do (
        copy "%%f" "%VSCODE_PROMPTS_DIR%\" >nul
        echo Copied %%~nxf to VS Code prompts
    )
) else (
    echo Created symlink: %VSCODE_PROMPTS_DIR% -> %PROJECT_PROMPTS_DIR%
)

echo.
echo Setup complete! VS Code will now use prompts directly from the project folder.
echo Changes to prompts in src/prompts/ will be immediately available in VS Code.
echo Note: Restart VS Code if it's currently open.
pause