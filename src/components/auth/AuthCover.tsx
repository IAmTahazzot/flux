export const AuthCover = () => {
  return (
    <div className="bg-tertiary p-4 flex flex-col justify-between border-r border-r-neutral-900">
      <nav className="space-y-4">
        <h1 className="font-koho font-bold text-2xl text-white/80">Flux</h1>
        <p className="text-sm">
          <span> Welcome to Flux, a simple and secure way to manage your finances. </span>
          <span> This is a <strong className="underline"
                                   title="Prototype is a preliminary model of something. It is a mock-up or a demo of a product that is used for testing and evaluation. ">prototype</strong>,
          so please do not use real information.
          </span>
        </p>
      </nav>
      <footer>
          <span className="text-white/50 text-sm">
            powered by <a href="https://github.com/iamtahazzot" className="underline">tahazzot</a>
          </span>
      </footer>
    </div>
  );
};
