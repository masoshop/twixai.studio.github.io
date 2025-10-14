import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determina la ruta base para el despliegue en GitHub Pages.
// La variable de entorno GITHUB_REPOSITORY está disponible en GitHub Actions.
// Está en el formato 'propietario/nombre-del-repositorio'. Necesitamos '/nombre-del-repositorio/'.
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Establece la ruta base para el enrutamiento y la carga de activos.
  // Esto es crucial para los despliegues en GitHub Pages donde el sitio se sirve desde una subruta.
  // Para desarrollo local, usará '/', y para la compilación en GitHub Actions, usará '/nombre-del-repositorio/'.
  base: process.env.GITHUB_REPOSITORY ? `/${repoName}/` : '/',
})
