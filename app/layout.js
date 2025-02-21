import './globals.css'

export const metadata = {
  title: 'Serveyoo',
  description: 'Cleaning Services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
        </body>
    </html>
  )
}
