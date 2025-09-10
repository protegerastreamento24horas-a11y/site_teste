import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6 w-full">
          <h2 className="text-lg font-bold text-yellow-800 mb-2">Configuração do HorsePay</h2>
          <p className="text-yellow-700 mb-2">
            Para usar o sistema de pagamentos PIX, você precisa configurar suas credenciais do HorsePay.
          </p>
          <ul className="list-disc pl-5 text-yellow-700 mb-2">
            <li>Copie o arquivo <code className="bg-yellow-100 px-1 rounded">.env.example</code> para <code className="bg-yellow-100 px-1 rounded">.env.local</code></li>
            <li>Obtenha suas credenciais em <a href="https://horsepay.com.br/dashboard/settings/api-keys" target="_blank" rel="noopener noreferrer" className="underline">HorsePay Dashboard</a></li>
            <li>Preencha as variáveis <code className="bg-yellow-100 px-1 rounded">HORSEPAY_CLIENT_KEY</code> e <code className="bg-yellow-100 px-1 rounded">HORSEPAY_CLIENT_SECRET</code></li>
            <li>Configure a variável <code className="bg-yellow-100 px-1 rounded">NEXT_PUBLIC_BASE_URL</code> com a URL do seu site</li>
          </ul>
          <p className="text-yellow-700 text-sm">
            <strong>Importante:</strong> As credenciais são necessárias para autenticação na API do HorsePay.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link 
            href="/pix"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-500 text-white gap-2 hover:bg-green-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            Gerar PIX
          </Link>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}