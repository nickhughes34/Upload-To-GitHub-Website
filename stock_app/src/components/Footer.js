import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer( {color} ) {
  return (
    <MDBFooter bgColor={color} className='text-center text-md-start text-muted'>
      <section className='p-4 border-bottom'>
        <MDBContainer className='text-center'>
        <MDBRow className=''>

        <MDBCol md='12' lg='6' className='mx-auto text-lg-start'>
        <div className='me-0'>
          <span>Get connected with us on social networks:</span>
        </div>
        </MDBCol>

        <MDBCol md='12' lg='6' className='mx-auto text-lg-end'>
        <div>
          <a href='#facebook' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='#twitter' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='#google' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='#instagram' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="6" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                NDVP Stock App
              </h6>
              <p>
                Our app help you view and see uptodate stock prices with a quick search.
              </p>
            </MDBCol>

            <MDBCol md="6" lg="2" xl="2" className='mx-auto mb-4 footer-links'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#accounts' className='text-reset'>
                  Accounts
                </a>
              </p>
              <p>
                <a href='#summary' className='text-reset'>
                  Summary
                </a>
              </p>
              <p>
                <a href='#funding' className='text-reset'>
                  Funding
                </a>
              </p>
              <p>
                <a href='#report' className='text-reset'>
                  Report
                </a>
              </p>
            </MDBCol>

            <MDBCol md="6" lg="2" xl="2" className='mx-auto mb-4 footer-links'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#mangament' className='text-reset'>
                  Management
                </a>
              </p>
              <p>
                <a href='#research' className='text-reset'>
                  Research
                </a>
              </p>
              <p>
                <a href='#requests' className='text-reset'>
                  Requests
                </a>
              </p>
              <p>
                <a href='#contact' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="6" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                London, L1Y 6U3, CA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                stocks@market.ca
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                + 1 289 899 9632
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" />
                + 1 295 365 8951
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:&nbsp;
        <a className='text-reset fw-bold' href='/'>
          NDVP Stock App
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
