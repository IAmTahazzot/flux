export const AuthCover = () => {
  return (
    <div className="bg-neutral-100 dark:bg-tertiary p-4 flex flex-col justify-between border-r dark:border-r-neutral-900">
      <nav className="space-y-4">
        <div className="flex items-center gap-2">
          <div>
            <svg
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="820 0 100 100"
              width="24"
              height="24"
            >
              <g>
                <path
                  className="fill-black dark:fill-white"
                  fillRule="evenodd"
                  d="m881.9 93.2c-6.3-6.2-12.6-14-19.6-19.4-3.1-2.4-6.6-3.5-11.3-1.1-0.1 0-0.1 0.4 0 0l10.4-10.4c3.4-3.4 8.8-3.4 12.2 0l18.9 18.9c7.6 7.6-4 18.6-10.6 12zm-28.3 0.7c12.5 0 12.5-18.7 0-18.7-5.2-0.1-9.3 4.1-9.4 9.3 0 5.2 4.2 9.4 9.4 9.4zm3.8-85.9c6.2 6.3 12.5 14.1 19.5 19.4 3.2 2.4 6.7 3.6 11.4 1.1 0 0 0-0.3 0 0l-10.4 10.5c-3.4 3.3-8.9 3.3-12.2 0l-19-19c-7.6-7.6 4.1-18.6 10.6-12zm28.3-0.6c-5.2 0-9.3 4.1-9.3 9.3 0 5.2 4.1 9.4 9.3 9.4 12.5 0 12.5-18.7 0-18.7zm-58.6 55.5c6.2-6.3 14-12.6 19.4-19.6 2.4-3.1 3.6-6.7 1.1-11.3 0.1-0.1-0.3-0.1 0 0l10.4 10.4c3.4 3.4 3.4 8.8 0 12.2l-18.9 18.9c-7.6 7.6-18.6-4.1-12-10.6zm-0.7-28.3c0 11.3 16.4 12.9 18.6 1.8 2.2-11.1-13.5-15.8-17.8-5.4-0.5 1.2-0.8 2.4-0.8 3.6zm85.9 3.8c-6.2 6.2-14 12.5-19.4 19.5-2.4 3.2-3.6 6.7-1.1 11.4 0 0 0.3 0 0 0l-10.4-10.4c-3.4-3.4-3.4-8.9 0-12.2l18.9-19c7.6-7.6 18.6 4.1 12 10.7zm0.6 28.2c0-12.4-18.7-12.4-18.7 0.1 0 12.4 18.7 12.4 18.7-0.1z"
                />
              </g>
            </svg>
          </div>
          <h1 className="font-koho font-bold text-2xl dark:text-white/80">
            Flux
          </h1>
        </div>
        <p className="text-sm">
          <span>
            Welcome to Flux, a simple and secure way to manage your finances.{' '}
          </span>
          <span>
            {' '}
            This is a{' '}
            <strong
              className="underline"
              title="Prototype is a preliminary model of something. It is a mock-up or a demo of a product that is used for testing and evaluation. "
            >
              prototype
            </strong>
            , so please do not use real information.
          </span>
        </p>
      </nav>
      <footer>
        <span className="text-black/70 dark:text-white/50 text-sm">
          powered by{' '}
          <a href="https://github.com/iamtahazzot" className="underline">
            tahazzot
          </a>
        </span>
      </footer>
    </div>
  );
};
