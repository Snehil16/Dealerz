import React from "react";


function NavBar() {



    return (
        <div>
            {/* <!-- Navigation --> */}
        <div class="navWrapper">
            <div class="menu">
              <div class="navLinkContainer1">
                <h1 class="title">Dealerz.</h1>
              </div>
            </div>
            <div class="navLinks"> 
                <div class="navLinkContainer"><a href="#"><i class="fa fa-phone"></i>Call Center</a></div>
                <div class="navLinkContainer"><a href="#"><i class="fa fa-truck"></i>Shipping & Returns</a></div>
            </div>
        </div>
        {/* <!-- End of Navigation --> */}
        {/* <!-- Search Bar --> */}
        <div class="searchBar">
            <div class="categories">
                <div class="catLinks">
                    <div class="catLinksContainer"><a href="#">Shop</a></div>
                    <div class="catLinksContainer"><a href="#">Promo</a></div>
                    <div class="catLinksContainer"><a href="#">About</a></div>
                    <div class="catLinksContainer"><a href="#">Blog</a></div>
                </div>
            </div>
            <div class="search">
                <form>
                    <input type="text" placeholder="Search what you need"/>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <div class="icons">
                <div class="iconsContainer"><a href="#"><i class="fa fa-heart"></i></a></div>
                <div class="iconsContainer"><a href="#"><i class="fa fa-shopping-cart"></i></a></div>
                <div class="iconsContainer"><a href="#"><i class="fa fa-user"></i></a></div>
                <div class="iconsContainer"><a href="#"><i class="fa fa-bell"></i></a></div>
            </div>
        </div>

        {/* <!-- End of Search Bar --> */}
        </div>
    );

}



export default NavBar;