

function Login() {
      
  return (
    <div className="w3-main"  style={{marginRight:'20px'}}>
        <div className="wrapper" id="loginpage">
	        <div className="form">
		        <div className="title">
                    Welcome to SLU Basket Ball Team
		        </div>
		        <form  onSubmit="return validation();">
			        <div className="input_wrap">
				        <label for="input_text">Email or Username</label>
                    </div>    
                    <div className="input_field">
                        <input  className="input" id="input_text"/>
                    </div>
			
                    <div className="input_wrap">
                        <label for="input_password">Password</label>
                        <div className="input_field">
                            <input type="password" className="input" id="input_password"/>
                        </div>
                    </div>
                    <div className="input_wrap">
                        <input type="submit" id="login_btn" className="btn disabled" value="Login" disabled="true"/>
                        
                    </div>
		        </form>
	        </div>
        </div>
   
    </div> 
    
  );
}

export default Login;
