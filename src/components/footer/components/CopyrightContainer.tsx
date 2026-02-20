const date = new Date();
const fullYear = date.getFullYear();

export function CopyrightContainer() {
  return (
    <div className="container copyright text-center mt-4">
      <p>© <span>2025-{fullYear}. Copyright</span> <strong className="px-1 sitename">Dazn311</strong>
        <span>All Rights Reserved</span>, version of 06.02.2026</p>
      <div className="credits">
        Designed by <a href="#">BootstrapMade</a>
      </div>
    </div>
  )
}