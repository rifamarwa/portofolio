export default function BackgroundDecoration() {
  return (
    <div aria-hidden="true" className="portfolio-background pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg
        viewBox="0 0 900 900"
        fill="none"
        focusable="false"
        className="absolute -bottom-40 -right-48 w-[42rem] text-primary opacity-20 sm:-right-32 sm:w-[54rem] lg:w-[64rem] dark:opacity-15"
      >
        <g stroke="currentColor" strokeWidth="1.25">
          <path d="M236 900V466c0-176 144-320 320-320s320 144 320 320v434" />
          <path d="M284 900V466c0-150 122-272 272-272s272 122 272 272v434" />
          <path d="M332 900V466c0-124 100-224 224-224s224 100 224 224v434" />
        </g>
        <path
          d="M70 850c150-65 250-240 465-222 125 10 215 95 365 55"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-accent-500"
        />
      </svg>
    </div>
  );
}
