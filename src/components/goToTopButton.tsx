interface Props {
    show: boolean;
}

const goToTopButton = ( { show }: Props) => {
    return (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 bg-[#FF6F34] text-white p-3 rounded-full shadow-lg hover:bg-[#ff814b] transition-opacity duration-500 z-50 ${
            show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
        
    )
}

export default goToTopButton;