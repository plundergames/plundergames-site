// Vector placeholders for the scene art (converted from the design canvas). Swap for generated images later.
export function HarborScene() {
  return (
<svg className="scene-svg" aria-hidden="true" viewBox="0 0 1280 900" preserveAspectRatio="xMidYMax slice" >
<defs>
<linearGradient id="seaK" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#232A72"/><stop offset="1" stopColor="#0A0D2C"/></linearGradient>
<radialGradient id="moonPathK"><stop offset="0" stopColor="#F2EEFF" stopOpacity=".5"/><stop offset="1" stopColor="#F2EEFF" stopOpacity="0"/></radialGradient>
<linearGradient id="beamK" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stopColor="#FFF4D0" stopOpacity=".5"/><stop offset="1" stopColor="#FFF4D0" stopOpacity="0"/></linearGradient>
<radialGradient id="lampK"><stop offset="0" stopColor="#FFD890" stopOpacity=".85"/><stop offset="1" stopColor="#FFB24D" stopOpacity="0"/></radialGradient>
</defs>


<g fill="#FFFFFF"><circle className="star" cx="150" cy="120" r="2"/><circle className="star" cx="360" cy="70" r="1.500" style={{ animationDelay: "1s" }}/><circle className="star" cx="560" cy="170" r="2" style={{ animationDelay: "2s" }}/><circle className="star" cx="720" cy="90" r="1.500" style={{ animationDelay: ".5s" }}/><circle className="star" cx="1180" cy="110" r="2" style={{ animationDelay: "3s" }}/><circle className="star" cx="60" cy="300" r="1.500" style={{ animationDelay: "1.500s" }}/><circle className="star" cx="1230" cy="320" r="1.500" style={{ animationDelay: "2.500s" }}/></g>

<g fill="#7A68C0" opacity=".28"><ellipse cx="880" cy="250" rx="140" ry="20"/><ellipse cx="960" cy="236" rx="90" ry="16"/><ellipse cx="260" cy="400" rx="170" ry="18"/><ellipse cx="1100" cy="380" rx="150" ry="16"/></g>

<g fill="none" stroke="#E8E0FF" strokeWidth="2.500" strokeLinecap="round"><path d="M860 130 q10 -10 20 0 q10 -10 20 0"/><path d="M910 160 q8 -8 16 0 q8 -8 16 0"/><path d="M830 170 q7 -7 14 0 q7 -7 14 0"/></g>


<g fill="#3A2F7C" opacity=".8"><path d="M0 594 L0 566 L80 520 L160 560 L250 500 L340 562 L430 532 L520 594 Z"/><path d="M780 594 L860 548 L940 574 L1020 524 L1100 562 L1180 534 L1280 572 L1280 594 Z"/></g>


<g fill="#221D5A">
<path d="M590 594 C640 578 700 572 760 574 C820 572 870 580 920 594 Z"/>
<rect x="670" y="538" width="190" height="40"/>
<rect x="650" y="498" width="36" height="80"/><rect x="740" y="482" width="40" height="96"/><rect x="838" y="504" width="34" height="74"/>
<polygon points="738,482 760,448 782,482"/>
<path d="M650 495H686M838 501H872" stroke="#221D5A" strokeWidth="10" strokeDasharray="8 8" fill="none"/>
</g>
<g fill="#FFC060"><rect x="756" y="510" width="8" height="14" className="flick"/><rect x="660" y="524" width="8" height="12"/><rect x="850" y="528" width="8" height="12" className="flick" style={{ animationDelay: "1s" }}/><rect x="760" y="548" width="8" height="12"/></g>


<rect x="0" y="594" width="1280" height="306" fill="url(#seaK)"/>
<ellipse cx="1000" cy="660" rx="50" ry="96" fill="url(#moonPathK)"/>
<g stroke="#F2EEFF" strokeWidth="2" opacity=".35" fill="none" strokeLinecap="round"><path d="M980 612 h40"/><path d="M984 632 h32"/><path d="M976 656 h46"/><path d="M986 684 h26"/></g>
<g stroke="#B7AEEA" strokeWidth="2" opacity=".3" fill="none" strokeLinecap="round"><path d="M60 650 q12 -8 24 0 t24 0"/><path d="M180 700 q12 -8 24 0 t24 0"/><path d="M420 760 q12 -8 24 0 t24 0"/><path d="M700 720 q12 -8 24 0 t24 0"/><path d="M820 780 q12 -8 24 0 t24 0"/><path d="M560 840 q12 -8 24 0 t24 0"/></g>
<ellipse cx="640" cy="606" rx="560" ry="22" fill="#9A86E0" opacity=".14"/>


<polygon className="beam" points="1122,519 480,440 480,620" fill="url(#beamK)"/>
<path d="M1000 900 L1024 770 C1048 724 1080 704 1112 708 C1152 702 1190 722 1212 764 L1250 900 Z" fill="#0A0C26"/>
<polygon points="1096,708 1148,708 1138,540 1106,540" fill="#2C2868"/>
<polygon points="1104,575 1140,575 1141,595 1103,595" fill="#CFC6F5" opacity=".85"/>
<polygon points="1100,640 1144,640 1145,660 1099,660" fill="#CFC6F5" opacity=".85"/>
<rect x="1098" y="530" width="48" height="10" fill="#0A0C26"/>
<rect x="1108" y="508" width="28" height="22" fill="#FFE2A6"/>
<polygon points="1104,508 1122,484 1140,508" fill="#0A0C26"/>
<circle cx="1122" cy="519" r="70" fill="url(#lampK)" className="flick"/>


<g transform="translate(380 598)"><g className="ship-g">
<ellipse cx="160" cy="124" rx="150" ry="8" fill="#000" opacity=".3"/>
<path d="M-34 58 L12 74" stroke="#0D0F2E" strokeWidth="5" strokeLinecap="round"/>
<path d="M10 74 L304 74 C294 98 262 116 222 118 L92 118 C50 114 22 96 10 74 Z" fill="#0D0F2E"/>
<rect x="252" y="50" width="52" height="26" fill="#0D0F2E"/>
<rect x="80" y="-24" width="6" height="100" fill="#0D0F2E"/><rect x="160" y="-54" width="6" height="130" fill="#0D0F2E"/><rect x="232" y="-10" width="5" height="64" fill="#0D0F2E"/>
<path d="M72 -6 H130 C134 18 132 36 128 46 H72 Z" fill="#BFB4F0" opacity=".9"/>
<path d="M146 -42 H196 C200 -12 198 18 194 38 H146 Z" fill="#CFC6F5" opacity=".92"/>
<path d="M222 2 H256 C258 18 256 34 254 44 H222 Z" fill="#BFB4F0" opacity=".9"/>
<g fill="#0D0F2E"><rect x="66" y="-8" width="70" height="4"/><rect x="140" y="-44" width="62" height="4"/><rect x="216" y="0" width="46" height="4"/></g>
<path d="M166 -54 L200 -46 L166 -38 Z" fill="#8A2030"/>
<circle cx="296" cy="48" r="4" fill="#FFC060"/><circle cx="296" cy="48" r="22" fill="url(#lampK)"/>
</g></g>


<path d="M0 900 L0 690 C50 680 80 640 140 650 C190 658 214 612 280 622 C336 630 356 676 410 706 C456 730 500 770 520 900 Z" fill="#0A0C26"/>
<ellipse cx="376" cy="570" rx="190" ry="150" fill="url(#lampK)" opacity=".4"/>
<g fill="#0A0C26">
<path d="M268 626 L276 546 C276 524 288 512 304 512 C320 512 332 524 332 546 L342 626 Z"/>
<circle cx="304" cy="492" r="16"/>
<polygon points="256,490 304,460 352,490 340,496 268,496"/>
<path d="M346 482 C360 462 372 466 378 478 C366 478 356 480 346 486 Z"/>
<path d="M276 552 L232 592" stroke="#0A0C26" strokeWidth="9" strokeLinecap="round" fill="none"/>
<path d="M332 552 L368 566" stroke="#0A0C26" strokeWidth="9" strokeLinecap="round" fill="none"/>
</g>
<path d="M232 592 L192 512" stroke="#0A0C26" strokeWidth="5" strokeLinecap="round"/>
<path d="M232 592 L192 512" stroke="#C9C2FF" strokeWidth="1.500" strokeLinecap="round" opacity=".8" transform="translate(2 0)"/>
<path d="M220 566 L240 574" stroke="#0A0C26" strokeWidth="5" strokeLinecap="round"/>
<circle cx="378" cy="578" r="60" fill="url(#lampK)" className="flick"/>
<rect x="368" y="566" width="20" height="28" rx="3" fill="#FFC060"/>
<path d="M372 566 q6 -12 12 0" stroke="#0A0C26" strokeWidth="3" fill="none"/>
</svg>
  );
}

