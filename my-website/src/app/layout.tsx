import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row-reverse bg-slate-500">
            <button className="rounded bg-white w-10 h-10" >
              Light
            </button>
        </div>
        {children}
      </body>
    </html>
  )
}
