export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>© {new Date().getFullYear()} CarHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }