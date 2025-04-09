export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const renderPageNumbers = () => {
      const pages = [];
      
      // Always show first page
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          1
        </button>
      );
      
      // Calculate range to display
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push(<span key="ellipsis1" className="px-2">...</span>);
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`px-3 py-1 rounded-md ${
              currentPage === i
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {i}
          </button>
        );
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push(<span key="ellipsis2" className="px-2">...</span>);
      }
      
      // Always show last page if there's more than one page
      if (totalPages > 1) {
        pages.push(
          <button
            key={totalPages}
            onClick={() => onPageChange(totalPages)}
            className={`px-3 py-1 rounded-md ${
              currentPage === totalPages
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {totalPages}
          </button>
        );
      }
      
      return pages;
    };
  
    if (totalPages <= 1) {
      return null;
    }
  
    return (
      <div className="flex items-center justify-center space-x-2 mt-8">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          Previous
        </button>
        
        <div className="flex items-center space-x-1">
          {renderPageNumbers()}
        </div>
        
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          Next
        </button>
      </div>
    );
  }
  