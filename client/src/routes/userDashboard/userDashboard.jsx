import{ useState , React , useEffect }from "react"
import axios from "axios";
import "./userDashboard.scss"

const UserDashboard = () => {

      const [message, setMessage] = useState('');
      const [loading, setLoading] = useState(true); 

      useEffect(() => {
        const token = localStorage.getItem('user-token');
        if (!token) {
          window.location.href = '/userLogin';
          return;
        }
    
        axios
          .get('/api/user/userDashboard', {
            headers: {
              'x-auth-token': token,
            },
          })
          .then((res) => {
            setMessage(res.data.message)
            setLoading(false)
          
          }
          )
          .catch(() => {
            localStorage.removeItem('admin-token');
            window.location.href = '/adminLogin';
          });
      }, []);

        if(loading) return null;


    return(
        <div className="userDashboard">
            <h1>This is the user dashboard</h1>

        </div>
    )

}



export default UserDashboard