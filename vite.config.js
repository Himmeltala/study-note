import vue from '@vitejs/plugin-vue'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItPrism from 'markdown-it-prism'
import { URL, fileURLToPath } from 'node:url'
import Markdown from 'unplugin-vue-markdown/vite'
import { defineConfig } from 'vite'
import cesium from 'vite-plugin-cesium'

export default defineConfig({
  plugins: [
    cesium(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      include: [/\.md$/],
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        md.use(MarkdownItAnchor, {
          permalink: MarkdownItAnchor.permalink.linkInsideHeader({
            symbol: '#',
            placement: 'before',
            ariaHidden: true,
          }),
          level: [1, 2, 3],
        })
        md.use(MarkdownItPrism, {
          plugins: ['line-numbers', 'highlight-keywords'],
        })
      },
      wrapperClasses: 'markdown-body',
    }),
  ],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
