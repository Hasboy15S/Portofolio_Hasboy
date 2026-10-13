import { useEffect } from 'react'

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy - HatakuBot'
    
    // Ensure meta description is set
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Privacy policy for HatakuBot, a personal Telegram assistant that connects to the owner's Google Drive."
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a1020] text-[#e8eefc] font-sans antialiased selection:bg-[#00bfbf] selection:text-[#0a1020]">
      <main className="max-w-[760px] mx-auto px-5 py-12 md:py-16 text-[15px] leading-[1.7]">
        <a
          href="/"
          className="inline-block mb-6 text-[#4f8cff] hover:underline font-medium text-sm transition-colors"
        >
          &larr; Back to hataku.my.id
        </a>

        <h1 className="text-3xl font-bold tracking-tight mb-1 text-[#e8eefc]">
          Privacy Policy &mdash; <span className="text-[#00bfbf]">HatakuBot</span>
        </h1>
        <p className="text-[#9fb0d3] text-sm mb-6">Last updated: October 13, 2026</p>

        <div className="bg-[#101a33] border border-[#1c2a4d] rounded-xl p-4 my-4 text-[#e8eefc]">
          <strong className="text-white">Summary:</strong> HatakuBot is a personal project built and used only by its developer,
          Muhammad Hasbi Takumi. It connects to the developer's own Google Drive to help search and read files
          through a private Telegram bot. It is not offered to the public, and it does not sell or share data.
        </div>

        <h2 className="text-lg font-semibold mt-9 mb-2 pt-2 border-t border-[#1c2a4d] text-[#00bfbf]">
          1. About this application
        </h2>
        <p className="mb-4">
          HatakuBot is a private assistant that runs on the developer's own computer. It receives messages from
          a single authorized Telegram account and can search, read, and organize files in the developer's own
          Google Drive account, as well as keep personal notes and reminders.
          The app is used by one person only (its owner).
        </p>

        <h2 className="text-lg font-semibold mt-9 mb-2 pt-2 border-t border-[#1c2a4d] text-[#00bfbf]">
          2. Information the app accesses
        </h2>
        <p className="mb-2">When the owner signs in with Google, the app requests access to Google user data as follows:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>
            <strong>Google Drive files and metadata</strong> (file names, folders, and file content) via the{' '}
            <code className="bg-[#101a33] border border-[#1c2a4d] rounded px-1.5 py-0.5 text-xs text-[#e8eefc] font-mono">
              drive.readonly
            </code>{' '}
            scope, used only to search and read files when the owner asks.
          </li>
          <li>
            <strong>Files created by the app</strong> via the{' '}
            <code className="bg-[#101a33] border border-[#1c2a4d] rounded px-1.5 py-0.5 text-xs text-[#e8eefc] font-mono">
              drive.file
            </code>{' '}
            scope, used only to create or upload files and folders that the owner requests.
          </li>
          <li>
            <strong>Telegram messages</strong> sent by the owner to the bot, used to understand and answer requests.
          </li>
        </ul>
        <p className="mb-4">The app does not access Gmail, Contacts, Calendar, or any other Google service.</p>

        <h2 className="text-lg font-semibold mt-9 mb-2 pt-2 border-t border-[#1c2a4d] text-[#00bfbf]">
          3. How the information is used
        </h2>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>To search, list, read, and summarize the owner's Drive files on request.</li>
          <li>To create folders or upload files on request.</li>
          <li>To store the owner's own notes, to-do items, and reminders.</li>
        </ul>
        <p className="mb-4">
          When the owner asks a question that needs AI, the relevant message and any file content the owner
          asked the bot to read may be sent to an AI model provider (Google Gemini API) in order to generate a
          response. This only happens in response to the owner's own request.
        </p>

        <h2 className="text-lg font-semibold mt-9 mb-2 pt-2 border-t border-[#1c2a4d] text-[#00bfbf]">
          4. Storage and security
        </h2>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>
            OAuth tokens and credentials are stored locally on the owner's computer, in files that are excluded
            from source control, and are never published.
          </li>
          <li>Notes and settings are stored locally on the owner's computer.</li>
          <li>The bot only responds to the owner's Telegram account; messages from any other account are rejected.</li>
          <li>Actions that modify Google Drive require explicit confirmation from the owner.</li>
        </ul>

        <h2 className="text-lg font-semibold mt-9 mb-2 pt-2 border-t border-[#1c2a4d] text-[#00bfbf]">
          5. Sharing and selling of data
        </h2>
        <p className="mb-4">
          The developer does not sell, rent, or share Google user data with third parties, and does not use it for
          advertising. Data is shared only with the service providers strictly needed to run the app as described
          above (Telegram to deliver messages, and the Gemini API to generate AI responses).
        </p>

        <h2 className="text-lg font-semibold mt-9 mb-2 pt-2 border-t border-[#1c2a4d] text-[#00bfbf]">
          6. Google API Services User Data Policy
        </h2>
        <p className="mb-4">
          HatakuBot's use and transfer of information received from Google APIs adheres to the{' '}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4f8cff] underline hover:text-blue-300 transition-colors"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>

        <h2 className="text-lg font-semibold mt-9 mb-2 pt-2 border-t border-[#1c2a4d] text-[#00bfbf]">
          7. Retention and deletion
        </h2>
        <p className="mb-4">
          The owner can delete local notes and tokens at any time by removing the app's data files. Access can be
          revoked at any time from the Google Account permissions page:{' '}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4f8cff] underline hover:text-blue-300 transition-colors"
          >
            myaccount.google.com/permissions
          </a>
          .
        </p>

        <h2 className="text-lg font-semibold mt-9 mb-2 pt-2 border-t border-[#1c2a4d] text-[#00bfbf]">
          8. Changes to this policy
        </h2>
        <p className="mb-4">This policy may be updated as the project changes. The date at the top shows the latest revision.</p>

        <h2 className="text-lg font-semibold mt-9 mb-2 pt-2 border-t border-[#1c2a4d] text-[#00bfbf]">
          9. Contact
        </h2>
        <p className="mb-4">
          Questions about this policy can be sent to{' '}
          <a
            href="mailto:muhammadhasbi.t@gmail.com"
            className="text-[#4f8cff] underline hover:text-blue-300 transition-colors"
          >
            muhammadhasbi.t@gmail.com
          </a>
          .
        </p>

        <h2 className="text-lg font-semibold mt-9 mb-2 pt-2 border-t border-[#1c2a4d] text-[#00bfbf]">
          Ringkasan (Bahasa Indonesia)
        </h2>
        <p className="mb-6">
          HatakuBot adalah proyek pribadi yang hanya dipakai oleh pembuatnya. Aplikasi ini mengakses Google Drive
          milik pemilik sendiri untuk mencari dan membaca file lewat bot Telegram pribadi. Data tidak dijual atau
          dibagikan ke pihak lain. Token disimpan lokal di komputer pemilik, dan akses bisa dicabut kapan saja
          melalui halaman izin akun Google.
        </p>

        <footer className="mt-12 pt-6 border-t border-[#1c2a4d] text-[#9fb0d3] text-sm text-center md:text-left">
          &copy; 2026 Muhammad Hasbi Takumi &middot; hataku.my.id
        </footer>
      </main>
    </div>
  )
}
