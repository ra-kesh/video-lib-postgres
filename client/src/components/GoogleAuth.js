import React from "react";
import Button from "../styles/Auth";
import { SignInIcon } from "./Icons";
import { GoogleLogin } from "react-google-login";
import { authenticate } from "../utils/api-client";

function GoogleAuth() {
  return (
    <GoogleLogin
      clientId="519220158123-g3c0oji76f5ptc1mddqu5ifbfr922oun.apps.googleusercontent.com"
      cookiePolicy="single_host_origin"
      onSuccess={authenticate}
      onFailure={authenticate}
      render={(renderProps) => (
        <Button
          tabIndex={0}
          type="button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <span className="outer">
            <span className="inner">
              <SignInIcon />
            </span>
            sign in
          </span>
        </Button>
      )}
    />
  );
}

export default GoogleAuth;
