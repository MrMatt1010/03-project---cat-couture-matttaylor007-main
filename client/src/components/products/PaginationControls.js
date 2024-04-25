import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PaginationControls = ({
  onPrev,
  onNext,
  currentPage = null,
  totalPages = null,
  isFirstPage = false,
  isLastPage = false,
}) => {
  return (
    <div className="container">
      <div className="controls">
        <div>
          <button
            aria-label="Previous page"
            onClick={onPrev}
            disabled={isFirstPage}>
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div>
          <button aria-label="Next page" onClick={onNext} disabled={isLastPage}>
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
      </div>
      {/* Highlight current page */}
      <div className="page-indicator">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={currentPage === index + 1 ? "active" : ""}>
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PaginationControls;
