import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <Link href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">

            </Link>
            <span class="">© 2023 abdiopp</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" href="javascript:void(0)"><i class="bi bi-facebook"></i></a></li>
            <li class="ms-3"><a class="text-muted" href="javascript:void(0)"><i class="bi bi-instagram"></i></a></li>
            <li class="ms-3"><a class="text-muted" href="javascript:void(0)"><i class="bi bi-twitter"></i></a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
