export default function Head() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      {/* PNG fallback if you add public/favicon.png (modern browsers support PNG favicons) */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      {/* Apple touch icon for iOS */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
