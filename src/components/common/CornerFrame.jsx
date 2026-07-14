function CornerFrame({ className = "" }) {
  const tick = "absolute w-5 h-5 border-signal";

  return (
    <div
      className={`pointer-events-none absolute inset-6 md:inset-8 ${className}`}
    >
      <span className={`${tick} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${tick} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${tick} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${tick} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}

export default CornerFrame;
