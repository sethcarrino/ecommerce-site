import React, { Component } from 'react';


class Contact extends Component {


  render() {

    return (
      <div>
        <div className="page-slider container-fluid">
          <h1 className="page-title">Contact Mahoghany</h1>
          <h3 className="page-sub-title">drop a line</h3>
        </div>
        <div className="row contact-content">
        <div className="col-md-6">
          <h3 className="contact-title">contact information</h3>
          <p>Mustache venmo taiyaki intelligentsia, plaid cardigan kinfolk lumbersexual chicharrones. Jean shorts taxidermy craft beer, franzen kombucha DIY asymmetrical pug bespoke mixtape forage art party ethical fingerstache. Hoodie stumptown cronut asymmetrical crucifix banjo. Kinfolk cronut tumblr four dollar toast artisan quinoa. Banjo sustainable unicorn, farm-to-table lyft tousled craft beer kickstarter. </p>
          <h3 className="contact-title">the process</h3>
          <p>Keffiyeh sustainable neutra biodiesel cloud bread, celiac ennui tattooed activated charcoal. XOXO echo park vegan mixtape. Flannel bitters art party four loko tbh. Flannel salvia put a bird on it, wolf disrupt biodiesel trust fund aesthetic. Mlkshk cred la croix organic. Bespoke fam readymade put a bird on it, chambray austin pabst iceland. Snackwave beard meditation poke vaporware, venmo af you probably haven't heard of them thundercats man bun humblebrag disrupt viral lyft tofu. Ramps retro kale chips hella venmo echo park tumblr four loko you probably haven't heard of them. Direct trade pop-up pabst truffaut, yuccie street art tilde. Succulents neutra blue bottle sriracha health goth post-ironic.</p>
        </div>

        <form className="col-md-6">
          <h3 className="form-title">get in touch</h3>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="First and Last Name"
            />
          </div>
          <div className="form-group">

            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Please enter your email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <input
              type="text-area"
              name="message"
              className="form-control"
              placeholder="Message"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn submit-btn form-control">
              submit
            </button>
          </div>
        </form>
        </div>

      </div>

    );
  }
}

export default Contact;