export function SkullLogo() {
  return (
<svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><circle cx="17" cy="14" r="9" fill="#F1E6CC"/><circle cx="13.500" cy="13" r="2.200" fill="#17143A"/><circle cx="20.500" cy="13" r="2.200" fill="#17143A"/><rect x="12" y="20" width="10" height="5" rx="1" fill="#F1E6CC"/><path d="M4 30 L30 18 M4 18 L30 30" stroke="#FFD9A0" strokeWidth="3" strokeLinecap="round"/></svg>
  );
}

export function SkullBig() {
  return (
<svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="20" r="14" fill="#F1E6CC"/><circle cx="20" cy="19" r="3.500" fill="#17143A"/><circle cx="32" cy="19" r="3.500" fill="#17143A"/><path d="M24 25 L26 28 L28 25 Z" fill="#17143A"/><rect x="19" y="31" width="14" height="7" rx="2" fill="#F1E6CC"/><path d="M6 48 L46 28 M6 28 L46 48" stroke="#FFD9A0" strokeWidth="4" strokeLinecap="round"/></svg>
  );
}

export function ShipArt() {
  return (
<svg className="art-ship" aria-hidden="true" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet"><g fill="#1A0E30"><path d="M20 190 L380 190 C366 226 330 250 280 252 L110 252 C62 248 34 226 20 190 Z"/><rect x="310" y="160" width="62" height="32"/><rect x="110" y="50" width="7" height="140"/><rect x="200" y="20" width="7" height="170"/><rect x="290" y="80" width="6" height="110"/><path d="M20 190 L-6 172" stroke="#1A0E30" strokeWidth="6" strokeLinecap="round"/></g><g fill="#FFD890" opacity=".9"><path d="M100 60 H170 C174 100 172 130 168 150 H100 Z"/><path d="M190 30 H252 C256 80 254 110 250 130 H190 Z"/><path d="M280 90 H320 C322 120 320 144 318 160 H280 Z"/></g><path d="M208 20 L246 30 L208 40 Z" fill="#B0242E"/></svg>
  );
}

export function CastleArt() {
  return (
<svg className="art-castle" aria-hidden="true" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax meet"><g fill="#0A0C26"><rect x="80" y="150" width="240" height="110"/><rect x="60" y="90" width="50" height="170"/><rect x="170" y="60" width="60" height="200"/><rect x="290" y="110" width="50" height="150"/><polygon points="166,60 200,10 234,60"/><polygon points="56,90 85,48 114,90"/><polygon points="286,110 315,72 344,110"/><path d="M60 86H110M286 106H344" stroke="#0A0C26" strokeWidth="12" strokeDasharray="10 10"/></g><g fill="#FFC060"><rect x="196" y="110" width="9" height="18" rx="2"/><rect x="80" y="130" width="8" height="16" rx="2"/><rect x="308" y="150" width="8" height="16" rx="2"/><rect x="150" y="190" width="8" height="16" rx="2"/></g></svg>
  );
}
