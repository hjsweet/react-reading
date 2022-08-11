/*
 * @Author: feiyu
 * @Date: 2022-06-24 20:37:07
 * @LastEditors: feiyu
 * @LastEditTime: 2022-06-24 20:43:46
 * @Description: file content
 */
import { useNavigate,useLocation,useParams } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    
    return (
      <Component
        navigate={navigate}
        location={location}
        params={params}
        {...props}
        />
    );
  };
  
  return Wrapper;
};