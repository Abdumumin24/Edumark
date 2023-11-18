const formItself = () => {
    return(
        <div>
        <form id="test-form" className="white-popup-block mfp-hide">
        <div className="popup_box ">
            <div className="popup_inner">
                <div className="logo text-center">
                    <a href="/">
                        <img src="img/form-logo.png" alt=""/>
                    </a>
                </div>
                <h3>Sign in</h3>
                <form action="/">
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <input type="email" placeholder="Enter email"/>
                        </div>
                        <div className="col-xl-12 col-md-12">
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div className="col-xl-12">
                            <button type="submit" className="boxed_btn_orange">Sign in</button>
                        </div>
                    </div>
                </form>
                <p className="doen_have_acc">Don’t have an account? <a className="dont-hav-acc" href="/test-form2">Sign Up</a>
                </p>
            </div>
        </div>
    </form>
    
    <form id="test-form2" className="white-popup-block mfp-hide">
        <div className="popup_box ">
            <div className="popup_inner">
                <div className="logo text-center">
                    <a href="/">
                        <img src="img/form-logo.png" alt=""/>
                    </a>
                </div>
                <h3>Resistration</h3>
                <form action="/">
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <input type="email" placeholder="Enter email"/>
                        </div>
                        <div className="col-xl-12 col-md-12">
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div className="col-xl-12 col-md-12">
                            <input type="Password" placeholder="Confirm password"/>
                        </div>
                        <div className="col-xl-12">
                            <button type="submit" className="boxed_btn_orange">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </form>
    </div>
    );
};

export default formItself;
