export default function Main(properties) {
  const { children } = properties;

  return (
    <div {...properties} id="main" className="relative pos-main">
      <div
        id="overlay"
        role="presentation"
        className="opacity transition-opacity ease-out-in duration-400 dark:bg-dark-800"
      />

      {children}
    </div>
  );
}
