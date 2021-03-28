// Dependencies
import { ServerStyleSheet } from 'styled-components'
import Document, { 
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

// Overwrite nextjs default document
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    
    // Config styled components for SSR
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {

      // Enhancing render page with styled components
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(
          <App {...props} />
        )
      })

      // Return enhanced page
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps, styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )}

    } finally {
      sheet.seal()
    }
  }

  // Render page
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
} 