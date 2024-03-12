function Footer() {
  return (
    <footer className="flex w-full justify-center p-2">
      <div className="w-fit rounded-full bg-stone-50 bg-opacity-5 px-4 py-2">
        <p className="text-stone-100">
          <span className="mr-2 text-rose-700">&copy;</span>
          {new Date().getFullYear()} Angela Bellò
        </p>
      </div>
    </footer>
  );
}

export default Footer;
