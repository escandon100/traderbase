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
    
        axios.get('http://localhost:5000/api/userDashboard/send/', { headers: { 'user-token': token}}).then((res) => {
             setMessage(res.data.message)
             setLoading(false)
          }
          )
          .catch(() => {
            localStorage.removeItem('user-token');
            window.location.href = '/userLogin';
          });
      }, []);

        const handleLogout = () => {
    localStorage.removeItem('user-token');
    window.location.href = '/userLogin';
        };

        if(loading) return null;


    return(
        <div className="userDashboard">
            <h1>{message}</h1>
            <button onClick={handleLogout}>Logout</button>

        </div>
    )

}



export default UserDashboard