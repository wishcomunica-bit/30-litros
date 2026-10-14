/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * Constellation nodes matching the exact reference screenshot:
 * Deep black canvas with glowing red-orange flares and faint dashed lines.
 */
export function ConstellationBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black"
      aria-hidden="true"
    >
      <div className="constellation-slow-drift w-[110%] h-[110%] -left-[5%] -top-[5%] relative">
        <svg
          className="w-full h-full object-cover opacity-85"
          viewBox="0 0 400 850"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="ref-flare-red" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF3000" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#D92200" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#801000" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="ref-flare-orange" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#E63800" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#991C00" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Faint Dashed Connecting Lines as seen in the reference screenshot */}
          <g stroke="rgba(230, 45, 15, 0.22)" strokeWidth="0.8" strokeDasharray="3 5">
            <line x1="38" y1="110" x2="60" y2="215" />
            <line x1="60" y1="215" x2="330" y2="185" />
            <line x1="330" y1="185" x2="375" y2="495" />
            <line x1="60" y1="215" x2="25" y2="470" stroke="rgba(230, 45, 15, 0.15)" />
            <line x1="25" y1="470" x2="310" y2="780" />
            <line x1="375" y1="495" x2="310" y2="780" />
          </g>

          {/* Node 1: Top Left (near top badge) */}
          <g className="animate-pulse" style={{ animationDuration: '6s' }}>
            <circle cx="38" cy="110" r="18" fill="url(#ref-flare-red)" />
            <circle cx="38" cy="110" r="2" fill="#FFFFFF" />
          </g>

          {/* Node 2: Upper Left near Logo with concentric ring */}
          <g className="animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.2s' }}>
            <circle cx="60" cy="215" r="22" fill="url(#ref-flare-orange)" />
            <circle
              cx="60"
              cy="215"
              r="8"
              stroke="rgba(255, 70, 20, 0.75)"
              strokeWidth="0.9"
              fill="none"
            />
            <circle cx="60" cy="215" r="2.2" fill="#FFFFFF" />
          </g>

          {/* Node 3: Upper Right of Logo */}
          <g className="animate-pulse" style={{ animationDuration: '6.5s', animationDelay: '2.5s' }}>
            <circle cx="330" cy="185" r="16" fill="url(#ref-flare-red)" />
            <circle cx="330" cy="185" r="1.8" fill="#FFFFFF" />
          </g>

          {/* Node 4: Middle Left with ring */}
          <g className="animate-pulse" style={{ animationDuration: '7.5s', animationDelay: '0.8s' }}>
            <circle cx="25" cy="470" r="20" fill="url(#ref-flare-orange)" />
            <circle
              cx="25"
              cy="470"
              r="7.5"
              stroke="rgba(255, 80, 30, 0.7)"
              strokeWidth="0.9"
              fill="none"
            />
            <circle cx="25" cy="470" r="2" fill="#FFFFFF" />
          </g>

          {/* Node 5: Middle Right between buttons */}
          <g className="animate-pulse" style={{ animationDuration: '6.8s', animationDelay: '1.8s' }}>
            <circle cx="375" cy="495" r="20" fill="url(#ref-flare-red)" />
            <circle cx="375" cy="495" r="1.8" fill="#FFFFFF" />
          </g>

          {/* Node 6: Bottom Right with concentric ring */}
          <g className="animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }}>
            <circle cx="310" cy="780" r="24" fill="url(#ref-flare-orange)" />
            <circle
              cx="310"
              cy="780"
              r="9"
              stroke="rgba(255, 80, 30, 0.75)"
              strokeWidth="0.9"
              fill="none"
            />
            <circle cx="310" cy="780" r="2.2" fill="#FFFFFF" />
          </g>
        </svg>
      </div>
    </div>
  );
}
