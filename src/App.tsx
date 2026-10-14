/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ConstellationBackground } from './components/ConstellationBackground.tsx';

/**
 * Official Instagram brand icon matching the reference screenshot card style
 */
function InstagramCardIcon({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <div
      className={`relative shrink-0 flex items-center justify-center rounded-[14px] p-[2.5px] bg-gradient-to-br from-white/30 via-white/10 to-transparent shadow-[0_0_14px_rgba(225,48,108,0.4)] border border-white/15 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full rounded-[11px] overflow-hidden"
        aria-hidden="true"
      >
        <defs>
          <radialGradient
            id="ig-radial-ref"
            cx="20%"
            cy="110%"
            r="140%"
          >
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="12%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="68%" stopColor="#d6249f" />
            <stop offset="100%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#ig-radial-ref)" />
        {/* Outer camera border */}
        <rect
          x="3.2"
          y="3.2"
          width="17.6"
          height="17.6"
          rx="4.8"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.7"
        />
        {/* Lens */}
        <circle
          cx="12"
          cy="12"
          r="4.2"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.7"
        />
        {/* Flash */}
        <circle cx="16.7" cy="7.3" r="1.15" fill="#ffffff" />
      </svg>
    </div>
  );
}

interface ProfileLink {
  id: string;
  name: string;
  url: string;
}

const PROFILES: ProfileLink[] = [
  {
    id: 'juruaia',
    name: 'VAPT-VUPT JURUAIA',
    url: 'https://www.instagram.com/vaptvuptjuruaia/',
  },
  {
    id: 'muzambinho',
    name: 'VAPT-VUPT MUZAMBINHO',
    url: 'https://www.instagram.com/vaptvuptmuzambinho/',
  },
  {
    id: 'breedom',
    name: 'BREEDOM CERVEJARIA',
    url: 'https://www.instagram.com/breedomcervejaria/',
  },
];

export default function App() {
  return (
    <main
      className="relative min-h-[100dvh] w-full bg-black text-white flex flex-col items-center justify-between overflow-x-hidden selection:bg-[#FF6A00]/30 selection:text-white px-5"
      style={{
        paddingTop: 'max(0.75rem, env(safe-area-inset-top, 14px))',
        paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 16px))',
      }}
    >
      {/* Efeito de fundo sutil e moderno (fiel ao enquadramento e posições da captura de referência) */}
      <ConstellationBackground />

      {/* Container Central com o Enquadramento Exato da Captura de Referência */}
      <div className="relative z-10 w-full max-w-[390px] my-auto flex flex-col items-center">
        {/* Linha Superior Discreta de Status / Campanha */}
        <div className="w-full flex items-center justify-start mb-3 px-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16171b]/80 border border-white/10 backdrop-blur-sm text-xs font-medium text-white/90">
            <span className="w-2 h-2 rounded-full bg-[#FF3C00] animate-pulse" />
            <span>Sorteio Oficial 30 Litros</span>
          </div>
        </div>

        {/* 1. LOGO PRINCIPAL (Centralizada com enquadramento idêntico ao da referência) */}
        <header className="relative w-full flex justify-center items-center mb-3">
          <div
            className="logo-orange-glow absolute top-1/2 left-1/2 w-[180px] h-[130px] rounded-full blur-[42px] pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 60, 0, 0.35) 0%, rgba(255, 106, 0, 0.12) 55%, transparent 75%)',
            }}
            aria-hidden="true"
          />

          <img
            src="/logo.png"
            alt="30 Litros de Chopp Grátis"
            className="relative z-10 w-full max-w-[165px] sm:max-w-[175px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
            width={488}
            height={371}
            loading="eager"
            fetchPriority="high"
          />
        </header>

        {/* 2. TEXTO ENTRE A LOGO E OS BOTÕES */}
        <section className="w-full flex flex-col items-center mb-3.5 px-1">
          <p className="text-white text-[13.5px] sm:text-[14.5px] font-medium leading-snug text-center text-balance select-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Preencha o cupom de papel com suas informações e siga os perfis abaixo para concorrer.
          </p>
          {/* Linha discreta laranja de 30px de largura e 2px de altura */}
          <div
            className="w-[30px] h-[2px] bg-[#FF6A00] rounded-full mt-2 opacity-90 shadow-[0_0_8px_rgba(255,106,0,0.6)]"
            aria-hidden="true"
          />
        </section>

        {/* 3. BOTÕES SEGUINDO EXATAMENTE A REFERÊNCIA (CARD ESCURO, ÍCONE ELEVADO, SETA EXTERNA ↗) */}
        <nav
          aria-label="Perfis do Instagram para seguir"
          className="w-full flex flex-col gap-3 mb-4"
        >
          {PROFILES.map((profile, index) => (
            <a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Seguir ${profile.name} no Instagram`}
              className="ref-card-button group relative w-full h-[68px] sm:h-[72px] rounded-[20px] flex items-center justify-between px-3.5 sm:px-4 cursor-pointer no-underline overflow-hidden"
            >
              {/* Feixe sutil de brilho branco sequencial */}
              <div
                className={`white-shine-beam shine-delay-${index}`}
                aria-hidden="true"
              />

              {/* Lado Esquerdo: Ícone Instagram com gradiente oficial e halo suave */}
              <InstagramCardIcon className="w-[46px] h-[46px] relative z-10" />

              {/* Centro: Nome do Perfil em Branco */}
              <span className="relative z-10 flex-1 text-left text-white font-semibold text-[15.5px] sm:text-[16.5px] tracking-tight truncate pl-3.5 pr-2 select-none">
                {profile.name}
              </span>

              {/* Lado Direito: Caixa com seta diagonal externa ↗ conforme a captura */}
              <div
                className="relative z-10 w-[40px] h-[40px] rounded-[12px] bg-[#111215] border border-white/10 flex items-center justify-center shrink-0 text-white/80 group-hover:text-white group-active:text-white transition-colors shadow-inner"
                aria-hidden="true"
              >
                <ArrowUpRight className="w-4 h-4 stroke-[2.4]" />
              </div>
            </a>
          ))}
        </nav>

        {/* 4. BLOCO INFERIOR (Sem caixa preta atrás do texto e da logo) */}
        <footer className="w-full flex flex-col items-center pt-1 pb-1">
          {/* Texto Abaixo dos Botões */}
          <h2 className="text-white font-bold text-[14.5px] sm:text-[15.5px] tracking-wide text-center uppercase select-none leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            QUANTO MAIS COMPRAR,<br />
            MAIS CHANCES DE GANHAR!
          </h2>

          {/* Detalhe decorativo discreto em laranja */}
          <div
            className="w-[28px] h-[2px] bg-[#FF6A00] rounded-full mt-1.5 mb-2.5 opacity-90 shadow-[0_0_8px_rgba(255,106,0,0.6)]"
            aria-hidden="true"
          />

          {/* 5. Logo Final no Rodapé */}
          <img
            src="/logo-final.png"
            alt="Breedom Cervejaria e Parceiros"
            className="w-full max-w-[155px] sm:max-w-[170px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            width={636}
            height={197}
            loading="lazy"
          />
        </footer>
      </div>
    </main>
  );
}
