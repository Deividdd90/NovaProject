import  GoogleLogin  from 'react-google-login';


const LoginGoogle = () => {

    const respGoogle =(resp) => {
        console.log(resp);
    }

    return    <GoogleLogin
        clientId="712374110124-vn4dcthl9qq1vq33m4mbee33raajmmvq.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={respGoogle}
        onFailure={respGoogle}
        cookiePolicy={'single_host_origin'} />
}

export default LoginGoogle;


