function Footer() {
  return (
    <footer className="w-full flex justify-center p-2">
      <div className="w-fit py-2 px-4 rounded-full bg-stone-50 bg-opacity-5">
        <p className="text-stone-100">
          <span className="text-rose-700 mr-2">&copy;</span>
          {new Date().getFullYear()} Angela Bellò
        </p>
      </div>
    </footer>
  );
}

export default Footer;
