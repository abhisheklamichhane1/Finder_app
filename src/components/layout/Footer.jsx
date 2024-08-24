function Footer() {
    const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-5 bg-neutral text-neutral-content footer-center">
        <p>Copyright &copy; { footerYear } All Rights Reserved</p>
    </footer>
  )
}

export default Footer