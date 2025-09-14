import SignIn from "../components/auth/signin/SignIn"

const LoginPage = ({setIsAuth, setUser}) => {
   return <SignIn setIsAuth={setIsAuth} setUser={setUser}/>
}
export default LoginPage