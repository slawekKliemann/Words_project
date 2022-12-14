import React from "react";

export function Footer(){

    return(
        <>
           <footer className="footer">
               <div className="footer_copyright">
                   <p>Copyright &#169; 2022 by Sławek Kliemann</p>
                   <p>Detektyw zaprojektowany przez bonezboyz z
                       <a href="https://pl.pngtree.com"> Pngtree.com</a>
                   </p>
               </div>
               <div className="footer_social">
                   <a className="footer_social-link"
                      href="https://github.com/slawekKliemann"
                      target="blank">
                      <i className="fa-brands fa-github"></i>
                   </a>
                   <a className="footer_social-link"
                      href="https://www.facebook.com/profile.php?id=100001944232400"
                      target="blank">
                      <i className="fa-brands fa-facebook"></i>
                  </a>
               </div>
           </footer>
        </>
    )
}

